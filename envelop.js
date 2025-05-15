const envelope = document.querySelector('.envelope-wrapper');
let opened = false;

envelope.addEventListener('click', () => {
  if (!opened) {
    envelope.classList.add('flap');
    opened = true;
  } else {
    window.location.href = "index.html"; // Palitan kung ibang link gusto mo
  }
});
