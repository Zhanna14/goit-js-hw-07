const nameInput = document.querySelector('#name-input');
const nameOutput = document.getElementById('name-output');
const text = nameOutput.textContent;
nameInput.addEventListener('input', handleInput);
function handleInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  if (trimmedValue !== '') {
    nameOutput.textContent = trimmedValue;
  } else {

    nameOutput.textContent = text;
  }
}
