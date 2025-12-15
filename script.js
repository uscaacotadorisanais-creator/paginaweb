function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

let carrito = [];
let total = 0;

function toggleCarrito() {
  const carritoEl = document.getElementById('carrito');
  carritoEl.style.display =
    carritoEl.style.display === 'block' ? 'none' : 'block';
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito-items');
  lista.innerHTML = '';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
    lista.appendChild(li);
  });

  document.getElementById('carrito-total').textContent = total.toFixed(2);
  document.getElementById('carrito-contador').textContent = carrito.length;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}
function comprarPorWhatsApp() {
  if (carrito.length === 0) {
    alert("🛒 Tu carrito está vacío");
    return;
  }

  let mensaje = "🛍️ *Pedido Elegancia & Moda*%0A%0A";

  carrito.forEach(item => {
    mensaje += `• ${item.nombre} - S/ ${item.precio.toFixed(2)}%0A`;
  });

  mensaje += `%0A💰 *Total: S/ ${total.toFixed(2)}*`;

  const numero = "51995820986"; 
  const url = `https://wa.me/${numero}?text=${mensaje}`;

  window.open(url, "_blank");
}
