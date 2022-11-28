//Clase de productos
class Producto {
  constructor(id, nombre, precio, img, direccion) {
    (this.id = id), (this.nombre = nombre), (this.precio = precio);
    this.img = img;
    this.direccion = direccion;
  }
}

//Array de productos y carrito
const productosArray = [];

//Agrego los productos al Array
productosArray.push(
  new Producto(1, "IPHONE 13 PRO", 500, "iphone.jpg", "iphone13pro.html")
);
productosArray.push(
  new Producto(
    2,
    "REDMI NOTE 10 PRO",
    400,
    "redminote10pro.jpg",
    "redminote10pro.html"
  )
);
productosArray.push(
  new Producto(3, "NIKOND3500", 350, "nikond3500.jpg", "nikond3500.html")
);
productosArray.push(
  new Producto(4, "REDRAGON K630", 80, "reddragonk.jpg", "reddragonk630.html")
);

//Elementos del DOM
const divProductos = document.getElementById("divProductos");

divProductos.innerHTML = `
    <h1 class="h3 text-center mt-3 mb-4">Bienvenido/a </h1>
    <div class="row justify-content-around">
    `;

productosArray.forEach((producto) => {
  divProductos.innerHTML =
    divProductos.innerHTML +
    `
    <div id="${producto.id}" class="card" style="width: 18rem">
        <img src="./images/productos/${producto.img}" class="card-img-top" alt="Imagen de Iphone 13 Pro" />
        <div class="card-body">
          <h4 class="card-title text-center">${producto.nombre}</h4>
          <p class="card-text">${producto.precio}</p>
          <a href="./pages/productos/${producto.direccion}" class="btn btn-primary">Ir al Producto</a>
          <button id="${producto.id}" class="sumarCar">Comprar</button>
        </div>
      </div>
    `;
});

//Carrito
const carrito = [];
const botonAgregar = document.querySelectorAll(".sumarCar"); //Por alguna razon con GetElement no funciona

botonAgregar.forEach((boton) => {
  boton.onclick = () => {
    const producto = productosArray.find(
      (prod) => prod.id === parseInt(boton.id)
    );

    const productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };

    const indexCarrito = carrito.findIndex((prod) => prod.id === producto.id);

    if (indexCarrito === -1) {
      carrito.push(productoCarrito);
    } else {
      carrito[indexCarrito].cantidad += 1;
    }
    console.log(carrito);
  };
});

//Boton finalizar compra

const bttnFin = document.getElementById("finalizar");

bttnFin.onclick = () => {
  const totalCompra = carrito
    .map((prod) => prod.precio * prod.cantidad)
    .reduce((elem1, elem2) => elem1 + elem2);
    Swal.fire("El total de tu compra es: " + totalCompra);
};
