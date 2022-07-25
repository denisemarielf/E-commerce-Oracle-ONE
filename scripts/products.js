import { productServices } from "../service/products-service.js"


const addProductButton = document.querySelector('.add__product__button')
const ediProductButton = document.querySelector("edit__product__button")
const productsContainer = document.querySelector(".products__container")

productServices.getProductList()
.then((data) => {
    data.forEach(product => {
        createNewProduct(product.name, product.price, product.img, productsContainer, product.id)
    });
    console.log(data)
})

.catch((error) => console.log(error))


const createNewProduct = (name, price, imgsrc, container, id) => {
    const article = document.createElement('article')
    article.setAttribute('class', 'products__product__item')
    const img = document.createElement('img')
    img.src = imgsrc
    img.setAttribute("class", "product__item__img")
    const h2 = document.createElement('h2')
    h2.innerHTML = name
    h2.setAttribute("class", "product__item__name")
    const p = document.createElement('p')
    p.innerHTML = `$ ${price}`
    p.setAttribute("class", "product__item__price")
    const a = document.createElement('a')
    a.innerHTML = "Ver producto"
    a.href = `./product-details.html?id=${id}`
    a.setAttribute("class", "product__item__a")
    const buttonEdit = document.createElement("button")
    buttonEdit.setAttribute("class", "product__item__edit__button")
    const iconEdit = document.createElement("i")
    iconEdit.setAttribute("class", "fa-solid fa-pen-to-square")
    buttonEdit.appendChild(iconEdit)
    buttonEdit.addEventListener("click", () => location.href=`../products/edit-product.html?id=${id}`)
    const buttonDelete = document.createElement("button")
    buttonDelete.setAttribute("class", "product__item__delete__button")
    const iconDelete = document.createElement("i")
    iconDelete.setAttribute("class", "fa-solid fa-trash")
    buttonDelete.appendChild(iconDelete)
    buttonDelete.addEventListener("click", ()=>productServices.deleteProduct(id))
    article.append(img, h2, p, a, buttonEdit, buttonDelete)
    container.append(article)
}

addProductButton.addEventListener('click', () => location.href = "../products/add-product.html")

