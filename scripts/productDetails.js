import { productServices } from "../service/products-service.js";

const productsContainer = document.querySelector(".products__container");
const img = document.querySelector(".product__details__img")
const name = document.querySelector(".product__details__name")
const price = document.querySelector(".product__details__price")
const description = document.querySelector(".product__details__description")

const url = new URL(window.location);
const id = url.searchParams.get("id");

const product = productServices.productData(id);
product.then((product) => {
  img.src = product.img
  name.innerHTML = product.name
  price.innerHTML = `$ ${product.price}`
  description.innerHTML = product.description
});
