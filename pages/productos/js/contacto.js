const formUser = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const nombreUser = document.getElementById("nombre");
const apellidoUser = document.getElementById("apellido");
const correoUser = document.getElementById("correo");

//Guardo inf user en obj
const infUser = {};

formUser.onsubmit = (e) => {
    e.preventDefault();
    infUser.nombre = nombreUser.value;
    infUser.apellido = apellidoUser.value;
    infUser.correo = correoUser.value;
    console.log(infUser);
    localStorage.setItem("infUser", JSON.stringify(infUser));
}

const infUserStorage = JSON.parse(localStorage.getItem("infUser"));
console.log(infUserStorage);
if (infUserStorage.nombre != "" || infUserStorage !== "") {
    titulo.innerText = "Hola " + infUserStorage.nombre + " puedes dejar tus datos y pronto te contactaremos! ;)"
}
