let productos = [ { titulo: 'Coca Cola', 
    precio: 1000, 
    descripcion: 'bebida energetica', 
    stock: 10, id: 1 }, { titulo: 'Sprite', 
        precio: 1200, 
        descripcion: 'bebida energetica sabor limon', 
        stock: 5, 
        id: 2 }, { titulo: 'Fanta', 
            precio: 1400, 
            descripcion: 'bebida energetica sabor naranja', 
            stock: 7, 
            id: 3 }, { titulo: 'Pepsi', 
                precio: 900, 
                descripcion: 'bebida energetica', 
                stock: 4, 
                id: 4 
            } 
        ]
//hacer una funcion que dado un id me permita obtener un producto por su id y mostrarlo por consola

    /**
    **  producto_id any parameter es el id del producto a buscar
    **  producto obj var es el producto que estoy recorriendo de mi lista de productos
    **  productos array var es la lista de productos
    **  Una funcion que recibe el Id del producto lo busca y lo retorna, si no lo encuentra devolvera underfined
    */
function obtenerProductoPorId(producto_id){
     //logica para buscar en la lista de productor por id

     //recorrer el array con un for of
    for(let producto of productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}
/*
let producto_encontrado = obtenerProductoPorId(90)
if(producto_encontrado){
    console.error('producto no encontrado')
}
else{
    console.log('Prodcuto encontrado', producto_encontrado)
} */

//Una funcion que me permita obtener a todos los productos que su precio sea mayor a 1100
//Esta funcion retornara un array, que estara compuesto de los elementos que cumplan con la condicion de tener un precio mayor a 1100

/*function ontenerProductosMAyoresA1100() {
    //esta es la lista donde guardo aquellos productos que cumplan con la condicion
    let array_resultante =[]
    for(let producto of productos)
        if(producto.precio > 1100){
            array_resultante.push(producto)

        }
        return array_resultante

}
let productosCaros = obtenerProductosMayoresA1100()
console.log(productosCaros)*/
function obtenerProductosMayoresA1100 (precio) {
    //Esta es la lista donde guardo aquellos productos que cumplan con la condicion
    let array_resultante = []
    for(let producto of productos){
        if(producto.precio > precio){
            array_resultante.push(producto)
        }
    }
    return array_resultante
}

//Ahora hace una funcion que devuelva a productos que esten entre 100 y 200
let productosCaros = obtenerProductosMayoresA1100(1300)
console.log(productosCaros)