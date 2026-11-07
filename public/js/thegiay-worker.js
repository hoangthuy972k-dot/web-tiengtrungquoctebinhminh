/* Web Worker nhan dien The giay A/B/C/D — chay thegiay-ma.js ngoai luong giao dien.
   Nhan { so, w, h, buf (RGBA ArrayBuffer), opt } -> tra { so, kq, ms, buf } (tra lai buf de dung lai). */
/* global importScripts, TheGiayMa */
importScripts('/js/thegiay-ma.js');
var xamBuf = null;
self.onmessage = function (e) {
  var d = e.data, t0 = Date.now();
  var n = d.w * d.h;
  if (!xamBuf || xamBuf.length !== n) xamBuf = new Uint8Array(n);
  var kq = [];
  try {
    TheGiayMa.xam(new Uint8ClampedArray(d.buf), d.w, d.h, xamBuf);
    kq = TheGiayMa.phatHien(xamBuf, d.w, d.h, d.opt || {});
  } catch (err) { kq = []; }
  self.postMessage({ so: d.so, kq: kq, ms: Date.now() - t0, buf: d.buf }, [d.buf]);
};
