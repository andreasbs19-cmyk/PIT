document.querySelectorAll('.section-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const content = btn.closest('.section').querySelector('.section-content');

    btn.setAttribute('aria-expanded', !isOpen);
    content.classList.toggle('open', !isOpen);
  });
});
