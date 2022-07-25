import { productServices } from "../service/products-service.js"

const loginButton = document.querySelector('.header__login__button')
const headphonesContainer = document.querySelector(".products__row__container[data-category='headphones']")
const notebooksContainer = document.querySelector(".products__row__container[data-category='notebooks']")
const phonesContainer = document.querySelector(".products__row__container[data-category='phones']")

loginButton.addEventListener('click', () => location.href = "./login")

productServices.getProductList()
.then((data) => {
    const headphones = filterByCategory(data, "headphone")
    const notebooks = filterByCategory(data, "notebook")
    const phones = filterByCategory(data, "phone")
    headphones.forEach(product => {
        createNewProduct(product.name, product.price, product.img, headphonesContainer, product.id)
    });
    notebooks.forEach(product => {
        createNewProduct(product.name, product.price, product.img, notebooksContainer, product.id)
    });
    phones.forEach(product => {
        createNewProduct(product.name, product.price, product.img, phonesContainer, product.id)
    });
})
.catch((error) => console.log(error))

const filterByCategory = (data, category) => {
    const result = data.filter(product => product.category === category)
    return result
}


const createNewProduct = (name, price, imgsrc, container, id) => {
    const article = document.createElement('article')
    article.setAttribute('class', 'product__item')
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
    a.href = ""
    a.setAttribute("class", "product__item__a")
    a.href = `./products/product-details.html?id=${id}`
    article.append(img, h2, p, a)
    container.append(article)
}

