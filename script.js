// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open'));
    });
  }

  // Close menu when clicking a link (on mobile)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links && links.classList.remove('open'));
  });

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

  // Contact form: open mailto with content pre-filled (no backend needed)
  const form = document.querySelector('form.contact-form-el');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = encodeURIComponent(data.get('name') || '');
      const company = encodeURIComponent(data.get('company') || '');
      const phone = encodeURIComponent(data.get('phone') || '');
      const message = encodeURIComponent(data.get('message') || '');
      const subject = encodeURIComponent(`Discussion Request — ${data.get('name') || 'New Enquiry'}`);
      const body = `Name: ${decodeURIComponent(name)}%0D%0ACompany: ${decodeURIComponent(company)}%0D%0APhone: ${decodeURIComponent(phone)}%0D%0A%0D%0A${decodeURIComponent(message)}`;
      window.location.href = `mailto:dosiandosiassociates@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
