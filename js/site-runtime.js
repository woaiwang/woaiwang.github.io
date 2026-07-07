/**
 * site-runtime.js — 网站运行时间计时器
 * 在页脚显示 "网站已运行 X 天 X 小时"
 */
(function () {
  // 网站起始日期（设为博客建立日期）
  const startDate = new Date('2024-05-01');
  const el = document.getElementById('site-runtime');
  if (!el) return;

  function updateRuntime() {
    const now = new Date();
    const diff = now - startDate;
    if (diff < 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    el.textContent = `⏳ 网站已运行 ${days} 天 ${hours} 小时 ${minutes} 分钟`;
  }

  updateRuntime();
  setInterval(updateRuntime, 60000);
})();
