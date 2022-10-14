const checkButton = document.getElementById('agreement');
const buttonSubmit = document.getElementById('submit-btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');

login.addEventListener('click', (event) => {
  event.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkButton.addEventListener('click', () => {
  if (checkButton.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', true);
  }
});
