import { productServices } from "../service/products-service.js"

const form = document.querySelector(".add__product__form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

})

const addProductForm = document.querySelector(".add__product__form");
const inputs = document.querySelectorAll(".add__product__form__input");
const sentMessage = document.querySelector(".add__product__form__sent__message");
const sendButton = document.querySelector(".add__product__form__button");

console.log(inputs)
function areValid() {
  const areTrue = Object.values(validInputs).every((value) => value === true);
  return areTrue;
}

const validInputs = {
  name: false,
  url: false,
  category: false,
  price: false,
  description: false
};

sendButton.disabled = true;

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value
    const category = document.querySelector("#category").value
    const img = document.querySelector("#url").value

    productServices.createProduct(name, price, description, category, img).then(response => {
        console.log(response)
    }).catch(err => console.log(err))
    location.href = "../products"

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
    console.log(input.value.length)
    let regex = new RegExp('^[0-9]+$');

    if(input.value.length === 0){
        showErrorMessage(input, messages.empty);
    } else if (
    input.name === "name" &&
    input.value.length > 20 
  ) {
    validInputs[input.name] = false;
    showErrorMessage(input, messages.maxCharName);
  } else if (
    input.name === "description" &&
    input.value.length > 150 
  ) {
    validInputs[input.name] = false;
    showErrorMessage(input, messages.maxCharDescription);
  } else if (input.name === "price" && !regex.test(input.value)){
    validInputs[input.name] = false;
    showErrorMessage(input, messages.price);
  }else {
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
  maxCharName: "Error: el máximo de caracteres permitidos es 20",
  maxCharDescription: "Error: el máximo de caracteres permitidos es 150",
  empty: "El campo no puede estar vacío",
  price: "El campo precio solo acepta números",
  error: "Revisar campos"
};
