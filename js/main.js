//Variables globales
let total = 0;

//Array de productos
const productosArray = [];

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

const phone = new Telefonos(1,"Iphone 13 Pro", true, 500);
productosArray.push(phone);
const redmiNote = new Telefonos(2,"Redmi", false, 400);
productosArray.push(redmiNote);
const lenovoIp = new Telefonos(3, "Lenovo", true, 600);
productosArray.push(lenovoIp);

//Funciones
function comprar () {
    let compra = parseInt(prompt("Que producto desea comprar:\n1.Iphone 13 Pro\n2.Redmi Note 10\n3.Lenovo Ip\n4.Salir"));
    while(compra != 4) {
      total = total + productosArray[compra-1].precio;

      compra = parseInt(prompt("Desea seguir comprando?: 1.Si---2.No"));

      compra === 1 ? compra = parseInt(prompt("Que producto desea comprar:\n1.Iphone 13 Pro\n2.Redmi Note 10\n3.Lenovo Ip\n4.Salir")) 
      : compra === 2 ? compra = 4 : alert("No seleccionaste ninguna opcion!");
    }
    alert("El total a pagar es: " + total);
} 

//Main

let pregunta = parseFloat(prompt("Desea comprar?: 1.Si --- 2.No"));
pregunta === 1 ? comprar() : alert("Gracias por tu visita!");

//Fin MAIN





