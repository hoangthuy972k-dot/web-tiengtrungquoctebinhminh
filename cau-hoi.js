// Cau hoi cho tro choi tren dien thoai (Thi dua tren dien thoai /choi kieu 'nhip', Doi khang /dk).
// Bo cau lay tu ngan hang "Kiem tra bai cu" (public/js/lop-kiemtra.js _boCauDt) — khong co cau dich.
// Ba kieu:
//   mc  : { lenh, zh, ctx, why, opts[2..4], dung }                    — bam 1 dap an
//   xep : { k: 'xep', lenh, ctx (nghia), why, tu[2..12], dap (cau dung) } — keo tha xep tu thanh cau
//   noi : { k: 'noi', lenh, why, trai[3..4], phai[3..4], dap[] }      — noi tu ben trai voi nghia ben phai
// May chu giu dap an; dien thoai chi nhan choHs(c).

function chuoi(s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, n); }
// Bo dau cau, khoang trang -> so khop cau Trung (giong lop-kiemtra.js)
function khoaZh(s) { return String(s == null ? '' : s).replace(/[\s，。？！、；：,.?!;:"'“”‘’「」『』《》（）()…—\-·~～]/g, ''); }

// Chuan hoa 1 cau giao vien gui len; khong hop le -> null
function chuan(c) {
  c = c || {};
  const lenh = chuoi(c.lenh, 120), why = chuoi(c.why, 300);
  if (c.k === 'xep') {
    const tu = (Array.isArray(c.tu) ? c.tu : []).slice(0, 12).map((t) => chuoi(t, 40)).filter((t) => khoaZh(t));
    const dap = chuoi(c.dap, 300);
    if (tu.length < 2 || !khoaZh(dap) || khoaZh(tu.join('')).length !== khoaZh(dap).length) return null;
    return { k: 'xep', lenh, zh: chuoi(c.zh, 300), ctx: chuoi(c.ctx, 200), why, tu, dap };
  }
  if (c.k === 'noi') {
    const trai = (Array.isArray(c.trai) ? c.trai : []).slice(0, 4).map((t) => chuoi(t, 60));
    const phai = (Array.isArray(c.phai) ? c.phai : []).slice(0, 4).map((t) => chuoi(t, 80));
    const dap = (Array.isArray(c.dap) ? c.dap : []).slice(0, 4).map(Number);
    if (trai.length < 3 || phai.length !== trai.length || dap.length !== trai.length) return null;
    if (trai.some((t) => !t.trim()) || phai.some((t) => !t.trim())) return null;
    if (dap.some((d) => !Number.isInteger(d) || d < 0 || d >= phai.length) || new Set(dap).size !== dap.length) return null;
    return { k: 'noi', lenh, zh: chuoi(c.zh, 300), why, trai, phai, dap };
  }
  const opts = Array.isArray(c.opts) ? c.opts.slice(0, 4).map((o) => chuoi(o, 120)) : [];
  const dung = Number(c.dung);
  if (opts.length < 2 || opts.some((o) => !o.trim()) || !Number.isInteger(dung) || dung < 0 || dung >= opts.length) return null;
  return { lenh, zh: chuoi(c.zh, 300), ctx: chuoi(c.ctx, 200), why, opts, dung };
}
function chuanBo(ds, toiDa) {
  return (Array.isArray(ds) ? ds : []).slice(0, toiDa || 200).map(chuan).filter(Boolean);
}

// Phan gui cho dien thoai (khong co dap an)
function choHs(c) {
  if (c.k === 'xep') return { k: 'xep', lenh: c.lenh, zh: c.zh, ctx: c.ctx, tu: c.tu };
  if (c.k === 'noi') return { k: 'noi', lenh: c.lenh, zh: c.zh, trai: c.trai, phai: c.phai };
  return { lenh: c.lenh, zh: c.zh, ctx: c.ctx, opts: c.opts };
}

// Cham bai: b = { chon } | { xep: [chi so tu theo thu tu em xep] } | { noi: [chi so ben phai cho tung tu ben trai] }
// -> { hopLe, dung, o } (o = o thong ke: chi so dap an voi mc; 0 dung / 1 sai voi xep, noi)
function cham(c, b) {
  b = b || {};
  if (c.k === 'xep') {
    const x = Array.isArray(b.xep) ? b.xep.map(Number) : [];
    if (x.length !== c.tu.length || x.some((i) => !Number.isInteger(i) || i < 0 || i >= c.tu.length) || new Set(x).size !== x.length) return { hopLe: false };
    const dung = khoaZh(x.map((i) => c.tu[i]).join('')) === khoaZh(c.dap);
    return { hopLe: true, dung, o: dung ? 0 : 1 };
  }
  if (c.k === 'noi') {
    const x = Array.isArray(b.noi) ? b.noi.map(Number) : [];
    if (x.length !== c.trai.length || x.some((i) => !Number.isInteger(i) || i < 0 || i >= c.phai.length)) return { hopLe: false };
    const dung = x.every((v, i) => v === c.dap[i]);
    return { hopLe: true, dung, o: dung ? 0 : 1 };
  }
  const chon = Number(b.chon);
  if (!Number.isInteger(chon) || chon < 0 || chon >= c.opts.length) return { hopLe: false };
  return { hopLe: true, dung: chon === c.dung, o: chon };
}
// Dap an gui lai sau khi em tra loi
function dapAn(c) { return c.k === 'xep' ? c.dap : c.k === 'noi' ? c.dap : c.dung; }
// O thong ke cho tung cau: mc dem tung dap an; xep / noi dem [dung, sai]
function tkMoi(c) { return c.k ? [0, 0] : c.opts.map(() => 0); }

module.exports = { chuan, chuanBo, choHs, cham, dapAn, tkMoi, khoaZh };
