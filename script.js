// Mobile nav
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // Reveal on scroll
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // Method tabs
  const tabbtns = document.querySelectorAll('.tabbtn');
  const tabpanels = document.querySelectorAll('.tabpanel');
  const ink = document.querySelector('.tabink');
  function moveInk(b) { if (ink && b) { ink.style.left = b.offsetLeft + 'px'; ink.style.width = b.offsetWidth + 'px'; } }
  function fill(p) { p.querySelectorAll('.bfill').forEach(b => { b.style.width = '0'; setTimeout(() => b.style.width = b.dataset.w + '%', 60); }); }
  tabbtns.forEach(btn => btn.addEventListener('click', () => {
    const i = btn.dataset.i;
    tabbtns.forEach(b => b.classList.remove('on'));
    tabpanels.forEach(p => p.classList.remove('on'));
    btn.classList.add('on'); moveInk(btn);
    const p = document.querySelector('.tabpanel[data-p="' + i + '"]');
    p.classList.add('on'); fill(p);
  }));
  window.addEventListener('load', () => { const a = document.querySelector('.tabbtn.on'); moveInk(a); const p = document.querySelector('.tabpanel.on'); if (p) fill(p); });
  window.addEventListener('resize', () => moveInk(document.querySelector('.tabbtn.on')));

  // Count-up numbers
  function countUp(el) {
    const t = parseInt(el.dataset.target);
    const suf = el.dataset.suffix || '';
    const pre = el.dataset.prefix || '';
    const dur = 1400, start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(e * t) + suf;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const nobs = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting && en.target.dataset.target) { countUp(en.target); nobs.unobserve(en.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.rnum[data-target]').forEach(el => nobs.observe(el));
})();
