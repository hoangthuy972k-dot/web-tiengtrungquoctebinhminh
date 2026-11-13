// Bo loc tin nhan tu do o nong trai (hoc sinh nhan cho ban cung lop). THAY CO THEM TU o cac danh sach duoi day.
// Cach loc: chu thuong -> gop cac chu cai viet roi ("d m", "f.u.c.k") -> doi so/ky hieu thay chu (0→o, 1→i, 3→e, 4→a, 5→s, @→a, $→s)
// -> gop chu lap ("nguuuu" → "ngu") roi so voi 3 danh sach:
//   CO_DAU   : tu tieng Viet PHAI DUNG DAU moi tinh (vi bo dau thi trung tu binh thuong: "lồn"/"lớn", "đĩ"/"đi", "cặc"/"các")
//   KHONG_DAU: tu / cum tu da bo dau, so theo TUNG TU (vd "dm", "vl", "ngu", "fuck")
//   CUM_KHONG_DAU: cum tu da bo dau, chi xet khi tin khong go dau
//   DINH_LIEN: chuoi da bo dau va bo het dau cach, so theo CHUOI CON (chi de tu dai, khong trung tu thuong)
// Ngoai ra chan: so dien thoai (tu 8 chu so), duong link, email, tai khoan mang xa hoi (@ten, zalo, fb…).
// Khong bao gio tra lai tu bi chan cho hoc sinh — chi bao "Tin nhắn chưa phù hợp, em viết lại nhé".
const CO_DAU = ['lồn', 'cặc', 'buồi', 'đĩ', 'địt', 'đụ', 'đéo', 'đếch', 'cứt', 'đần', 'óc chó', 'mất dạy', 'khốn nạn', 'thằng chó', 'đồ chó', 'chó chết', 'đồ ngu', 'ngu si', 'ngu như', 'đồ điên', 'thằng điên', 'con điên', 'đồ khùng', 'béo như lợn', 'đồ lợn', 'xấu như', 'chết đi', 'cút đi', 'câm mồm', 'im mồm', 'vãi lồn', 'vãi cả'];
const KHONG_DAU = ['dm', 'dmm', 'dcm', 'dcmm', 'dkm', 'dkmm', 'vl', 'vcl', 'vkl', 'vcc', 'cc', 'clm', 'cmm', 'clgt', 'dmay', 'dcmay', 'ngu', 'lon', 'buoi', 'dit', 'deo', 'cut', 'occho', 'stfu', 'wtf',
  'fuck', 'fck', 'fuk', 'shit', 'bitch', 'btch', 'asshole', 'bastard', 'dick', 'pussy', 'slut', 'whore', 'idiot', 'stupid', 'moron', 'loser', 'retard', 'dumbass', 'kys'];
// cum tu KHONG DAU (so theo cac tu dung lien nhau) — chi xet khi ca tin khong go dau, vi bo dau de trung cau binh thuong ("con ngủ", "đồ điện")
const CUM_KHONG_DAU = ['du me', 'du ma', 'dit me', 'dit con', 'deo me', 'oc cho', 'mat day', 'khon nan', 'thang cho', 'do cho', 'cho chet', 'do ngu', 'ngu si', 'thang ngu', 'con ngu', 'do dien', 'thang dien', 'do khung', 'chet di', 'cut di', 'cam mom', 'im mom', 'vai lon', 'vai ca lon'];
const DINH_LIEN = ['ditme', 'dume', 'dumamay', 'dumemay', 'deome', 'vailon', 'vaicalon', 'motherfuck', 'fuckyou', 'fucku', 'sonofabitch', 'shutup', 'killyourself', 'iwillkillyou', 'gotohell'];
// tu khoa lien lac ngoai (bo dau, so theo tung tu) — khong de hoc sinh trao so dien thoai / tai khoan
const LIEN_LAC = ['zalo', 'facebook', 'fb', 'messenger', 'instagram', 'insta', 'tiktok', 'telegram', 'discord', 'snapchat', 'sdt', 'whatsapp', 'viber', 'gmail'];

// ky tu dieu khien + ky tu vo hinh (zero-width, dau xuong dong dac biet) — viet bang ma de file khong chua ky tu la
const KY_TU_AN = new RegExp('[\\u0000-\\u001f\\u007f-\\u009f\\u200b-\\u200f\\u2028-\\u202f\\ufeff]', 'g');
const LEET = { 0: 'o', 1: 'i', 3: 'e', 4: 'a', 5: 's', 7: 't', '@': 'a', $: 's', '!': 'i' };
const boDau = (s) => s.normalize('NFD').replace(new RegExp('[\\u0300-\\u036f]', 'g'), '').replace(/đ/g, 'd');
const gopLap = (s) => s.replace(/(.)\1{2,}/g, '$1');
// gop cac "tu" 1 ky tu dung lien nhau: "d m" -> "dm", "đ ị t" -> "địt"
function gopChuRoi(tu) {
  const ra = [];
  let dong = '';
  tu.forEach((t) => {
    if ([...t].length === 1) { dong += t; return; }
    if (dong) { ra.push(dong); dong = ''; }
    ra.push(t);
  });
  if (dong) ra.push(dong);
  return ra;
}
// Lam sach: bo ky tu dieu khien, gop khoang trang, cat 120 ky tu (KHONG bo the HTML — luc hien luon esc())
function lamSach(s) {
  const t = String(s == null ? '' : s).replace(KY_TU_AN, ' ').replace(/\s+/g, ' ').trim();
  return [...t].slice(0, 120).join('');
}
// -> { ok: true } | { ok: false, ly: 'tucam' | 'sdt' | 'link' | 'lienlac' }
function kiem(vanBan) {
  const goc = String(vanBan || '').toLowerCase().normalize('NFC');
  // so dien thoai: tu 8 chu so (cho phep cham, gach, cach o giua)
  if (/(?:\d[\s.\-()]{0,2}){8,}/.test(goc)) return { ok: false, ly: 'sdt' };
  if (/https?:|www\.|:\/\/|\b[a-z0-9-]+\.(?:com|vn|net|org|io|me|gg|ly|tv|cc|app|xyz|info|top)\b/.test(goc)) return { ok: false, ly: 'link' };
  if (/[^\s@]+@[^\s@]+\.[a-z]{2,}/.test(goc) || /(^|\s)@[a-z0-9_.]{2,}/.test(goc)) return { ok: false, ly: 'lienlac' };
  const tachTu = (s) => gopChuRoi(s.split(/[^\p{L}\p{N}@$!]+/u).filter(Boolean));
  // 1) tu co dau (giu dau, chi gop chu roi + chu lap)
  const coDau = ' ' + tachTu(gopLap(goc)).join(' ') + ' ';
  if (CO_DAU.some((w) => coDau.indexOf(' ' + w + ' ') >= 0 || (w.indexOf(' ') > 0 && coDau.indexOf(w) >= 0))) return { ok: false, ly: 'tucam' };
  // 2) bo dau + doi leet, so tung tu
  const leet = (s) => s.replace(/[013457@$!]/g, (c) => LEET[c] || c);
  const tuKd = tachTu(gopLap(boDau(goc))).map((t) => gopLap(leet(t)));
  const tuGoc = tachTu(gopLap(boDau(goc)));
  const bo = new Set(tuKd.concat(tuGoc));
  // "ngu", "lon", "cut", "dit", "deo", "buoi": chi tinh khi tin KHONG go dau (go co dau thi da xet o buoc 1: "ngủ", "lớn", "cút"…)
  const coGoDau = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/.test(goc);
  const mapMo = { ngu: 1, lon: 1, cut: 1, dit: 1, deo: 1, buoi: 1 };
  if (KHONG_DAU.some((w) => bo.has(w) && !(coGoDau && mapMo[w]))) return { ok: false, ly: 'tucam' };
  if (LIEN_LAC.some((w) => bo.has(w))) return { ok: false, ly: 'lienlac' };
  if (!coGoDau) { const dong = ' ' + tuKd.join(' ') + ' '; if (CUM_KHONG_DAU.some((w) => dong.indexOf(' ' + w + ' ') >= 0)) return { ok: false, ly: 'tucam' }; }
  // 3) chuoi dinh lien (bo het dau cach, ky hieu)
  const lien = gopLap(leet(boDau(goc)).replace(/[^a-z]/g, ''));
  // tin co go dau: chi xet trong tung tu ("Dù mẹ nói…" khong bi nham); tin khong dau: xet ca chuoi dinh lien
  if (DINH_LIEN.some((w) => (coGoDau ? tuKd.some((t) => t.indexOf(w) >= 0) : lien.indexOf(w) >= 0))) return { ok: false, ly: 'tucam' };
  return { ok: true };
}

module.exports = { CO_DAU, KHONG_DAU, CUM_KHONG_DAU, DINH_LIEN, LIEN_LAC, kiem, lamSach };
