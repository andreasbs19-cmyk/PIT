(function () {
  const canvas = document.getElementById('rain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COUNT = window.innerWidth < 480 ? 140 : 200;

  const drops = Array.from({ length: COUNT }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    len: Math.random() * 30 + 20,
    speed: Math.random() * 5 + 6,
    opacity: Math.random() * 0.25 + 0.1,
    width: Math.random() * 0.55 + 0.3,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drops.forEach(function (d) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.strokeStyle = 'rgba(190, 215, 235, ' + d.opacity + ')';
      ctx.lineWidth = d.width;
      ctx.lineCap = 'round';
      ctx.stroke();
      d.y += d.speed;
      if (d.y > canvas.height + d.len) {
        d.y = -d.len;
        d.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }

  draw();
})();
