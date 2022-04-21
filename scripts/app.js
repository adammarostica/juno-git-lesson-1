const h1 = document.querySelector('h1');

const mkdir = new Audio('./mkdir.ogg');

h1.addEventListener('click', (e) => {
  e.target.classList.toggle('tomatoTime');
  mkdir.currentTime = 0;
  mkdir.play();
});