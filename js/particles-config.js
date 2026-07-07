/**
 * particles-config.js — Canvas 粒子网络背景
 * 科技感：连接线 + 粒子点，仅桌面端
 * 使用轻量自实现，不依赖外部库
 */
(function () {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  var canvas = document.createElement('canvas');
  canvas.id = 'particles-js';
  document.body.prepend(canvas);

  var ctx = canvas.getContext('2d');
  var particles = [];
  var particleCount = 60;
  var connectDist = 150;
  var colors = ['rgba(28, 208, 253,', 'rgba(59, 130, 246,', 'rgba(139, 92, 246,'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // 初始化粒子
  for (var i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制连接线
    for (var i = 0; i < particles.length; i++) {
      for (var j = i + 1; j < particles.length; j++) {
        var dx = particles[i].x - particles[j].x;
        var dy = particles[i].y - particles[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectDist) {
          var opacity = (1 - dist / connectDist) * 0.25;
          ctx.strokeStyle = 'rgba(28, 208, 253,' + opacity + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // 绘制粒子
    for (var k = 0; k < particles.length; k++) {
      var p = particles[k];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)] + '0.8)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      // 移动
      p.x += p.vx;
      p.y += p.vy;

      // 边界反弹
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    }

    requestAnimationFrame(draw);
  }

  draw();
})();
