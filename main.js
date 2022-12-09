const divProd = document.querySelector(`#divProd`);

const buscarProd = async () => {
  const prodFetch = await fetch(`productos.json`);
  const prodJson = await prodFetch.json();

  prodJson.forEach(prod => {
    divProd.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${prod.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5>${prod.nombre}</h5>
            <p class="card-text">${prod.precio}</p>
            <button id=${id} class"btn btn-primary">Agregar</button>
        </div>
    </div>
    `;
  });
  
  
}
