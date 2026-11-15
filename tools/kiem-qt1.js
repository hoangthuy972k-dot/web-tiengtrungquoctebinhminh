/* QT1 — "chi dung tu da hoc" cho phan Luyen tap cac cap 3.0 Moi (hsk1v3, hsk2v3), bai 1–15.
   Moi chuoi chu Han trong cac bai tap (mcData, fillData, sortData, matchData, listenData,
   translateData, translateDataRev, speakingData) cua bai N chi duoc dung:
     - tu vung cua cac cap DUOI (hsk2v3: toan bo hsk1v3) + ten rieng va so dem cua cap duoi,
     - tu trong vocabData cua bai 1..N cua cap dang kiem,
     - so dem (hsk1v3: tu bai 4; hsk2v3: luon) va chu so, dau cau,
     - ten rieng da xuat hien trong bai khoa (bang TEN ben duoi, kem bai gioi thieu).
   Tach tu tham lam (khop tu dai nhat); ky tu nao khong nam trong tu da hoc -> bao loi.
   Them: tu nhieu chu cua bai SAU cung cap xuat hien nguyen ven trong cau -> bao loi,
   tru khi nam trong mot tu da hoc dai hon.
   Chay: node tools/kiem-qt1.js hsk2v3            (moi bai)
         node tools/kiem-qt1.js hsk2v3 5          (mot bai)
         node tools/kiem-qt1.js hsk2v3 1-5 --phu  (them bao cao do phu tu vung)
   (tools/kiem-qt1-hsk1v3.js van giu nguyen cho hsk1v3.) */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const JS = path.join(__dirname, '..', 'public', 'js');
const HAN = /[㐀-鿿]+/g;
const SO = '零一二三四五六七八九十百千万两';
// Cau hinh tung cap: ten rieng trong bai khoa [ten, bai gioi thieu], bai bat dau duoc dung so dem, cap duoi
const CAP = {
  hsk1v3: {
    duoi: [], soTu: 4,
    ten: [
      ['小语', 1], ['王一飞', 1], ['一飞', 1],
      ['白家月', 2], ['家月', 2], ['安妮', 2], ['陈天中', 2], ['李文', 2],
      ['王一雪', 3], ['一雪', 3],
      ['刘明', 4], ['杨同乐', 4], ['同乐', 4],
      ['小胡', 8], ['胡医生', 8], ['小明', 10], ['小雪', 10],
    ],
  },
  hsk2v3: {
    duoi: ['hsk1v3'], soTu: 1,
    ten: [
      ['天中', 1], ['北京烤鸭', 1], ['北京大学', 2], ['刘爷爷', 5], ['杨', 14], ['颐和园', 15],
    ],
    // Dang tu xuat hien trong bai khoa HSK2 la bien the / tach ra cua tu da hoc: [dang, bai]
    them: [
      ['点儿', 1], ['帮个忙', 1], ['打个电话', 1], ['烤鸭', 1], ['客气', 5], ['姐', 5], ['爸', 5], ['妈', 5],
      ['高高兴兴', 6], ['舒舒服服', 6], ['睡一觉', 6], ['没错', 7], ['出来', 9], ['跳舞跳得', 14],
    ],
  },
  hsk3v3: {
    duoi: ['hsk1v3', 'hsk2v3'], soTu: 1, soBai: 18,
    ten: [
      ['王姐', 2], ['小李', 4], ['姓李', 4], ['北京南站', 6], ['刘长春', 9], ['老张', 11], ['英国', 13],
      ['李老师', 10], ['李叔叔', 18], ['小文', 18],
    ],
    // Dang tu trong bai khoa HSK3 la bien the / tach ra / ghep cua tu da hoc: [dang, bai]
    them: [
      ['看起来', 1], ['行李箱', 1], ['什么样', 1], ['黑', 1], ['走出', 1], ['绿茶', 2], ['喜不喜欢', 2],
      ['放', 3], ['纸箱', 3], ['起来', 5], ['步', 8], ['泳', 8], ['发低烧', 8], ['话', 8], ['老', 9], ['奥运会', 9],
      ['出', 11], ['起', 12], ['今晚', 13], ['画板', 13], ['红茶', 13], ['红', 13], ['老城', 15], ['老街', 15], ['绿', 15],
      ['身上', 16], ['熊猫', 16], ['大猫熊', 16], ['觉', 16], ['熊猫馆', 16], ['中', 10], ['西边', 17],
      ['春节', 18], ['假', 18], ['会儿', 18], ['父母', 18],
    ],
  },
  // YCT (thieu nhi): cap rieng, khong co cap duoi; so 一..十 la tu vung bai 1 (khong mo 零百千万两)
  yct: {
    duoi: [], soTu: 99, soBai: 11,
    ten: [['乐乐', 2], ['甜甜', 2], ['明明', 2]],
    them: [['不谢', 8], ['早', 10]],
  },
  // HSK1 cu (HSK标准教程1): cap rieng, khong co cap duoi; so dem tu bai 5 (100以内的数字)
  hsk1: {
    duoi: [], soTu: 5,
    ten: [['李月', 3], ['李', 3], ['王方', 10], ['谢朋', 10], ['北京', 11], ['王', 12], ['大卫', 13], ['张', 14]],
    them: [['不谢', 2], ['哪国', 4]],
  },
};

// So bai cua cap (mac dinh 15; cap nao khac thi khai bao soBai trong CAP)
const SB = (c) => (CAP[c] && CAP[c].soBai) || 15;
// HSK 4 (3.0) — 新HSK教程4上+4下, 20 bai; cap duoi = toan bo hsk1v3 + hsk2v3 + hsk3v3
CAP.hsk4v3 = {
  duoi: ['hsk1v3', 'hsk2v3', 'hsk3v3'], soTu: 1, soBai: 20,
  // ten rieng trong bai khoa: [ten, bai gioi thieu]
  ten: [
    ['杨哥', 7], ['乐哥', 8], ['林静静', 12], ['林静', 12], ['周力', 13], ['刘小明', 13], ['徐前', 14], ['赵女士', 18], ['刘小雪', 19],
  ],
  // dang tu trong bai khoa HSK4 la ghep cua tu da hoc: [dang, bai]
  them: [
    ['租房', 2],
    // dang cua chinh diem ngu phap trong sach (来得及/来不及 · 首先……，其次……)
    ['来不及', 4], ['其次', 14],
  ],
};
// HSK2 cu (HSK标准教程2): file public/js/bai-N-data.js (khong co tien to); cap duoi = HSK1 cu.
// Khong co mcData -> errorFixData (cau sai + 4 cau sua) kiem nhu mc; Luyen noi = speakingData.tasks (ai-speak).
CAP.hsk2 = {
  duoi: ['hsk1'], soTu: 1, tep: 'bai-',
  ten: [['花花', 1], ['谢', 4], ['小张', 6], ['张欢', 9], ['杨笑笑', 13], ['杨', 13]],
  // dang tu xuat hien trong bai khoa HSK2 cu (tu HSK1–2 sach khong liet vao bang tu moi): [dang, bai]
  them: [
    ['呀', 1], ['天', 2], ['出去', 2], ['下', 2], ['这么', 2], ['真', 3], ['粉色', 3], ['对', 4], ['电话', 4], ['打', 4],
    ['饭馆', 5], ['有点儿', 5], ['点儿', 5], ['打球', 5], ['杯', 5], ['没', 6], ['再', 8], ['病', 8], ['红', 8],
    ['次', 9], ['跟', 9], ['学', 9], ['午饭', 10], ['色', 10], ['左边', 11], ['卖', 11], ['斤', 11],
    ['见', 11], ['早', 12], ['早起', 12], ['睡', 12], ['饭', 12], ['房子', 12], ['女孩', 13], ['右', 13],
    ['一定', 14], ['机会', 14], ['周末', 14], ['公园', 14], ['自己', 14], ['大概', 14], ['难', 14],
    ['计划', 15], ['预报', 15], ['差不多', 15], ['热闹', 15],
  ],
};
// HSK3 cu (HSK标准教程3): 20 bai, file hsk3-bai-N-data.js; cap duoi = HSK1 cu + HSK2 cu (HSK 3.0 khong tinh).
// Nhu HSK2 cu: errorFixData kiem nhu mc, speakingData.tasks; listenData = de nghe that sach bai tap (khong kiem).
CAP.hsk3 = {
  duoi: ['hsk1', 'hsk2'], soTu: 1, soBai: 20,
  ten: [],
  // tu la CHINH diem ngu phap cua bai (sach day, co trong bai khoa) nhung khong nam trong bang tu: [dang, bai]
  // 刚 (bai 6: 刚 va 刚才) · 左右 (bai 11: so uoc luong) · 才 (bai 12: 才 va 就) · 出来 (bai 13 bo ngu xu huong kep; bai 19 nghia mo rong) · 使 (bai 19: 使/叫/让)
  them: [['刚', 6], ['左右', 11], ['才', 12], ['出来', 13], ['使', 19]],
};
// HSK4 cu (HSK标准教程4上+4下): 20 bai, file hsk4-bai-N-data.js; cap duoi = HSK1 + HSK2 + HSK3 cu (HSK 3.0 khong tinh).
// errorFixData (errorFixMode 'wordchoice') = nguyen bai 练习2 SGK -> kiem nhu mc; listenData = de nghe that SBT (khong kiem).
CAP.hsk4 = {
  duoi: ['hsk1', 'hsk2', 'hsk3'], soTu: 1, soBai: 20, sgkMc: true,
  ten: [],
  // dang tu trong bai khoa HSK4 cu la bien the / tach ra / ghep cua tu da hoc (khong co trong bang tu cac cap): [dang, bai]
  them: [
    ['他们', 1], ['人们', 1], ['那样', 1], ['兴趣', 1], ['时', 1], ['但', 1], ['中', 1], ['事', 1], ['话', 1], ['出来', 1],
    ['变', 1], ['唱', 1], ['球', 1], ['普通', 1], ['想起', 1], ['祝', 1], ['新鲜感', 1],
    ['那么', 2], ['常常', 2], ['怎样', 2], ['不同', 2], ['国外', 2], ['身边', 2], ['日子', 2], ['逛街', 2],
    ['这样', 4], ['商场', 5], ['网上', 5], ['什么样', 6], ['外国', 8], ['她们', 8], ['父母', 9], ['它们', 11], ['有限', 11],
    // dang cua chinh diem ngu phap trong sach (另/另外 · 值/值得 · 散散步 AAB · 可不是 · 可/恐怕/怕 · 除此以外 · 叫作 · 在于 · 总的来说 · V+起)
    ['另', 3], ['值', 6], ['散散步', 7], ['可不是', 8], ['可', 16], ['怕', 16], ['除此以外', 18], ['叫作', 18],
    ['在于', 19], ['总的来说', 19], ['说起', 20],
  ],
};
// HSK5 (HSK标准教程5上+5下): 36 bai, file hsk5-bai-N-data.js; cap duoi = HSK1 + HSK2 + HSK3 + HSK4 cu (toan bo).
// Khong co listenData/mcData: errorFixData (errorFixMode 'wordchoice', "Chon tu") kiem nhu mc.
// QT1 o HSK5 chi ap cho CAC MUC BAI TAP tu soan, khong ap cho bai khoa, de nghe SBT (listenExamData), sgkData:
//   kiem them (rieng HSK5, co hsk5x): situationData (loi nguoi kia + cau mau), registerData (2 cau),
//   writingData.sapXep (cau dap) + writingData.model.
// Bai khoa HSK5 tu nhien co tu ngoai bang tu -> moi tu 2–4 chu xuat hien NGUYEN VEN trong bai khoa (dialogData)
//   cua bai 1..N, va cac tu trong bang 词语辨析 (synonymData) cua bai 1..N, cung tinh la da hoc (baiKhoa).
CAP.hsk5 = {
  duoi: ['hsk1', 'hsk2', 'hsk3', 'hsk4'], soTu: 1, soBai: 36, baiKhoa: true, hsk5x: true,
  // ho trong cac cau tu soan (小刘, 老陈…)
  ten: [['刘', 1], ['陈', 1], ['林', 1], ['周', 1], ['赵', 1]],
  // dang tu do / hinh vi cua tu HSK1–4 cu (bang tu sach khong tach rieng): 们(我们) 子(桌子) 出(出来) 考(考试) 起(一起)
  // 雨(下雨) 晚(晚上) 忘(忘记) 生(生病) 头(头发) 声(声音) 常(经常) 该(应该) 心(小心) 边(旁边) 名(名字) 动(运动)
  // 全(全部) 房(房间) 店(商店) 笔(铅笔) 词(生词) 怕(害怕) 跑(跑步) 玩(玩儿) 风(刮风) 山(爬山) 河 桌 酒 餐(餐厅) 片(照片)
  // 选(选择) 改(改变) 记(记得) 练(练习) 南北东西(南方…) 样(怎么样) 句(句子) 事(事情) 话(说话) 时(时候) 但(但是)
  // 不同 课文 老公(老婆, bai 1); 'so + 个人' (两个人…: tach tham lam se thanh 两|个人 = tu 个人 cua bai sau)
  them: '们 子 出 考 起 雨 晚 忘 生 头 声 常 该 心 边 名 动 全 房 店 笔 词 怕 跑 玩 风 山 河 桌 酒 餐 片 选 改 记 练 南 北 东 西 样 句 事 话 时 但 不同 课文 老公 一个人 两个人 三个人 四个人 五个人 十个人 几个人 每个人 这个人 那个人'.split(' ').map((t) => [t, 1]),
};
// HSK6 (HSK标准教程6上+6下): 40 bai, file hsk6-bai-N-data.js; cap duoi = HSK1–HSK4 cu + HSK5 (toan bo).
// Dang giong HSK5 (errorFixData 'wordchoice' kiem nhu mc; Tinh huong / Noi sao cho hay / doan mau Luyen viet: hsk5x).
// Quy tac tu bai khoa (baiKhoa) nhu HSK5: tu 2–4 chu co nguyen ven trong bai khoa bai 1..N + bang 词语辨析 bai 1..N = da hoc.
// Rieng HSK6 (ngheDe): listenExamData la cau nghe TU SOAN (sach HSK6 khong co SBT nghe) -> kiem ca loi thoai, cau hoi, phuong an, giai thich.
// Khong kiem: sgkData (bai tap sach), retellData, writingData.de/dan (de bai sach), speakingData giu nguyen bang 练习5 cua sach (van kiem cau mau).
CAP.hsk6 = {
  duoi: ['hsk1', 'hsk2', 'hsk3', 'hsk4', 'hsk5'], soTu: 1, soBai: 40, baiKhoa: true, hsk5x: true, ngheDe: true,
  ten: [],
  // dang tu do / hinh vi cua tu HSK1–5 (bang tu sach chi ghi tu ghep), them vao danh sach cua hsk5: 日(生日) 力(努力) 海(海洋) 队(排队)
  // 部(全部) 总(总是) 信(相信) 期(学期) 修(修理) 伤(受伤) 员(服务员) 将(将来) 偷(小偷) 馆(图书馆) 国(中国) 眼(眼睛) 此(因此)
  // 成(成为) 聊(聊天) 妈 爸 哥 姐(妈妈…) 道(知道) 村(农村) 正(正在) 歌(唱歌) 加(参加) 办(办法) 费(浪费) 机(手机) 报(报纸) 区(地区)
  // 受(接受) 摔(摔倒) 已(已经) 奖(奖金) 古(古代) 跳(跳舞) 第(第一) 电(电脑) 网(上网) 订(预订) 泪(眼泪) 校(学校) 望(希望) 处(好处)
  // 间(房间) 身(身体) 管(不管) 查(检查) 鞋(皮鞋) 院(医院) 躲(躲藏) 足(足球) 语(汉语) 琴(钢琴) 演(表演) 散(散步) 排(排队) 市(城市)
  // 左右(左边) 句(句子) 遇(遇到) 线(路线) 步(跑步) 可(可是) 面(见面) 气(生气) 法(办法) 明(明天) 美(美丽) 表(手表) 游(游泳) 飞(飞机) 鸡(鸡蛋) 肉(羊肉)
  them: '日 力 海 队 部 总 信 期 修 伤 员 将 偷 馆 国 眼 此 成 聊 妈 爸 哥 姐 道 村 正 歌 加 办 费 机 报 区 受 摔 已 奖 古 跳 第 电 网 订 泪 校 望 处 间 身 管 查 鞋 院 躲 足 语 琴 演 散 排 市 左 右 句 遇 线 步 可 面 气 法 明 美 表 游 飞 鸡 肉'.split(' ').map((t) => [t, 1]),
};
const cap = process.argv[2];
if (!CAP[cap]) { console.log('Dung: node tools/kiem-qt1.js <' + Object.keys(CAP).join('|') + '> [bai|a-b] [--phu]'); process.exit(2); }

function napBai(c0, n) {
  const c = { listenData: [] }; // cap khong co listenData (hsk5) -> rong
  vm.createContext(c);
  const code = fs.readFileSync(path.join(JS, (CAP[c0].tep || c0 + '-bai-') + n + '-data.js'), 'utf8');
  vm.runInContext(code + ';this.__D={vocab:vocabData,mc:(typeof mcData!=="undefined"?mcData:(typeof errorFixData!=="undefined"?errorFixData.map(function(e){return {q:e.wrong,opts:e.opts,ans:e.ans,exp:e.exp};}):[])),fill:fillData,sort:sortData,match:matchData,' +
    'listen:listenData,tr:translateData,trRev:translateDataRev,speak:speakingData,dialog:dialogData,' +
    'x:{syn:typeof synonymData!=="undefined"?synonymData:null,sit:typeof situationData!=="undefined"?situationData:null,reg:typeof registerData!=="undefined"?registerData:null,wr:typeof writingData!=="undefined"?writingData:null,lex:typeof listenExamData!=="undefined"?listenExamData:null}};', c);
  return c.__D;
}
const BAI = {};
for (let n = 1; n <= SB(cap); n++) BAI[n] = napBai(cap, n);

// tu cua 1 muc vocab: "做饭" -> ["做饭"]; tach theo ky tu khong phai chu Han
function tuCuaMuc(v) { return (String(v.zh || '').match(HAN) || []); }

// Nen: tu + ten + so cua cac cap duoi (toan bo)
const NEN = new Set();
CAP[cap].duoi.forEach((d) => {
  for (let n = 1; n <= SB(d); n++) napBai(d, n).vocab.forEach((v) => tuCuaMuc(v).forEach((w) => NEN.add(w)));
  CAP[d].ten.concat(CAP[d].them || []).forEach(([t]) => NEN.add(t));
  SO.split('').forEach((ch) => NEN.add(ch));
});

function tapChoPhep(n) {
  const s = new Set(NEN);
  for (let i = 1; i <= n; i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => s.add(w)));
  CAP[cap].ten.concat(CAP[cap].them || []).forEach(([t, b]) => { if (b <= n) s.add(t); });
  if (n >= CAP[cap].soTu) SO.split('').forEach((c) => s.add(c));
  // HSK5: tu 2–4 chu co nguyen ven trong bai khoa bai 1..N + tu trong bang 词语辨析 bai 1..N
  if (CAP[cap].baiKhoa) for (let i = 1; i <= n; i++) {
    (BAI[i].dialog || []).forEach((d) => (d.lines || []).forEach((l) => (String(l.zh || '').match(HAN) || []).forEach((r) => {
      for (let L = 2; L <= 4; L++) for (let k = 0; k + L <= r.length; k++) s.add(r.substr(k, L));
    })));
    ((BAI[i].x && BAI[i].x.syn) || []).forEach((p) => [p.pair].concat((p.items || []).map((it) => it.word)).forEach((w) => (String(w || '').match(HAN) || []).forEach((t) => s.add(t))));
  }
  return s;
}
function tuBaiSau(n) {
  const s = new Set();
  for (let i = n + 1; i <= SB(cap); i++) BAI[i].vocab.forEach((v) => tuCuaMuc(v).forEach((w) => { if (w.length >= 2) s.add(w); }));
  return s;
}

// Tach tu: quy hoach dong — it chu chua hoc nhat, roi it tu nhat (tranh 有时间 -> 有时|间).
// Tra ve { tu: [...], loi: [ky tu khong khop] }
function tach(chuoi, cho) {
  const maxL = 6, n = chuoi.length;
  const best = [[0, 0, -1, 0]]; // [so chu loi, so tu, vi tri truoc, la tu?]
  for (let i = 1; i <= n; i++) {
    let b = null;
    for (let L = 1; L <= Math.min(maxL, i); L++) {
      const w = chuoi.substr(i - L, L), p = best[i - L];
      const ok = cho.has(w);
      if (!ok && L > 1) continue;
      const c = [p[0] + (ok ? 0 : 1), p[1] + 1, i - L, ok ? 1 : 0];
      if (!b || c[0] < b[0] || (c[0] === b[0] && c[1] < b[1])) b = c;
    }
    best.push(b);
  }
  const tu = [], loi = [];
  for (let i = n; i > 0; i = best[i][2]) {
    const w = chuoi.slice(best[i][2], i);
    if (best[i][3]) tu.unshift(w); else loi.unshift(w);
  }
  return { tu, loi };
}

// Moi chuoi can kiem cua 1 bai: [vi tri, chuoi]
function chuoiCuaBai(D) {
  const out = [];
  const add = (where, s) => { if (s != null && s !== '') out.push([where, String(s)]); };
  // sgkMc (HSK4 cu): mc = nguyen van bai chon tu SGK -> chi kiem phuong an, khong kiem cau sach + loi giai trich cau sach
  D.mc.forEach((q, i) => { if (!CAP[cap].sgkMc) add('mc' + (i + 1) + '.q', q.q); q.opts.forEach((o, j) => add('mc' + (i + 1) + '.opt' + j, o)); if (!CAP[cap].sgkMc) add('mc' + (i + 1) + '.exp', q.exp); });
  D.fill.forEach((q, i) => { ['pre', 'blank', 'post', 'hint', 'ans', 'exp'].forEach((k) => add('fill' + (i + 1) + '.' + k, q[k])); });
  D.sort.forEach((q, i) => { add('sort' + (i + 1) + '.ans', q.ans); add('sort' + (i + 1) + '.words', (q.words || []).join('')); (q.alt || []).forEach((a) => add('sort' + (i + 1) + '.alt', a)); });
  D.match.forEach((q, i) => { add('match' + (i + 1), String(q.left) + String(q.right)); });
  (Array.isArray(D.listen) ? D.listen : []).forEach((g, i) => {
    add('listen' + (i + 1) + '.audio', g.audio);
    (g.questions || []).forEach((q, j) => { add('listen' + (i + 1) + '.' + (j + 1) + '.q', q.q); q.opts.forEach((o) => add('listen' + (i + 1) + '.' + (j + 1) + '.opt', o)); add('listen' + (i + 1) + '.' + (j + 1) + '.exp', q.exp); });
  });
  D.tr.forEach((t, i) => add('tr' + (i + 1), t.zh));
  D.trRev.forEach((t, i) => add('trRev' + (i + 1), t.zh));
  ((D.speak && D.speak.questions) || []).forEach((q, i) => {
    ['q_zh', 'hint', 'sample', 'note'].forEach((k) => add('speak' + (i + 1) + '.' + k, q[k]));
  });
  // Luyen noi 3 tang (YCT): t1.models / t2.drills / t3.tasks
  const sp = D.speak || {};
  ((sp.t1 && sp.t1.models) || []).forEach((m, i) => add('noi1.' + (i + 1), m.zh));
  ((sp.t2 && sp.t2.drills) || []).forEach((d, i) => [d.frame].concat(d.options || [], d.samples || []).forEach((s) => add('noi2.' + (i + 1), s)));
  ((sp.t3 && sp.t3.tasks) || []).forEach((t, i) => (t.structure || []).concat([t.sample, t.note, t.guide]).forEach((s) => add('noi3.' + (i + 1), s)));
  // Luyen noi AI (HSK2 cu): speakingData.tasks
  (sp.mode === 'ai-speak' && sp.tasks || []).forEach((t, i) => [t.q_zh, t.sample, t.tip].forEach((s) => add('noi' + (i + 1), s)));
  // HSK5: Tinh huong / Noi sao cho hay / Luyen viet (cau sap xep + doan mau)
  const x = (CAP[cap].hsk5x && D.x) || {};
  ((x.sit && x.sit.items) || []).forEach((t, i) => { add('tinhhuong' + (i + 1) + '.a', t.a && t.a.zh); add('tinhhuong' + (i + 1) + '.mau', t.sample); });
  ((x.reg && x.reg.items) || []).forEach((t, i) => { add('hay' + (i + 1) + '.a', t.a); add('hay' + (i + 1) + '.b', t.b); });
  ((x.wr && x.wr.sapXep) || []).forEach((t, i) => { add('viet' + (i + 1) + '.dap', t.dap); add('viet' + (i + 1) + '.manh', (t.manh || []).join('')); });
  if (x.wr && x.wr.model) add('viet.mau', x.wr.model.zh);
  // HSK6: nghe theo dang de (tu soan) — loi thoai + cau hoi + phuong an + giai thich
  if (CAP[cap].ngheDe) ((x.lex && x.lex.items) || []).forEach((it, i) => {
    (it.lines || []).forEach((l) => add('nghe' + (i + 1) + '.loi', l.zh));
    add('nghe' + (i + 1) + '.q', it.q); (it.opts || []).forEach((o) => add('nghe' + (i + 1) + '.opt', o)); add('nghe' + (i + 1) + '.giai', it.why);
  });
  return out;
}

function kiemBai(n) {
  const cho = tapChoPhep(n), sau = tuBaiSau(n);
  const loi = [];
  chuoiCuaBai(BAI[n]).forEach(([where, s]) => {
    (s.match(HAN) || []).forEach((run) => {
      const r = tach(run, cho);
      if (r.loi.length) loi.push(where + ': 「' + run + '」 chua hoc: ' + [...new Set(r.loi)].join(' '));
      // Tu bai sau: tach lai voi (da hoc + tu do); chi bao khi tu do thanh mot tu rieng trong cach tach
      // (走路上班 = 走路|上班 -> khong phai 路上; 坐地铁 = 坐|地铁 -> bao).
      sau.forEach((w) => {
        if (cho.has(w) || run.indexOf(w) < 0) return;
        const them = new Set(cho); them.add(w);
        if (tach(run, them).tu.indexOf(w) >= 0) loi.push(where + ': 「' + run + '」 co tu cua bai sau: ' + w);
      });
    });
  });
  return loi;
}

// Do phu: moi tu noi dung cua bai (khong phai ten rieng) xuat hien trong >= 2 muc mc/fill/sort/match
function doPhu(n) {
  const D = BAI[n];
  const muc = [];
  D.mc.forEach((q) => muc.push(q.q + ' ' + q.opts.join(' ')));
  D.fill.forEach((q) => muc.push(q.pre + q.ans + q.post));
  D.sort.forEach((q) => muc.push(q.ans));
  D.match.forEach((q) => muc.push(q.left + q.right));
  const thieu = [];
  D.vocab.forEach((v) => {
    if (/riêng/i.test(v.pos || '')) return;
    tuCuaMuc(v).forEach((w) => {
      const c = muc.filter((m) => m.indexOf(w) >= 0).length;
      if (c < 2) thieu.push(w + '(' + c + ')');
    });
  });
  return thieu;
}

const arg = process.argv[3] && !/^--/.test(process.argv[3]) ? process.argv[3] : '1-' + SB(cap);
const [a, b] = arg.split('-').map(Number);
const phu = process.argv.includes('--phu');
let tong = 0;
for (let n = a; n <= (b || a); n++) {
  const loi = kiemBai(n);
  tong += loi.length;
  const D = BAI[n];
  const nghe = Array.isArray(D.listen) ? D.listen.reduce((s, g) => s + (g.questions || []).length, 0) : 0;
  console.log(cap + ' bai ' + n + ': mc ' + D.mc.length + ' · fill ' + D.fill.length + ' · sort ' + D.sort.length + ' · match ' + D.match.length +
    ' · nghe ' + nghe + ' · dich ' + D.tr.length + '/' + D.trRev.length + ' -> ' + (loi.length ? loi.length + ' loi' : 'OK'));
  loi.forEach((l) => console.log('   ✗ ' + l));
  if (phu) { const t = doPhu(n); if (t.length) console.log('   do phu < 2: ' + t.join(' ')); }
}
console.log(tong ? 'TONG: ' + tong + ' loi' : 'TONG: 0 loi ✓');
process.exitCode = tong ? 1 : 0;
module.exports = { tach, tapChoPhep, BAI };
