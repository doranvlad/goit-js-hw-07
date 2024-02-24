// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// rgb random function

function getRandomRgbColor() {
  return Math.floor(Math.random() * 255);
  }

// input

const input = document.querySelector('input[type="number"]')
const inputMin = parseInt(input.min)
const inputMax = parseInt(input.max)

input.addEventListener('input', onInputPress);

let inputValue;

function onInputPress(event) {
  const input = event.target
  if (parseInt(input.value) >= inputMin && parseInt(input.value) <= inputMax) {
    inputValue = parseInt(input.value)
  } else {
    inputValue = -1;
  }
}

// button Create

const box = document.querySelector('button[data-create]')
const divHolder = document.querySelector('div#boxes')

box.addEventListener('click', onBoxClick)

function onBoxClick(event) {
  while (divHolder.children.length !== 0) {
    divHolder.removeChild(divHolder.firstChild)
  }

  let boxesList = [];

  if (inputValue !== -1) {
    let start = 30;
    for (let i = 0; i < inputValue; i += 1) {
      const newBox = document.createElement('div')
      newBox.classList.add('new-box')
      newBox.style.width = `${start}px`
      newBox.style.height = `${start}px`
      newBox.style.backgroundColor = `rgb(${getRandomRgbColor()}, ${getRandomRgbColor()}, ${getRandomRgbColor()}, 0.6)`
      boxesList.push(newBox)
      start += 10;
    }

    input.value = ''
  }

  divHolder.append(...boxesList)
}

// button Destroy

const destroy = document.querySelector('button[data-destroy]');
destroy.addEventListener('click', onBoxDestClick);

function onBoxDestClick(event) {
  while (divHolder.children.length !== 0) {
    divHolder.removeChild(divHolder.firstChild)
  }
 input.value = ''
};