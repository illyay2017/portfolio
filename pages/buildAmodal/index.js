const overlay = document.getElementById('overlay');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', showOverlay);
closeModalBtn.addEventListener('click', hideOverlay);

function showOverlay(e) {
  overlay.style.display = 'block';
}

function hideOverlay(e) {
  overlay.style.display = 'none';
}
