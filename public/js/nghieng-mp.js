// Nap MediaPipe Tasks Vision (nhan dien khuon mat) tu CDN cho trang /nghieng.
// Chi trang nay duoc noi CSP cho cdn.jsdelivr.net + storage.googleapis.com (server.js).
// Xong thi gan window.NghiengMP va bao su kien 'nghieng-mp' (hoac 'nghieng-mp-loi').
const BAN = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/vision_bundle.mjs';

import(BAN).then((m) => {
  window.NghiengMP = { FaceLandmarker: m.FaceLandmarker, FilesetResolver: m.FilesetResolver };
  window.dispatchEvent(new Event('nghieng-mp'));
}).catch((e) => {
  window.NghiengMPLoi = String(e && e.message || e);
  window.dispatchEvent(new Event('nghieng-mp-loi'));
});
