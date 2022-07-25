const loginForm = document.querySelector(".login__form");
const loginInputs = document.querySelectorAll(".login__form__input");
const loginButton = document.querySelector(".login__form__button");

function areValid() {
  const areTrue = Object.values(validInputs).every((value) => value === true);
  return areTrue;
}

const validInputs = {
  email: false,
  password: false,
};

loginButton.disabled = true;
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if(loginInputs[0].value == authenticatedUser.email && loginInputs[1].value == authenticatedUser.password){
  loginInputs.forEach((input) => {
    input.value = "";
    input.parentElement.style.borderBottom = "1px solid #A2A2A2";
  });
  validInputs.message = false;
  validInputs.name = false;
  location.href = "../products"}
  else {
    document.querySelector(".login__form__login__error__message").innerHTML = messages.userNotAllowed
  }
});

loginInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validation(input);
  });
  input.addEventListener("keydown", () => {
    validation(input);
  });
});

const validation = (input) => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    
  if (
    input.name === "email" &&
    !regex.test(input.value)
  ) {
    validInputs[input.name] = false;
    showErrorMessage(input, messages.emailMismatch);
  } else if (input.value.length === 0) {
    showErrorMessage(input, messages.empty);
  } else {
    validInputs[input.name] = true;
    showValidInput(input);
  }
  let status = areValid();
  if (status) {
    loginButton.disabled = false;
  }
};

const showErrorMessage = (input, message) => {
  input.parentElement.nextElementSibling.innerHTML = message;
  input.parentElement.style.borderBottom = "1px solid red";
};

const showValidInput = (input) => {
  input.parentElement.style.borderBottom = "1px solid green";
  input.parentElement.nextElementSibling.innerHTML = "";
};

const messages = {
  emailMismatch: "Error: el email debe seguir el formato email@email.com",
  empty: "El campo no puede estar vacío",
  userNotAllowed: "Error: usuario o contraseña incorrectos"
};

const authenticatedUser = {
    email: "admin@admin.com",
    password: "1234"
}

