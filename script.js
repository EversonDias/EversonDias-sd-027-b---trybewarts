const checkButton = document.getElementById('agreement');
const buttonSubmit =  document.getElementById('submit-btn');

function validLogin () {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email.innerText === 'tryber@teste.com' && password.innerText === '123456') {
        alert = '"Olá, Tryber!'
    }else {
        alert = 'Email ou senha inválidos'
    }
} validLogin ();

checkButton.addEventListener('click', () => {
 if (checkButton.checked) {
  buttonSubmit.removeAttribute('disabled')
 } else {
  buttonSubmit.setAttribute('disabled', true)
 };
})