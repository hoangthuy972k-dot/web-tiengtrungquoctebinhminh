// Nen son thuy nhieu lop: di chuot (may tinh) hoac nghieng/cuon (dien thoai) thi
// lop gan troi nhieu hon lop xa -> cam giac chieu sau. Them canh hoa roi nhe.
(function () {
  var scene = document.querySelector('.scene');
  if (!scene) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var layers = [
    { el: scene.querySelector('.scene-far'), depth: 0.25 },
    { el: scene.querySelector('.scene-tree'), depth: 1 },
    { el: scene.querySelector('.scene-bamboo'), depth: 1.35 },
  ];
  var MAX = 12; // px lop gan nhat duoc troi toi da
  var mx = 0, my = 0, scrollY = 0, queued = false;

  function apply() {
    queued = false;
    var sy = Math.min(scrollY, 1200) / 1200; // 0..1
    layers.forEach(function (l) {
      if (!l.el) return;
      var x = -mx * MAX * l.depth;
      var y = -my * MAX * 0.6 * l.depth + sy * 8 * l.depth;
      l.el.style.transform = 'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0)';
    });
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(apply); } }

  if (!reduce) {
    window.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
      queue();
    }, { passive: true });
    window.addEventListener('scroll', function () { scrollY = window.scrollY; queue(); }, { passive: true });
    apply();
  }

  // Canh hoa roi
  var cv = scene.querySelector('.scene-petals');
  if (!cv || reduce || !cv.getContext) return;
  var ctx = cv.getContext('2d');
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W, H, petals = [];
  function size() {
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function spawn(p, top) {
    p.x = Math.random() * W * 0.55;      // roi tu phia cay hoa ben trai
    p.y = top ? -20 : Math.random() * H;
    p.r = 3 + Math.random() * 4;
    p.vx = 0.15 + Math.random() * 0.35;
    p.vy = 0.25 + Math.random() * 0.45;
    p.a = Math.random() * Math.PI * 2;
    p.va = (Math.random() - 0.5) * 0.03;
    p.o = 0.35 + Math.random() * 0.35;
    return p;
  }
  size();
  var count = W < 720 ? 8 : 16;
  for (var i = 0; i < count; i++) petals.push(spawn({}, false));
  window.addEventListener('resize', size);

  var running = true;
  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });
  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < petals.length; i++) {
      var p = petals[i];
      p.a += p.va;
      p.x += p.vx + Math.sin(p.a) * 0.3;
      p.y += p.vy;
      if (p.y > H + 20 || p.x > W + 20) spawn(p, true);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.a);
      ctx.globalAlpha = p.o;
      ctx.fillStyle = '#f4c9d2';
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
