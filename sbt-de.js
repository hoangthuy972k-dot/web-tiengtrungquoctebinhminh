// Sach bai tap tren lop: doi bai tap sach bai tap cua mot bai hoc (var wbData trong
// public/js/<bai>-data.js — chinh du lieu trang bai "📓 Luyen tap sach bai tap" dang dung)
// sang de cung dang EXAM_DATA cua phong thi (public/exam/exam.js) de phong Thi tren lop
// (thi-lop.js) to chuc, cham, thong ke y nhu de HSK.
//
// Dang bai sach bai tap -> dang cau phong thi:
//   tonemc (chon thanh dieu / van mau)        -> mc          (cham theo phuong an)
//   pymatch (ghep pinyin voi chu Han)         -> word-fill   (kho chu Han A–F, moi dong 1 pinyin)
//   blankdrill (go tu / thanh mau con thieu)  -> write       (cham theo chu, bo dau cach + dau cau)
//   mocktest · options la tranh               -> pic-mc, hoac pic-match khi nhieu cau dung chung bo tranh / cau co loi
//   mocktest · options la chu                  -> mc
//   mocktest · ✓ Đúng / ✗ Sai + tranh          -> judge-pic
//   mocktest · letters + ngan tranh            -> pic-match
//   mocktest · letters + ngan chu              -> word-fill (cau co o trong "（　）") / sent-match
//   mocktest · input (go chu Han theo pinyin)  -> write
// Bang, anh minh hoa, danh sach tu doc theo (table / photos / tones / wordlist / dialoguepics)
// la phan doc tham khao, khong co cau tra loi -> khong dua vao de.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BAI_RE = /^([a-z0-9]{2,10})-bai-(\d{1,2})$/;
const CHU = 'ABCDEFGHIJKLMNOP';
const PHAN = [
  { id: 'listen', name: 'Nghe', icon: 'headphones' },
  { id: 'read', name: 'Đọc', icon: 'book' },
  { id: 'write', name: 'Viết', icon: 'pencil' },
];
const TEN_CAP = { hsk1: 'HSK 1 (giáo trình cũ)', hsk1v3: 'HSK 1 (3.0 Mới)', hsk2: 'HSK 2 (giáo trình cũ)', hsk2v3: 'HSK 2 (3.0 Mới)', hsk3v3: 'HSK 3 · 3.0', hsk4v3: 'HSK 4 · 3.0' };
const THU_TU_CAP = ['hsk1v3', 'hsk2v3', 'hsk3v3', 'hsk4v3', 'hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5', 'hsk6'];
const MAX_CAU = 200;
// Cap dang mo cho Sach bai tap tren lop. Moi mo HSK 1 (3.0) — da thu tron mot phong thi.
// Cac cap khac (hsk2v3, hsk1 cu) da doi duoc (xem bao cao kiem tra) nhung chua thu tren lop:
// them vao day khi da thu xong, vd ['hsk1v3', 'hsk2v3', 'hsk1'].
const CAP_MO = ['hsk1v3'];
// Loi dan mac dinh khi sach khong ghi ten phan
const LOI_DAN = {
  'pic-mc': 'Chọn tranh đúng', 'pic-match': 'Chọn tranh phù hợp', mc: 'Chọn đáp án đúng', 'judge-pic': 'Nhìn tranh: từ dưới tranh đúng hay sai?',
  'word-fill': 'Chọn từ thích hợp điền vào chỗ trống', 'sent-match': 'Chọn câu phù hợp', write: 'Viết chữ Hán vào chỗ trống',
};

function chuoi(v, n) { return String(v == null ? '' : v).replace(/<[^>]*>/g, '').replace(/[\u0000-\u0009\u000b-\u001f]/g, ' ').slice(0, n || 600); }
function bam(s) { let h = 2166136261; s = String(s); for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
// Dao co dinh theo noi dung (tai lai van cung thu tu), khong de nguyen thu tu goc
function dao(arr, khoa) {
  const out = arr.slice();
  let h = bam(khoa);
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0;
    const j = h % (i + 1); const t = out[i]; out[i] = out[j]; out[j] = t;
  }
  if (out.length > 1 && out.every((x, i) => x === arr[i])) out.push(out.shift());
  return out;
}
// "Phần 1 · Nghe một câu, chọn tranh đúng" -> ten "Phần 1", loi dan phia sau
function tachTen(t) {
  t = chuoi(t, 160);
  const i = t.indexOf(' · ');
  return i < 0 ? { name: t, intro: '' } : { name: t.slice(0, i), intro: t.slice(i + 3) };
}
// Dap an go tay bang pinyin: dien thoai hay tu viet hoa chu dau -> nhan ca hai
function cachKhac(ans, them) {
  const out = (Array.isArray(them) ? them : []).map((x) => chuoi(x, 120)).filter(Boolean);
  const hoa = ans.charAt(0).toUpperCase() + ans.slice(1);
  if (hoa !== ans) out.push(hoa);
  return out.slice(0, 4);
}
function coTrong(s) { return /（\s*　*\s*）|\(\s*\)/.test(s || ''); }
function laDungSai(opts) {
  return opts && opts.length === 2 && opts.every((o) => !o.img) && /^\s*(✓|对|đúng)/i.test(opts[0].text || '') && /^\s*(✗|×|错|sai)/i.test(opts[1].text || '');
}

module.exports = function taoSbt(PUBLIC_DIR) {
  const JS_DIR = path.join(PUBLIC_DIR, 'js');
  const boNho = {}; // baiId -> { mt, wb }
  let mucLuc = null, mucLucMt = 0, dsTep = null, dsTepLuc = 0;

  function docMucLuc() {
    const f = path.join(JS_DIR, 'data.js');
    let mt = 0;
    try { mt = fs.statSync(f).mtimeMs; } catch (e) { return mucLuc || { cap: {}, bai: {} }; }
    if (mucLuc && mt === mucLucMt) return mucLuc;
    const out = { cap: {}, bai: {} };
    try {
      const d = vm.runInNewContext(fs.readFileSync(f, 'utf8') + '\n;({ levels: APP_DATA.levels, lessons: APP_DATA.lessons })', {}, { timeout: 2000 });
      (d.levels || []).forEach((l) => { out.cap[l.id] = l.name; });
      Object.keys(d.lessons || {}).forEach((lv) => (d.lessons[lv] || []).forEach((b) => {
        const m = /\/lessons\/([a-z0-9-]+)\.html$/.exec(b && b.fullPageUrl || '');
        if (m) out.bai[m[1]] = { ten: b.title || '', zh: b.titleHanzi || '' };
      }));
    } catch (e) { console.error('sbt-de: khong doc duoc data.js', e.message); }
    mucLuc = out; mucLucMt = mt;
    return out;
  }

  function docWb(baiId, caCapDong) {
    if (!BAI_RE.test(baiId)) return null;
    if (!caCapDong && CAP_MO.indexOf(capCua(baiId)) === -1) return null;
    const f = path.join(JS_DIR, baiId + '-data.js');
    let mt = 0;
    try { mt = fs.statSync(f).mtimeMs; } catch (e) { return null; }
    const c = boNho[baiId];
    if (c && c.mt === mt) return c.wb;
    let wb = null;
    const src = fs.readFileSync(f, 'utf8');
    if (/\bvar\s+wbData\b/.test(src)) {
      const sb = {}; sb.window = sb;
      try { vm.runInNewContext(src + '\n;this.__wb = typeof wbData !== "undefined" ? wbData : null;', sb, { timeout: 2000 }); wb = sb.__wb; } catch (e) { wb = null; }
    }
    if (!wb || !Array.isArray(wb.sections)) wb = null;
    boNho[baiId] = { mt, wb };
    return wb;
  }

  // Cac bai tap cham duoc cua mot bai, theo thu tu trong sach
  function baiTap(wb) {
    const ds = [];
    wb.sections.forEach((s, si) => (s.blocks || []).forEach((b, bi) => {
      const ten = chuoi(s.title, 80);
      if (b.type === 'mocktest') {
        [['listening', 'L', 'listen', 'Nghe'], ['reading', 'R', 'read', 'Đọc'], ['writing', 'W', 'write', 'Viết']].forEach(([k, h, phan, tp]) => {
          const qs = (b[k] || []).filter((q) => q && q.answer);
          if (!qs.length) return;
          const tu = String(qs[0].n), den = String(qs[qs.length - 1].n);
          ds.push({ id: 's' + si + 'b' + bi + h, ten, tieu: tp + ' (câu ' + (tu === den ? tu : tu + '–' + den) + ' trong sách)', phan, so: qs.length, nghe: phan === 'listen' && !!s.audio,
            audio: phan === 'listen' ? s.audio || '' : '', si, b, k });
        });
        return;
      }
      if (b.type !== 'tonemc' && b.type !== 'pymatch' && b.type !== 'blankdrill') return;
      const so = (b.items || []).filter((it) => it && (b.type === 'pymatch' ? it.py && it.hz : it.answer)).length;
      if (!so) return;
      const phan = s.audio ? 'listen' : b.type === 'blankdrill' ? 'write' : 'read';
      ds.push({ id: 's' + si + 'b' + bi, ten, tieu: chuoi(b.caption, 120) || ten, phan, so, nghe: !!s.audio, audio: s.audio || '', si, b });
    }));
    return ds;
  }

  function capCua(baiId) { return BAI_RE.exec(baiId)[1]; }
  function tenCap(cap) { return TEN_CAP[cap] || docMucLuc().cap[cap] || cap.toUpperCase(); }

  // Danh sach cho trang thay co: cap -> bai co sach bai tap -> cac bai tap
  function dsCap(caCapDong) {
    if (!dsTep || Date.now() - dsTepLuc > 60000) {
      try { dsTep = fs.readdirSync(JS_DIR).map((f) => f.replace(/-data\.js$/, '')).filter((x) => BAI_RE.test(x)); } catch (e) { dsTep = []; }
      dsTepLuc = Date.now();
    }
    const ml = docMucLuc();
    const theoCap = {};
    dsTep.forEach((id) => {
      const wb = docWb(id, caCapDong);
      if (!wb) return;
      const bt = baiTap(wb);
      if (!bt.length) return;
      const cap = capCua(id);
      const t = ml.bai[id] || {};
      (theoCap[cap] = theoCap[cap] || []).push({
        id, so: Number(BAI_RE.exec(id)[2]), ten: t.ten || '', zh: t.zh || '',
        bt: bt.map((x) => ({ id: x.id, ten: x.ten, tieu: x.tieu, phan: x.phan, so: x.so, nghe: x.nghe })),
      });
    });
    return Object.keys(theoCap).sort((a, b) => {
      const ia = THU_TU_CAP.indexOf(a), ib = THU_TU_CAP.indexOf(b);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a.localeCompare(b);
    }).map((cap) => ({ id: cap, ten: tenCap(cap), bai: theoCap[cap].sort((x, y) => x.so - y.so) }));
  }

  // ---------- doi tung bai tap sang cac "part" cua phong thi ----------
  // dem.n: so cau chay lien tuc ca de
  function partKhoi(x, dem) {
    const b = x.b, name = x.ten, intro = x.tieu;
    if (b.type === 'tonemc') {
      const questions = [];
      b.items.forEach((it) => {
        const opts = (it.options || []).map((o) => chuoi(o, 60));
        const i = opts.indexOf(chuoi(it.answer, 60));
        if (i < 0 || opts.length < 2 || opts.length > 6) return;
        const truoc = chuoi(it.before, 200), sau = chuoi(it.after, 200);
        const zh = b.noBlank ? truoc + sau : truoc || sau ? truoc + '（　）' + sau : '';
        questions.push({ n: ++dem.n, zh, options: opts.map((o) => ({ zh: o })), answer: CHU[i], vn: (truoc + opts[i] + sau).trim() });
      });
      return questions.length ? [{ name, intro, type: 'mc', questions }] : [];
    }
    if (b.type === 'blankdrill') {
      const questions = [];
      b.items.forEach((it) => {
        const ans = chuoi(it.answer, 60).trim();
        if (!ans) return;
        questions.push({ n: ++dem.n, pre: chuoi(it.before, 200), py: '', post: chuoi(it.after, 200), answer: ans, accept: cachKhac(ans), maxlength: Math.max(2, Math.min(12, Number(b.maxlength) || 6)) });
      });
      return questions.length ? [{ name, intro, type: 'write', questions }] : [];
    }
    if (b.type === 'pymatch') {
      const items = b.items.filter((it) => it && it.py && it.hz).slice(0, CHU.length);
      const kho = dao(items.map((it) => chuoi(it.hz, 40)), items.map((it) => it.hz).join('|'));
      const words = kho.map((zh, i) => ({ k: CHU[i], zh, py: '' }));
      const questions = items.map((it) => ({ n: ++dem.n, zh: chuoi(it.py, 60), answer: CHU[kho.indexOf(chuoi(it.hz, 40))], vn: chuoi(it.py, 60) + ' — ' + chuoi(it.hz, 40) }));
      if (!questions.length) return [];
      return [{ name, intro, type: 'word-fill', groups: [{ words, questions, range: [questions[0].n, questions[questions.length - 1].n] }] }];
    }
    return [];
  }

  // Mot cau de mo phong -> { kieu, cau, khoa } (khoa: bo tranh / ngan chu dung chung de gom nhom)
  function cauMoPhong(q, bank) {
    const giai = {};
    if (q.script) { giai.script = chuoi(q.script, 1200); if (q.vn) giai.scriptVn = chuoi(q.vn, 1200); }
    else if (q.vn) giai.vn = chuoi(q.vn, 1200);
    const ans = chuoi(q.answer, 120).trim();
    const zh = chuoi(q.prompt, 1200), py = chuoi(q.promptPy, 1200);
    if (q.input) {
      const m = /^([\s\S]*?)[（(]\s*([^）)]*?)\s*[）)]([\s\S]*)$/.exec(zh);
      return { kieu: 'write', cau: Object.assign({ pre: m ? m[1] : zh, py: m ? m[2] : '', post: m ? m[3] : '', answer: ans, accept: cachKhac(ans, q.accept), maxlength: Math.max(2, Math.min(12, Number(q.maxlength) || 4)) }, giai) };
    }
    if (Array.isArray(q.letters)) {
      const keys = q.letters.map((k) => chuoi(k, 2));
      if (keys.indexOf(ans) < 0) return null;
      if (bank && bank.length && bank.every((x) => x.img)) {
        const pics = {}; bank.forEach((x) => { pics[chuoi(x.key, 2)] = chuoi(x.img, 300); });
        return { kieu: 'pic-match', khoa: 'b:' + Object.values(pics).join('|'), nhom: { pics }, cau: Object.assign({ zh, py, answer: ans }, giai) };
      }
      if (bank && bank.length) {
        const ds = bank.map((x) => ({ k: chuoi(x.key, 2), zh: chuoi(x.text, 300), py: chuoi(x.py, 300) }));
        const kieu = coTrong(zh) ? 'word-fill' : 'sent-match';
        return { kieu, khoa: 'b:' + ds.map((x) => x.k + x.zh).join('|'), nhom: kieu === 'word-fill' ? { words: ds } : { options: ds }, cau: Object.assign({ zh, py, answer: ans }, giai) };
      }
      const i = keys.indexOf(ans);
      return { kieu: 'mc', cau: Object.assign({ zh, py, options: keys.map((k) => ({ zh: k })), answer: CHU[i] }, giai) };
    }
    const opts = Array.isArray(q.options) ? q.options : [];
    const i = opts.findIndex((o) => chuoi(o.key, 2) === ans);
    if (i < 0 || opts.length < 2) return null;
    if (laDungSai(opts) && q.img) {
      return { kieu: 'judge-pic', cau: Object.assign({ img: chuoi(q.img, 300), zh, py, answer: i === 0 }, giai) };
    }
    if (opts.every((o) => o.img)) {
      const pics = {}; opts.forEach((o) => { pics[chuoi(o.key, 2)] = chuoi(o.img, 300); });
      return { kieu: 'tranh', khoa: Object.values(pics).join('|'), pics, cau: Object.assign({ zh, py, answer: ans }, giai) };
    }
    return { kieu: 'mc', cau: Object.assign({ zh, py, options: opts.map((o) => ({ zh: chuoi(o.text || o.key, 300), py: chuoi(o.py, 300) })), answer: CHU[i] }, giai) };
  }

  function partMoPhong(x, dem) {
    const list = (x.b[x.k] || []).filter((q) => q && q.answer);
    const parts = [];
    let tieuDe = '', bank = null, cur = null;
    const ketPhan = () => {
      if (!cur || !cur.cau.length) { cur = null; return; }
      const t = tieuDe ? tachTen(tieuDe) : null;
      const dau = !!tieuDe && parts.length && parts[parts.length - 1].__tieu === tieuDe;
      // sach khong ghi ten phan (HSK 1 3.0): lay dang cau lam ten ("Chọn tranh đúng · Mô phỏng đề thi")
      const mk = (type) => (tieuDe
        ? { name: t.name, intro: (t.intro || LOI_DAN[type] || '') + (dau ? ' (tiếp)' : ''), type, __tieu: tieuDe }
        : { name: LOI_DAN[type] || x.ten, intro: x.ten, type, __tieu: tieuDe });
      if (cur.kieu === 'tranh') {
        // cau lien nhau cung bo tranh (hoac cau co loi kem tranh) -> nhom chon tranh; con lai -> moi cau 3–4 tranh
        let i = 0;
        while (i < cur.cau.length) {
          let j = i + 1;
          while (j < cur.cau.length && cur.cau[j].khoa === cur.cau[i].khoa) j++;
          const chuoiCau = cur.cau.slice(i, j);
          if (chuoiCau.length > 1 || chuoiCau[0].cau.zh) {
            const qs = chuoiCau.map((c) => Object.assign({ n: ++dem.n }, c.cau));
            const g = { pics: chuoiCau[0].pics, questions: qs, range: [qs[0].n, qs[qs.length - 1].n] };
            const last = parts[parts.length - 1];
            if (last && last.type === 'pic-match' && last.__tieu === tieuDe && last.__moi) last.groups.push(g);
            else parts.push(Object.assign(mk('pic-match'), { groups: [g], __moi: true }));
          } else {
            const q = Object.assign({ n: ++dem.n, pics: chuoiCau[0].pics }, chuoiCau[0].cau);
            const last = parts[parts.length - 1];
            if (last && last.type === 'pic-mc' && last.__tieu === tieuDe && last.__moi) last.questions.push(q);
            else parts.push(Object.assign(mk('pic-mc'), { questions: [q], __moi: true }));
          }
          i = j;
        }
      } else if (cur.nhom) {
        const qs = cur.cau.map((c) => Object.assign({ n: ++dem.n }, c.cau));
        parts.push(Object.assign(mk(cur.kieu), { groups: [Object.assign({}, cur.nhom, { questions: qs, range: [qs[0].n, qs[qs.length - 1].n] })] }));
      } else {
        parts.push(Object.assign(mk(cur.kieu), { questions: cur.cau.map((c) => Object.assign({ n: ++dem.n }, c.cau)) }));
      }
      cur = null;
    };
    list.forEach((q) => {
      if (q.part) { ketPhan(); tieuDe = String(q.part); }
      if (q.bank) { ketPhan(); bank = q.bank; }
      const c = cauMoPhong(q, bank);
      if (!c) return;
      const nhom = c.kieu === 'pic-match' || c.kieu === 'word-fill' || c.kieu === 'sent-match';
      if (cur && (cur.kieu !== c.kieu || (nhom && cur.khoa !== c.khoa))) ketPhan();
      if (!cur) cur = { kieu: c.kieu, khoa: c.khoa, nhom: nhom ? c.nhom : null, cau: [] };
      cur.cau.push(c);
    });
    ketPhan();
    parts.forEach((p) => { delete p.__tieu; delete p.__moi; });
    return parts;
  }

  // De cho phong thi: chon = danh sach id bai tap (null = tat ca)
  function taoDe(baiId, chon, caCapDong) {
    const wb = docWb(baiId, caCapDong);
    if (!wb) return null;
    const tat = baiTap(wb);
    const ds = Array.isArray(chon) ? tat.filter((x) => chon.indexOf(x.id) !== -1) : tat;
    const dem = { n: 0 };
    const sections = [];
    PHAN.forEach((ph) => {
      const cua = ds.filter((x) => x.phan === ph.id);
      if (!cua.length) return;
      const parts = [];
      cua.forEach((x) => { [].push.apply(parts, x.b.type === 'mocktest' ? partMoPhong(x, dem) : partKhoi(x, dem)); });
      parts.forEach((p) => {
        const qs = p.groups ? [].concat(...p.groups.map((g) => g.questions)) : p.questions;
        p.range = [qs[0].n, qs[qs.length - 1].n];
      });
      if (!parts.length) return;
      const sec = { id: ph.id, name: ph.name, icon: ph.icon, parts };
      if (ph.id === 'listen') {
        const tracks = [];
        cua.forEach((x) => { if (x.audio && !tracks.some((t) => t.src === x.audio)) tracks.push({ src: chuoi(x.audio, 300), ten: x.ten }); });
        if (tracks.length) {
          // cung ten phan (vd hai "Ngu am") thi danh so doan
          tracks.forEach((t, i) => { t.ten = 'Đoạn ' + (i + 1) + ' · ' + t.ten; });
          sec.audio = tracks[0].src;
          sec.tracks = tracks;
          sec.note = 'Nghe loa của thầy cô và chọn đáp án.';
        }
      }
      sections.push(sec);
    });
    if (!sections.length || dem.n > MAX_CAU) return { sections: [], n: dem.n };
    const ml = docMucLuc().bai[baiId] || {};
    const so = Number(BAI_RE.exec(baiId)[2]);
    return {
      sbt: true, baiId, level: capCua(baiId),
      title: 'Sách bài tập · ' + tenCap(capCua(baiId)) + ' · Bài ' + so + (ml.zh ? ' ' + ml.zh : ml.ten ? ' · ' + ml.ten : '') +
        (ds.length < tat.length ? ' (' + ds.length + '/' + tat.length + ' bài tập)' : ''),
      theoCau: true, maxScore: 100, passScore: 60, durationSec: 0,
      phutGoiY: Math.max(5, Math.round(dem.n * 0.8) + (sections.some((s) => s.id === 'listen') ? 5 : 0)),
      sections, n: dem.n,
    };
  }

  return { dsCap, taoDe, docWb, baiTap };
};
