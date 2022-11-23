//Array de productos y Carrito
const productosArray = [];
const carrito = [];

//Objetos
class Telefonos {
  constructor(id, modelo, stock, precio){
    this.modelo = modelo;
    this.stock = stock;
    this.precio = precio;
  }
  stock() {
    if (this.stock == true) {
      return true;
    } else if (this.stock == false){
      return false;
    }
  }
}

const phone = new Telefonos(1 ,"Iphone 13 Pro", true, 500);
productosArray.push(phone);
const redmiNote = new Telefonos(2 ,"Redmi", false, 400);
productosArray.push(redmiNote);
const lenovoIp = new Telefonos(3 , "Lenovo", true, 600);
productosArray.push(lenovoIp);

//DOM

const selectProd = document.getElementById("lista");

productosArray.forEach(elemento => {
  const optionProd = document.createElement("option");
  optionProd.innerText = elemento.modelo + ": " + elemento.precio;
  selectProd.append(optionProd)
})



//Eventos

const botonIngresar = document.getElementById("ingresarProd");
const finalizarCompra = document.getElementById("finalizar");

botonIngresar.onclick = () => {
  const indexProd = selectProd.selectedIndex;
  const productoSelec = productosArray[indexProd];
  carrito.push(productoSelec);
}

finalizarCompra.onclick = () => {
  let total = 0;
  carrito.forEach((prod) => {
    total += prod.precio;
  })
  alert("Escogiste " + carrito.length + " productos y el total de la compra es: " + total);
}

