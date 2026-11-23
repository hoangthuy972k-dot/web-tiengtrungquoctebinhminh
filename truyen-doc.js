// 📚 Truyen song ngu (/truyen) — truyen ngan tu viet theo cap + bai, doc kem pinyin / nghia, 3 cau hoi doc hieu.
// Nap tu dong boi server.js (HOC_THEM_DEPS). Khong sua server.js: chi dang ky route /api/truyen/*.
//
// Du lieu:
//  - Noi dung truyen (chu, pinyin, nghia, cau hoi KHONG dap an): public/js/truyen-data.js (trinh duyet tai thang).
//  - DAP AN + loi giai: DAP_AN ngay duoi day — chi o may chu, cham bai o POST /api/truyen/:id/nop.
//  - Kiem tra moi tu cua truyen nam trong tu vung da hoc: node tools/kiem-truyen.js
//
// Mo khoa: truyen gan voi (cap, bai) = "doc duoc sau bai N". HSK1 (3.0) luon mo (ca khach chua dang nhap).
//  Cap khac mo khi em da hoc / duoc giao toi bai do — lay tu baiOnCua(user) (bai em da lam + bai thay co giao,
//  giong nong trai / On hom nay). Moc cao nhat moi cap duoc LUU LAI (truyen_moc) nen truyen da mo khong bi khoa lai
//  khi em hoc sang bai khac. Da hoc cap tren (vd HSK3 3.0) -> mo het truyen cac cap duoi. Hoc giao trinh cu:
//  hsk3 -> mo het HSK2 (3.0), hsk4 -> het HSK3 (3.0), hsk5/hsk6 -> het HSK4 (3.0).
//
// Doc xong: dung >= 2/3 -> ghi "da doc" (truyen_doc). Sao: lan dau dat 2/3 = 3 sao, 3/3 = 5 sao (lam lai tu 2/3 len 3/3
//  duoc them 2). May chu chi TRA VE so sao "sao" — trinh duyet tu nhan qua POST /api/stars/game { n } (nguon sao tro choi
//  co san, chung tran 80 sao/ngay), khong tao nguon sao moi.
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Dap an tung truyen: [chi so lua chon dung (0 = A), loi giai]. Sinh cung luc voi truyen-data.js — sua tay thi
// nho chay node tools/kiem-truyen.js (bao loi neu thieu / lech so cau hoi).
// <dap-an>
const DAP_AN = {
  "h1-gia-dinh": [
    [1, "Câu 3: 我是越南人。— Mình là người Việt Nam."],
    [2, "Câu 5: 我爸爸是老师。— Bố mình là giáo viên (mẹ cũng là giáo viên)."],
    [0, "Câu 9: 她今年八岁。— 八 = 8. Còn 二十岁 (20 tuổi) là chị gái."],
  ],
  "h1-sui-cao": [
    [1, "Câu 4: 我想吃饺子！— Con muốn ăn sủi cảo!"],
    [1, "Câu 6: 我们坐出租车去超市。— 出租车 là xe taxi."],
    [0, "Câu 9: 明天吃包子！— Ngày mai ăn bánh bao."],
  ],
  "h1-meo-con": [
    [0, "Câu 3: 今天早上七点，我没看见小猫。— 七点 = 7 giờ."],
    [1, "Câu 9: 下午四点半下课。— 半 = rưỡi. 5 giờ là lúc về đến nhà."],
    [2, "Câu 10–11: 小猫在电视前边……它和小狗玩呢！"],
  ],
  "h1-mua-ao": [
    [1, "Câu 7: 一百二十块。— 120 đồng. 80 đồng là giá quần áo bên này."],
    [1, "Câu 10: 姐姐买两件。— 两件 = 2 chiếc."],
    [0, "Câu 11: 我买两斤苹果。— 斤 là cân (0,5 kg)."],
  ],
  "h1-em-om": [
    [1, "Câu 1: 昨天下雨了，天气有点儿冷。"],
    [0, "Câu 7: 爸爸开车，我们去医院。— 开车 = lái xe."],
    [1, "Câu 8: 在家休息两天。— 两天 = 2 ngày."],
  ],
  "h1-bac-kinh": [
    [0, "Câu 1: 去年八月 — tháng tám năm ngoái. 明年 (sang năm) là lúc muốn đi lại."],
    [1, "Câu 2: 要四个小时 — mất bốn tiếng."],
    [0, "Câu 8: 我在书店买了一本汉语书。"],
  ],
  "h2-ban-moi": [
    [1, "Câu 2: 她叫李月，是中国人。"],
    [0, "Câu 6: 她就写汉字给我看。— Bạn ấy viết chữ Hán cho mình xem."],
    [1, "Câu 11: 越南菜真不错！— 不错 = không tồi, khá ngon."],
  ],
  "h2-sinh-nhat-ba": [
    [1, "Câu 4–5 và 9: 我们买画笔吧……这些画笔的颜色真好看！"],
    [0, "Câu 7: 爷爷做了很多菜，有鱼，也有肉。"],
    [1, "Câu 10: 奶奶给我们画了一只小猫。"],
  ],
  "h2-so-thich": [
    [1, "Câu 1: 我的爱好是踢足球。— 踢足球 = đá bóng. Bóng rổ (篮球) là của anh trai."],
    [1, "Câu 2: 每个星期踢三次。— 三次 = 3 lần. 八岁 là tuổi bắt đầu."],
    [0, "Câu 7: 她非常喜欢看爱情片。— 爱情片 = phim tình cảm."],
  ],
  "h2-truoc-thi": [
    [0, "Câu 2: 走路十分钟就到。— 十分钟 = 10 phút. 十二点 (12 giờ) là giờ đi ngủ."],
    [1, "Câu 4: 头很疼。— 头 = đầu, 疼 = đau."],
    [1, "Câu 9: 帮我看错题。— 错题 = câu làm sai."],
  ],
  "h2-tet": [
    [0, "Câu 3: 新年的第一天，我们一家人去奶奶家。"],
    [1, "Câu 5: 给每个小孩儿一个红色的包，里面有新钱。"],
    [1, "Câu 9: 明年你教我说汉语吧！"],
  ],
  "h3-vali": [
    [1, "Câu 2: 飞机晚点了两个小时。— 十点 là giờ đến nơi (10 giờ tối)."],
    [1, "Câu 6: 护照在我的书包里。"],
    [1, "Câu 10: 一位先生拿错了，因为他的箱子跟我的很像。"],
  ],
  "h3-xe-dap": [
    [1, "Câu 1: 差不多二十分钟 — khoảng hai mươi phút."],
    [0, "Câu 4: 如果你这次考试考得好，我就给你买一辆新的。"],
    [2, "Câu 8: 我选了一辆黄色的。— 黄色 = màu vàng."],
  ],
  "h3-hoi-thao": [
    [1, "Câu 1: 每年秋天都有运动会。— 秋天 = mùa thu."],
    [1, "Câu 3: 会刮大风，也可能下雨。"],
    [1, "Câu 9: 我的成绩是第二名！— 第二名 = hạng nhì."],
  ],
  "h3-gau-truc": [
    [1, "Câu 1: 在成都学习汉语。"],
    [1, "Câu 6: 坐在草地上，一边吃竹子，一边看着游客。"],
    [1, "Câu 10: 野生大熊猫有时也吃别的东西。"],
  ],
  "h4-dien-thoai": [
    [0, "Câu 1: 我通过申请获得了奖学金。— 奖学金 = học bổng."],
    [1, "Câu 4: 小张建议我下载微信和支付宝。"],
    [1, "Câu 9–10: 要保护好个人信息……密码不能随便告诉别人。"],
  ],
  "h4-mon-cay": [
    [1, "Câu 2: 他说这是四川最有名的菜。"],
    [1, "Câu 9: 小张就帮我翻译。"],
    [1, "Câu 10: 情况不严重，只是辣的东西吃得太多了。"],
  ],
  "h4-truong-thanh": [
    [0, "Câu 2: 为了准备HSK考试，我每天都熬夜学习，压力特别大。"],
    [1, "Câu 4: 她带我去爬长城。"],
    [1, "Câu 7: 一边等我，一边给我讲幽默的故事。— 幽默 = hài hước."],
  ],
};
// </dap-an>

module.exports = function (app, d) {
  const CAP = ['hsk1v3', 'hsk2v3', 'hsk3v3', 'hsk4v3'];
  const TEN_CAP = { hsk1v3: 'HSK 1 (3.0)', hsk2v3: 'HSK 2 (3.0)', hsk3v3: 'HSK 3 (3.0)', hsk4v3: 'HSK 4 (3.0)' };
  const CU_TUONG_DUONG = { hsk3: 'hsk2v3', hsk4: 'hsk3v3', hsk5: 'hsk4v3', hsk6: 'hsk4v3' };
  const HET_CAP = 99; // moc "da hoc het cap"
  const SAO_DAT = 3, SAO_TRON = 5;
  const FILE = path.join(d.DATA_DIR, 'truyen_doc.json'); // { userId: { doc: { id: { dung, lan, sao, t0, t } }, moc: { cap: bai } } }
  const DATA_FILE = path.join(__dirname, 'public', 'js', 'truyen-data.js');

  // ---------- danh muc truyen (doc lai khi file doi) ----------
  let danhMuc = { mtime: 0, theoId: {}, ds: [] };
  function truyen() {
    let mt = 0;
    try { mt = fs.statSync(DATA_FILE).mtimeMs; } catch (e) { return danhMuc; }
    if (mt === danhMuc.mtime) return danhMuc;
    try {
      const sb = { window: {} };
      vm.runInNewContext(fs.readFileSync(DATA_FILE, 'utf8'), sb, { timeout: 3000 });
      const ds = ((sb.window.TRUYEN_DATA && sb.window.TRUYEN_DATA.truyen) || [])
        .filter((t) => t && t.id && CAP.indexOf(t.cap) >= 0)
        .map((t) => ({ id: String(t.id), cap: t.cap, bai: Number(t.bai) || 1, soHoi: (t.hoi || []).map((h) => (h.chon || []).length) }));
      const theoId = {};
      ds.forEach((t) => { theoId[t.id] = t; });
      danhMuc = { mtime: mt, theoId, ds };
    } catch (e) { console.error('truyen-doc: khong doc duoc truyen-data.js:', e.message); }
    return danhMuc;
  }

  // ---------- luu tru: MySQL hoac file JSON ----------
  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS truyen_doc (' +
        'user_id VARCHAR(36) NOT NULL, truyen_id VARCHAR(40) NOT NULL, ' +
        'dung TINYINT NOT NULL DEFAULT 0, lan INT NOT NULL DEFAULT 0, sao TINYINT NOT NULL DEFAULT 0, ' +
        'first_ms BIGINT NOT NULL, last_ms BIGINT NOT NULL, ' +
        'PRIMARY KEY (user_id, truyen_id), ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS truyen_moc (' +
        'user_id VARCHAR(36) NOT NULL, cap VARCHAR(16) NOT NULL, bai INT NOT NULL DEFAULT 0, ' +
        'PRIMARY KEY (user_id, cap), ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
  }

  async function docCua(uid) {
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      const x = all[uid] || {};
      return { doc: x.doc || {}, moc: x.moc || {} };
    }
    const [[rd], [rm]] = await Promise.all([
      d.db().query('SELECT truyen_id, dung, lan, sao, first_ms, last_ms FROM truyen_doc WHERE user_id = ?', [uid]),
      d.db().query('SELECT cap, bai FROM truyen_moc WHERE user_id = ?', [uid]),
    ]);
    const doc = {}, moc = {};
    rd.forEach((r) => { doc[r.truyen_id] = { dung: r.dung, lan: r.lan, sao: r.sao, t0: Number(r.first_ms), t: Number(r.last_ms) }; });
    rm.forEach((r) => { moc[r.cap] = r.bai; });
    return { doc, moc };
  }

  // Ghi moc moi (chi tang): moc = { cap: bai }
  async function ghiMoc(uid, cu, moi) {
    const tang = Object.keys(moi).filter((c) => (moi[c] || 0) > (cu[c] || 0));
    if (!tang.length) return;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      const x = all[uid] || (all[uid] = {});
      x.moc = x.moc || {};
      tang.forEach((c) => { x.moc[c] = Math.max(x.moc[c] || 0, moi[c]); });
      d.writeJsonFile(FILE, all);
      return;
    }
    for (const c of tang) {
      await d.db().query('INSERT INTO truyen_moc (user_id, cap, bai) VALUES (?,?,?) ON DUPLICATE KEY UPDATE bai = GREATEST(bai, VALUES(bai))', [uid, c, moi[c]]);
    }
  }

  // Ghi 1 lan doc dat (>= 2/3). Tra ve so sao duoc them (0 neu da nhan du).
  async function ghiDoc(uid, id, dung) {
    const now = Date.now();
    const saoMoi = dung >= 3 ? SAO_TRON : SAO_DAT;
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      const x = all[uid] || (all[uid] = {});
      x.doc = x.doc || {};
      const r = x.doc[id] || (x.doc[id] = { dung: 0, lan: 0, sao: 0, t0: now, t: now });
      const them = Math.max(0, saoMoi - (r.sao || 0));
      r.dung = Math.max(r.dung || 0, dung); r.lan = (r.lan || 0) + 1; r.sao = Math.max(r.sao || 0, saoMoi); r.t = now;
      d.writeJsonFile(FILE, all);
      return { them, lan: r.lan, dungNhat: r.dung };
    }
    const [rows] = await d.db().query('SELECT dung, lan, sao FROM truyen_doc WHERE user_id = ? AND truyen_id = ?', [uid, id]);
    const cu = rows[0] || { dung: 0, lan: 0, sao: 0 };
    await d.db().query(
      'INSERT INTO truyen_doc (user_id, truyen_id, dung, lan, sao, first_ms, last_ms) VALUES (?,?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE dung = GREATEST(dung, VALUES(dung)), lan = lan + 1, sao = GREATEST(sao, VALUES(sao)), last_ms = VALUES(last_ms)',
      [uid, id, dung, 1, saoMoi, now, now]
    );
    return { them: Math.max(0, saoMoi - (cu.sao || 0)), lan: (cu.lan || 0) + 1, dungNhat: Math.max(cu.dung || 0, dung) };
  }
  // Moi em 1 hang doi: 2 lan nop cung luc khong the nhan sao 2 lan
  const hangDoi = new Map();
  function lanLuot(uid, fn) {
    const truoc = hangDoi.get(uid) || Promise.resolve();
    const p = truoc.catch(() => {}).then(fn);
    hangDoi.set(uid, p);
    p.finally(() => { if (hangDoi.get(uid) === p) hangDoi.delete(uid); }).catch(() => {});
    return p;
  }

  // ---------- mo khoa ----------
  // Moc tu bai em da hoc / duoc giao (baiOnCua) + cap em ghim + giao trinh cu tuong duong
  async function mocHienTai(user) {
    const moc = {};
    function nang(cap, bai) { if (CAP.indexOf(cap) >= 0 && bai > (moc[cap] || 0)) moc[cap] = bai; }
    function cu(lv) { const c = CU_TUONG_DUONG[lv]; if (c) nang(c, HET_CAP); }
    let on = null;
    try { on = await d.baiOnCua(user); } catch (e) { on = null; }
    ((on && on.urls) || []).forEach((u) => {
      const m = /^\/lessons\/([a-z0-9]+)-bai-(\d+)\.html$/.exec(String(u));
      if (!m) return;
      if (CAP.indexOf(m[1]) >= 0) nang(m[1], Number(m[2]));
      else cu(m[1]);
    });
    const ghim = (on && on.ghim) || user.capHoc || '';
    [ghim, on && on.cap].forEach((lv) => {
      if (!lv) return;
      const i = CAP.indexOf(lv);
      if (i > 0) nang(CAP[i - 1], HET_CAP); // dang hoc cap nay -> cap duoi coi nhu da hoc het
      cu(lv);
    });
    return moc;
  }
  // { khoa, lyDo } cho 1 truyen
  function trangThai(tr, moc, daDoc) {
    if (tr.cap === 'hsk1v3' || daDoc) return { khoa: false };
    const i = CAP.indexOf(tr.cap);
    // da hoc cap tren -> cap duoi mo het
    for (let j = i + 1; j < CAP.length; j++) if ((moc[CAP[j]] || 0) > 0) return { khoa: false };
    if ((moc[tr.cap] || 0) >= tr.bai) return { khoa: false };
    return { khoa: true, lyDo: 'Học tới Bài ' + tr.bai + ' · ' + TEN_CAP[tr.cap] + ' để mở' };
  }

  function tuyChonDangNhap(req, res, next) {
    if (!req.headers.authorization) return next();
    return d.requireAuth(req, res, next);
  }

  // ---------- API ----------
  // Danh sach trang thai: { dangNhap, ds: [{ id, khoa, lyDo, daDoc, dung, lan }], daDocSo, tong, saoDat, saoTron }
  app.get('/api/truyen', tuyChonDangNhap, d.asyncRoute(async (req, res) => {
    const dm = truyen();
    const user = req.user || null;
    let luu = { doc: {}, moc: {} };
    if (user) {
      luu = await docCua(user.id);
      const moi = await mocHienTai(user);
      await ghiMoc(user.id, luu.moc, moi);
      Object.keys(moi).forEach((c) => { luu.moc[c] = Math.max(luu.moc[c] || 0, moi[c]); });
    }
    const ds = dm.ds.map((tr) => {
      const r = luu.doc[tr.id];
      const tt = trangThai(tr, luu.moc, !!r);
      const x = { id: tr.id, khoa: tt.khoa, daDoc: !!r, dung: r ? r.dung : 0, lan: r ? r.lan : 0 };
      if (tt.khoa) x.lyDo = user ? tt.lyDo : 'Đăng nhập rồi ' + tt.lyDo.charAt(0).toLowerCase() + tt.lyDo.slice(1);
      return x;
    });
    res.json({ dangNhap: !!user, ds, daDocSo: ds.filter((x) => x.daDoc).length, tong: ds.length, saoDat: SAO_DAT, saoTron: SAO_TRON });
  }));

  // Nop 3 cau hoi: body { tl: [chi so lua chon, ...] }
  const demNop = new Map(); // khoa -> [ms] — chan gui don dap
  app.post('/api/truyen/:id/nop', tuyChonDangNhap, d.asyncRoute(async (req, res) => {
    const dm = truyen();
    const tr = dm.theoId[String(req.params.id || '')];
    const key = tr && DAP_AN[tr.id];
    if (!tr || !key) return res.status(404).json({ error: 'Không tìm thấy truyện.' });
    const tl = Array.isArray(req.body && req.body.tl) ? req.body.tl : [];
    if (tl.length !== key.length || tl.some((x, i) => !Number.isInteger(x) || x < 0 || x >= (tr.soHoi[i] || 0))) {
      return res.status(400).json({ error: 'Em hãy trả lời đủ ' + key.length + ' câu hỏi.' });
    }
    const user = req.user || null;
    const khoaDem = user ? 'u' + user.id : 'ip' + (req.ip || '');
    const now = Date.now();
    const gan = (demNop.get(khoaDem) || []).filter((t) => now - t < 60000);
    if (gan.length >= 20) return res.status(429).json({ error: 'Em nộp nhanh quá, đợi một chút rồi thử lại nhé.' });
    gan.push(now); demNop.set(khoaDem, gan);
    if (demNop.size > 5000) demNop.clear();

    let luu = { doc: {}, moc: {} };
    if (user) luu = await docCua(user.id);
    if (trangThai(tr, luu.moc, !!luu.doc[tr.id]).khoa) {
      return res.status(403).json({ error: user ? 'Truyện này chưa mở: em học tới Bài ' + tr.bai + ' · ' + TEN_CAP[tr.cap] + ' đã nhé.' : 'Đăng nhập để đọc truyện cấp này.' });
    }
    const ket = key.map((k, i) => ({ dung: tl[i] === k[0], dapAn: k[0], giai: k[1] }));
    const soDung = ket.filter((x) => x.dung).length;
    const dat = soDung >= 2;
    let sao = 0, daDoc = !!luu.doc[tr.id], lan = 0;
    if (user && dat) {
      const g = await lanLuot(user.id, () => ghiDoc(user.id, tr.id, soDung));
      sao = g.them; lan = g.lan; daDoc = true;
    }
    res.json({ ket, soDung, tong: key.length, dat, daDoc, sao, lan, dangNhap: !!user });
  }));

  return { initTable };
};
module.exports.DAP_AN = DAP_AN;
