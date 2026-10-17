(() => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', (event) => {
      if (!links.contains(event.target) && !toggle.contains(event.target)) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  document.querySelectorAll('.copy-email').forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.email;
      const originalText = button.textContent;
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = 'Email copied!';
      } catch (_) {
        // Clipboard access may be blocked on local file URLs or insecure contexts.
        window.prompt('Copy this email address:', email);
      }
      window.setTimeout(() => { button.textContent = originalText; }, 1800);
    });
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();