// Arreglos de los productos

const productos = [
    {
        nombre: "Computadora",
        precio: 1000,
        descripcion: "Computadora para uso del hogar y profesional"
    },
    {
        nombre: "Televisor",
        precio: 1300,
        descripcion: "Televisor de 65 pulgadas marca LG"
    },
    {
        nombre: "Audífonos",
        precio: 30,
        descripcion: "Audífonos inalámbricos color morados"
    }
];

// Referencia al ul

const lista = document.getElementById("listaProductos");

// función para renderizar los prodcutos 

function renderizarProductos() {
    lista.innerHTML = "";   // sirve para limpiar la lista

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio} | ${producto.descripcion}`;
        lista.appendChild(li);
    });
}


// renderizar automáticamnnete al cargar la página 
renderizarProductos();


// botón para agregar un nuevo producto

const nombre = document.getElementById("nombreProducto");
const precio = document.getElementById("precioProducto");
const descripcion = document.getElementById("descripcionProducto");
document.getElementById("agrProducto").addEventListener("click", () => {
    productos.push({
        nombre: nombre.value,
        precio: precio.value,
        descripcion: descripcion.value
    });

    renderizarProductos();

    nombre.value = "";
    precio.value = "";
    descripcion.value = "";
});




