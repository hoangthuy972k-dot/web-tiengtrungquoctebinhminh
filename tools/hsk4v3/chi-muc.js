// Chi muc tu vung + chu Han da co tren web (moi file public/js/*-bai-*-data.js) — de soan HSK 4 (3.0)
// dung lai phan nghia, Han Viet, phan tich chu Han da duyet; chi viet moi nhung gi chua co.
//   const { tu, chu } = require('./chi-muc')();   tu['申请'] -> [{cap, bai, v}], chu['申'] -> entry hanzi
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const JS = path.join(__dirname, '..', '..', 'public', 'js');
// Uu tien nguon gan HSK 4 nhat
const UU_TIEN = ['hsk4', 'hsk3v3', 'hsk5', 'hsk3', 'hsk2v3', 'hsk6', 'hsk2', 'hsk1v3', 'hsk1', 'bai', 'yct'];
module.exports = function () {
  const tu = {}, chu = {};
  const files = fs.readdirSync(JS).filter((f) => /-bai-\d+-data\.js$/.test(f) && !/^hsk4v3-/.test(f));
  files.sort((a, b) => UU_TIEN.indexOf(a.split('-bai-')[0]) - UU_TIEN.indexOf(b.split('-bai-')[0]));
  files.forEach((f) => {
    const c = { window: {} };
    c.window.window = c.window;
    vm.createContext(c);
    try { vm.runInContext(fs.readFileSync(path.join(JS, f), 'utf8') + ';window.V=typeof vocabData!=="undefined"?vocabData:[];', c, { timeout: 5000 }); } catch (e) { return; }
    const cap = f.split('-bai-')[0], bai = +f.match(/-bai-(\d+)/)[1];
    (c.window.V || []).forEach((v) => {
      if (!v || !v.zh) return;
      (tu[v.zh] = tu[v.zh] || []).push({ cap, bai, v });
      (v.hanzi || []).forEach((h) => {
        if (h && h.c && !chu[h.c] && h.type && h.rad && h.tip && h.ord && h.cf && h.w) chu[h.c] = h;
      });
    });
  });
  return { tu, chu };
};
