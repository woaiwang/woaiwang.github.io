/**
 * cursor-glow.js — 鼠标跟随霓虹光晕
 * 科技感：鼠标周围出现青蓝色渐变光晕，仅桌面端
 */
(function () {
  if (window.matchMedia('(max-width: 768px)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = -500;
  let mouseY = -500;
  let glowX = -500;
  let glowY = -500;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 使用 requestAnimationFrame 做平滑跟随
  function animate() {
    const easing = 0.08;
    glowX += (mouseX - glowX) * easing;
    glowY += (mouseY - glowY) * easing;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  }

  // 鼠标离开窗口时淡出光晕
  document.addEventListener('mouseleave', function () {
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function () {
    glow.style.opacity = '1';
  });

  animate();
})();
