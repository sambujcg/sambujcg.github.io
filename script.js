let total = 0;

function agregarAlCarrito(nombre, precio) {
    const listaCarrito = document.getElementById('listaCarrito');
    const item = document.createElement('li');
    item.textContent = `${nombre} - $${precio.toFixed(2)}`;
    listaCarrito.appendChild(item);

    total += precio;
    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}