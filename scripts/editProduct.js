import { productServices } from "../service/products-service.js";

const form = document.querySelector(".edit__product__form")

const nameInput = document.querySelector("input[name = 'name']")
const priceInput = document.querySelector("input[name = 'price']")
const descriptionInput = document.querySelector("textarea[name = 'description']")
const categoryInput = document.querySelector("input[name = 'category']")
const urlInput = document.querySelector("input[name = 'url']")
const url = new URL(window.location)
const id = url.searchParams.get("id")

const getInformation = () => {

    
    productServices.productData(id).then((product) =>{
        nameInput.value = product.name
        priceInput.value = product.price
        descriptionInput.value = product.description
        category.value = product.category
        urlInput.value = product.img
    })

}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    productServices.editProduct(nameInput.value, priceInput.value, descriptionInput.value, categoryInput.value, urlInput.value, id).then(()=> {
        location.href = "../products"
    })
})

getInformation()