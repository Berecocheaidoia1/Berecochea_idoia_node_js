var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]


function pluck(array, propiedad) {
    let nuevoArray = array.map((a) => a[propiedad]);
    return nuevoArray;
}

console.log(pluck(productos,'name'))
console.log(pluck(productos, "price"))

//