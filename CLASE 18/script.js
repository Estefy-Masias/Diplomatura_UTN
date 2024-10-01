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
let producto_encontrado = obtenerProductoPorId(90)
if(producto_encontrado){
    console.error('producto no encontrado')
}
else{
    console.log('Prodcuto encontrado', producto_encontrado)
}