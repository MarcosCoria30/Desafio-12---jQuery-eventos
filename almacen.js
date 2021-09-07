


const titulo = document.getElementById('titulo')
const contenedor = document.getElementById('contenedor')
const tableBody = document.getElementById('tabla-contenedor')



lista.forEach( (prod) => {

    const div = document.createElement('div')
    div.className = "card"
    div.style = "width: 18rem"

    div.innerHTML = `
            <img src="https://via.placeholder.com/200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">Precio: $${prod.precio}</p>
                <button onclick="agregarAlCarrito(${prod.id})" class="btn btn-light"> Agregar al carrito <i class="fas fa-cart-plus"></i></button>
            </div>
    `

    contenedor.appendChild(div)

})

const carrito = []


function agregarAlCarrito(prodId) {

    // Storage Parseado

	let carritoParseado = JSON.stringify(carrito);
	localStorage.setItem('carrito', carritoParseado);
    //  

    let producto = lista.find( (el) => el.id === prodId )
    carrito.push( producto )
 
    mostrarCompra()
    console.log(carrito.precio)

    document.getElementById("total").innerHTML = carrito.reduce(getSum, 0);

    function getSum(total, num) {
        return total + Math.round(num);
     }
    }

const mostrarCompra = () => {

    tableBody.innerHTML = ""

    carrito.forEach( (prod) => {
        const tr = document.createElement('tr')
        tr.className = "table table-dark table-striped"
        tr.innerHTML = `
            
            <td>${prod.nombre}</td>
            <td>x${prod.cantidad}</td>
            <td>$${prod.precio}</td>
            
        `    
        tableBody.appendChild(tr)
    })
    
}






