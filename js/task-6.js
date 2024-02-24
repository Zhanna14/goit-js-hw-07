const number = document.querySelector('input');
const box = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

number.addEventListener('input', handleInput); // Призначаємо обробник подій для події зміни значення поля вводу

function handleInput(event) {
  const value = parseInt(number.value);
  console.log(value);

  if (value < 1 || value > 100) {
    number.value = '';
  }
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  box.innerHTML = '';
  let size = 30;
  const value = parseInt(number.value);

  for (let i = 1; i <= value; i += 1) {
    const square = document.createElement('div');
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    square.style.backgroundColor = getRandomHexColor();
    square.addEventListener('click', () => box.removeChild(square));
    box.appendChild(square);
    size += 10;
  }

  number.value = '';
});

destroyButton.addEventListener('click', () => {
  box.innerHTML = '';
});
