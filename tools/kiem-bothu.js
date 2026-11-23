#!/usr/bin/env node
/* Kiem tra bang phan tich chu cua tro "Ghep bo thu 部首拼字" (public/js/tro-nha-bothu-data.js)
   - moi muc phan tich duoc (IDS hop le, dung so nhanh cho tung ma bo cuc)
   - chi 2–3 manh, moi manh la 1 chu BMP thuong U+4E00–U+9FA5 (co trong Noto Serif SC;
     khong Ext-A/B, khong khoi CJK Radicals Supplement, khong vung dung rieng)
   - khong trung chu, manh khong trung chinh chu do
   - (them) dem bao nhieu chu cua bang co trong tu vung bai HSK1–HSK4 (public/js/*-data.js)
   Chay: node tools/kiem-bothu.js   (loi -> exit 1) */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const GOC = path.join(__dirname, '..');
const FILE = path.join(GOC, 'public/js/tro-nha-bothu-data.js');
const src = fs.readFileSync(FILE, 'utf8');
const ctx = { window: {} };
vm.runInNewContext(src, ctx);
const D = ctx.window.BoThuData;
if (!D) { console.error('Khong doc duoc window.BoThuData'); process.exit(1); }

const loi = [];
const HOP_LE = c => { const u = c.codePointAt(0); return c.length === 1 && u >= 0x4e00 && u <= 0x9fa5; };
// Chu BMP nhung KHONG co trong bo font web Noto Serif SC (Google Fonts) — do trong trinh duyet bang
// document.fonts.load('700 40px "Noto Serif SC"', g) tra ve [] (2026-11-23). Gap them thi bo sung vao day.
const KHONG_CO_FONT = '昷喿耂';
const daCo = new Map();
let tong = 0, soManh = { 2: 0, 3: 0 };
const theoBoCuc = {};
const manhDung = new Set();

D.DS.join(' ').split(/\s+/).filter(Boolean).forEach(m => {
  tong++;
  const a = Array.from(m);
  const c = a[0], ids = a.slice(1).join('');
  if (!HOP_LE(c)) loi.push(`${m}: chu "${c}" ngoai U+4E00–9FA5`);
  if (daCo.has(c)) loi.push(`${m}: trung chu ${c} (da co ${daCo.get(c)})`);
  daCo.set(c, m);
  if (!D.BO_CUC[a[1]]) loi.push(`${m}: ky tu thu 2 "${a[1]}" khong phai ma bo cuc`);
  const cay = D.phanTich(ids);
  if (!cay || typeof cay === 'string') { loi.push(`${m}: IDS khong phan tich duoc`); return; }
  // moi ky tu cua IDS: hoac ma bo cuc hop le, hoac manh BMP thuong
  Array.from(ids).forEach(k => { if (KHONG_CO_FONT.indexOf(k) !== -1) loi.push(`${m}: manh "${k}" khong co trong font Noto Serif SC`); });
  Array.from(ids).forEach(k => { if (!D.BO_CUC[k] && !HOP_LE(k)) loi.push(`${m}: manh "${k}" (U+${k.codePointAt(0).toString(16).toUpperCase()}) khong phai chu BMP thuong`); });
  const la = D.la(cay);
  if (la.length < 2 || la.length > 3) loi.push(`${m}: ${la.length} manh (chi nhan 2–3)`);
  if (la.indexOf(c) !== -1) loi.push(`${m}: manh trung chinh chu`);
  soManh[la.length] = (soManh[la.length] || 0) + 1;
  theoBoCuc[a[1]] = (theoBoCuc[a[1]] || 0) + 1;
  la.forEach(x => manhDung.add(x));
  if (!D.CHU[c] || D.CHU[c].ids !== ids) loi.push(`${m}: khong vao bang CHU luc chay`);
});

// do phu: chu cua bang co mat trong tu vung bai HSK1–4 (lesson -data.js)
const thuMuc = path.join(GOC, 'public/js');
const re = /^(bai|hsk1-bai|hsk1v3-bai|hsk2v3-bai|hsk3-bai|hsk3v3-bai|hsk4-bai|hsk4v3-bai|yct-bai)-\d+-data\.js$/;
const chuBai = new Set();
fs.readdirSync(thuMuc).filter(f => re.test(f)).forEach(f => {
  const c2 = {};
  try { vm.runInNewContext(fs.readFileSync(path.join(thuMuc, f), 'utf8') + ';this.__v=typeof vocabData!=="undefined"?vocabData:[];', c2); } catch (e) { return; }
  (c2.__v || []).forEach(v => Array.from(String(v.zh || '')).forEach(ch => chuBai.add(ch)));
});
const coTrongBai = [...daCo.keys()].filter(c => chuBai.has(c));
const ngoaiBai = [...daCo.keys()].filter(c => !chuBai.has(c));

console.log(`Bang ghep bo thu: ${tong} chu (2 manh: ${soManh[2]}, 3 manh: ${soManh[3]})`);
console.log('Theo bo cuc: ' + Object.keys(theoBoCuc).map(k => `${k} ${theoBoCuc[k]}`).join(' · '));
console.log(`So manh khac nhau: ${manhDung.size}`);
console.log(`Co trong tu vung bai HSK1–4: ${coTrongBai.length}/${tong}` + (ngoaiBai.length ? ` (chua gap trong bai: ${ngoaiBai.join('')})` : ''));
if (tong < 250) loi.push(`Moi co ${tong} chu — can it nhat 250`);
if (loi.length) {
  console.error(`\n✗ ${loi.length} loi:`);
  loi.forEach(l => console.error('  - ' + l));
  process.exit(1);
}
console.log('✓ Hop le: moi manh la chu BMP thuong, ma bo cuc dung, khong trung chu.');
