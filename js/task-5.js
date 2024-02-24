// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomRgbColor() {
  return Math.floor(Math.random() * 255);
  }

const btn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const span = document.querySelector('span.color');

btn.addEventListener('click', onBtnHldr);

function onBtnHldr(event) {
  const rgb = `rgb(${getRandomRgbColor()}, ${getRandomRgbColor()}, ${getRandomRgbColor()})`;
  span.textContent = rgb;
  body.style.backgroundColor = rgb;
}
