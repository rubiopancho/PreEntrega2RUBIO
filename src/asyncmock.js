const productos = [
    {nombre: "Alfombra", precio: 500, id : "1" , img: "../img/alfombra.jpg", idCat: "1"},
    {nombre: "Pantuflas", precio: 200, id: "2" , img: "../img/pantuflas.jpg", idCat: "2"},
    {nombre: "Almohadon", precio: 150, id: "3" , img: "../img/almohadon.jpg", idCat: "3"},
    {nombre: "Cartera", precio: 400, id: "4", img: "../img/cartera.jpg", idCat: "4"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
           resolve(productos) 
        },1000 );
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 1000);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 1000)
    })
}