const getProductList = async () => {
    const response = await fetch("http://localhost:3000/products")
    return await response.json()
}

const createProduct = async (name, price, description, category, img) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, price, description, img, category, id: uuidv4()})
    })
}

const deleteProduct = async (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
    })
    
}

const productData = async (id) => {
    return fetch(`http://localhost:3000/products/${id}`).then(response => response.json())
}

const editProduct = async (name, price, description, category, img, id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, price, description, category, img}),
    })
    .then((respuesta) => console.log(respuesta))
    .catch((err) => console.log(err) )
}

export const productServices = {
    createProduct,
    getProductList,
    deleteProduct,
    productData,
    editProduct
}