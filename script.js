const pitButton = document.getElementById('pitButton');
const menuDropdown = document.getElementById('menuDropdown');

pitButton.addEventListener('click', () => {
  menuDropdown.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.overlay')) {
    menuDropdown.classList.remove('open');
  }
});
