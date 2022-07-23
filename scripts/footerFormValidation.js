const footerForm = document.querySelector(".footer__form");
const inputs = document.querySelectorAll(".footer__form__input");
const sentMessage = document.querySelector(".footer__form__sent__message");
const sendButton = document.querySelector(".footer__form__button");

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
