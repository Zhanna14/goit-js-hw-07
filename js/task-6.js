const inputAmount = document.querySelector('input');
const box = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  box.innerHTML = "";
  let size = 30;
  const value = parseInt(inputAmount.value);

  for (let i = 1; i <= value; i += 1) {
    const square = document.createElement('div');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    box.appendChild(square);
    size += 10;
  }

  inputAmount.value = "";
});

destroyButton.addEventListener('click', () => {
  box.innerHTML = "";
});
