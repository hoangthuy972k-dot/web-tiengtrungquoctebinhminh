// Nap MediaPipe Tasks Vision (ban tay + dang nguoi) tu CDN cho trang /van-dong.
// Chi trang nay duoc noi CSP cho cdn.jsdelivr.net + storage.googleapis.com (server.js).
// Xong thi gan window.VanDongMP va bao su kien 'vandong-mp' (hoac 'vandong-mp-loi').
const BAN = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/vision_bundle.mjs';

import(BAN).then((m) => {
  window.VanDongMP = { HandLandmarker: m.HandLandmarker, PoseLandmarker: m.PoseLandmarker, FilesetResolver: m.FilesetResolver };
  window.dispatchEvent(new Event('vandong-mp'));
}).catch((e) => {
  window.VanDongMPLoi = String(e && e.message || e);
  window.dispatchEvent(new Event('vandong-mp-loi'));
});
