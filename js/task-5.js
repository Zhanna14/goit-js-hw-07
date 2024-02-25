const clickMe = document.querySelector('.change-color');
const body = document.querySelector('body');
const valueColor = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
clickMe.addEventListener('click', handleClick);

function handleClick() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor; // застосувати колір до фону
  valueColor.textContent = newColor; // також оновити span.textContent тим самим кольором
}
