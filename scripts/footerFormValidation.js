const footerForm = document.querySelector(".footer__form");
const inputs = document.querySelectorAll(".footer__form__input");
const sentMessage = document.querySelector(".footer__form__sent__message");
const sendButton = document.querySelector(".footer__form__button");

const logo = document.querySelector(".header__logo__search__bar > img")

const searchPhone = document.querySelector("#search__phone")
const searchBar = document.querySelector(".header__form")

const loginButton = document.querySelector('.header__login__button')
loginButton.addEventListener('click', () => location.href = "./login")

searchPhone.addEventListener("click", () => {
  searchBar.style.display === "none" ? searchBar.style.display = "flex" : searchBar.style.display = "none"
})

logo.addEventListener("click", () => {
  location.href = "../index.html"
})

function areValid() {
  const areTrue = Object.values(validInputs).every((value) => value === true);
  return areTrue;
}

const validInputs = {
  name: false,
  message: false,
};

sendButton.disabled = true;

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    input.value = "";
    input.parentElement.style.borderBottom = "1px solid #A2A2A2";
  });
  sentMessage.style.display = "block";
  validInputs.message = false;
  validInputs.name = false;
  setTimeout(() => {
    sentMessage.style.display = "none";
  }, 3000);
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    validation(input);
  });
  input.addEventListener("keydown", () => {
    validation(input);
  });
});

const validation = (input) => {
  if (
    input.name === "name" &&
    input.value.length > 40 &&
    input.value.length > 0
  ) {
    validInputs[input.name] = false;
    showErrorMessage(input, messages.maxCharName);
  } else if (
    input.name === "message" &&
    input.value.length > 120 &&
    input.value.length > 0
  ) {
    validInputs[input.name] = false;
    showErrorMessage(input, messages.maxCharMessage);
  } else if (input.value.length === 0) {
    showErrorMessage(input, messages.empty);
  } else {
    validInputs[input.name] = true;
    showValidInput(input);
  }
  let status = areValid();
  if (status) {
    sendButton.disabled = false;
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
  maxCharName: "Error: el máximo de caracteres permitidos es 40",
  maxCharMessage: "Error: el máximo de caracteres permitidos es 120",
  empty: "El campo no puede estar vacío",
};
