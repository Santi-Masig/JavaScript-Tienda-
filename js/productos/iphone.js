//Carrito
const carrito = [];
const botonAgregar = document.querySelectorAll(".sumarCar");

botonAgregar.forEach((boton) => {
  boton.onclick = () => {
    console.log(boton.id);
  };
});

console.log(Producto);
