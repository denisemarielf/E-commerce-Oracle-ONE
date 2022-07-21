const loginButton = document.querySelector('.login__form__button')
const loginForm = document.querySelector('.login__form')

loginForm.addEventListener('submit', (e) => e.preventDefault())

loginButton.addEventListener('click', () => location.href = "../products")