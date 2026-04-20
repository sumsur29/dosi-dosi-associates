// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Scroll-reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }

  // Pause other videos when one plays (so they don't all run together)
  document.querySelectorAll('.testimonial-card video').forEach(video => {
    video.addEventListener('play', () => {
      document.querySelectorAll('.testimonial-card video').forEach(other => {
        if (other !== video) other.pause();
      });
    });
  });

  // Contact form -> mailto
  const form = document.querySelector('form.contact-form-el');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name') || '';
      const company = data.get('company') || '';
      const phone = data.get('phone') || '';
      const issue = data.get('issue') || '';
      const message = data.get('message') || '';
      const subject = encodeURIComponent(`Discussion Request — ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nPrimary Challenge: ${issue}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:dosiandosiassociates@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
