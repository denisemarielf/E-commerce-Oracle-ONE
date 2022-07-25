import { productServices } from "../service/products-service.js";

const productsContainer = document.querySelector(".products__container");

const url = new URL(window.location);
const query = url.searchParams.get("q");

const products = productServices.getProductList();
products.then((data) => {
  console.log(data);
  const productsQuery = data.filter((product) => {
    let name = product.name.toLowerCase();
    return name.includes(query);
  });
  if (productsQuery.length === 0) {
    const h3 = document.createElement("h3")
    h3.innerHTML = "No se encontraron productos"
    productsContainer.append(h3)
  } else {
    productsQuery.forEach((product) => {
      console.log(product);
      createNewProduct(
        product.name,
        product.price,
        product.img,
        productsContainer,
        product.id
      );
    });
  }
});

const createNewProduct = (name, price, imgsrc, container, id) => {
  const article = document.createElement("article");
  article.setAttribute("class", "products__product__item");
  const img = document.createElement("img");
  img.src = imgsrc;
  img.setAttribute("class", "product__item__img");
  const h2 = document.createElement("h2");
  h2.innerHTML = name;
  h2.setAttribute("class", "product__item__name");
  const p = document.createElement("p");
  p.innerHTML = `$ ${price}`;
  p.setAttribute("class", "product__item__price");
  const a = document.createElement("a");
  a.innerHTML = "Ver producto";
  a.href = `./product-details.html?id=${id}`;
  a.setAttribute("class", "product__item__a");
  article.append(img, h2, p, a);
  container.append(article);
};
