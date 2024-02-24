const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  const userEmail = elements.email.value.trim();
  const userPasword = elements.password.value.trim();
  if (userEmail === '' || userPasword === '') {
    alert(`All form fields must be filled in`);
  } else {
    const info = {
      email: userEmail,
      password: userPasword,
    };
    console.log(info);
  }

  event.currentTarget.reset();
}
