const searchForm = document.querySelector(".header__form")
const searchInput = document.querySelector(".header__form__input")

searchForm.addEventListener("submit", (e) => {   
    e.preventDefault()
    const input = searchInput.value.toLowerCase()
    location.href=`../products/search-product.html?q=${input}`
})  