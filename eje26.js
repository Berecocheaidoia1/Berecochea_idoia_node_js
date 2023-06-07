// Sacar el valor total de todos los artículos que se encuentren en la tienda, 
//pero que estén separados por sección, cada artículo diferenciado de otro sin estar en el mismo arreglo.
//Crear una nueva función llamada “totalDeArticulos” que como parametro que tenga, 
//haga referencia a un arreglo de productos de nuestro ecommerce.
//La función en general tendrá que devolver un nuevo arreglo con objetos que tengan el nombre de cada producto 
//y el valor total de todos los artículos que se encuentren en la tienda



function totalDeArticulos(productos) {
    const seccionesTotales = {};
  
    productos.forEach((producto) => {
      
      if (!seccionesTotales[producto.seccion]) {  // Verificar si la sección del producto ya existe en el objeto
        
        seccionesTotales[producto.seccion] = 0;
      }
     
      seccionesTotales[producto.seccion] += producto.valor;
    });
  
    
    const productosTotales = Object.keys(seccionesTotales).map((seccion) => ({
      nombre: seccion,
      valor: seccionesTotales[seccion],
    }));
  
   
    return productosTotales;
}
totalDeArticulos(productos)  