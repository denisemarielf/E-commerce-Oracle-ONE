import { productServices } from "../service/products-service.js"


const editProductForm = document.querySelector(".edit__product__form");
const inputs = document.querySelectorAll(".edit__product__form__input");

const sendButton = document.querySelector(".edit__product__form__button");


function areValid() {
  const areTrue = Object.values(validInputs).every((value) => value === true);
  return areTrue;
}

const validInputs = {
  name: true,
  url: true,
  category: true,
  price: true,
  description: true
};


editProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
    const name = document.querySelector("#name").value
    const price = document.querySelector("#price").value
    const description = document.querySelector("#description").value
    const category = document.querySelector("#category").value
    const img = document.querySelector("#url").value

    productServices.editProduct(name, price, description, category, img).then(response => {
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
