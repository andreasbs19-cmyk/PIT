// Accordion
document.querySelectorAll('.section-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const content = btn.closest('.section').querySelector('.section-content');
    btn.setAttribute('aria-expanded', !isOpen);
    content.classList.toggle('open', !isOpen);
  });
});

// Carousel
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.carousel-slide');
let current = 0;

function goTo(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

// Swipe support
let startX = 0;
track.addEventListener('pointerdown', e => { startX = e.clientX; track.classList.add('grabbing'); });
track.addEventListener('pointermove', e => e.preventDefault(), { passive: false });
track.addEventListener('pointerup', e => {
  const diff = startX - e.clientX;
  track.classList.remove('grabbing');
  if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
});
