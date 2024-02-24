const clickMe = document.querySelector('.change-color');
const color = document.querySelector('body');
const valueColor = document.querySelector('.color')
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
clickMe.addEventListener('click', handleClick);


function handleClick() {
  color.style.backgroundColor = getRandomHexColor();
  valueColor.textContent = getRandomHexColor();
}


