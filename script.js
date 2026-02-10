// Menú móvil
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');

  const icon = mobileMenuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

        

const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const message = document.getElementById("message").value;

  const texto = `
🧱 Pedido desde la web

👤 Nombre: ${name}
📞 Teléfono: ${phone}
🔧 Producto: ${product}
📦 Cantidad: ${quantity}
📝 Nota: ${message || "Ninguna"}
  `;

  const whatsappURL = `https://wa.me/18295731646?text=${encodeURIComponent(texto)}`;

  window.open(whatsappURL, "_blank");

  form.reset();
  statusMessage.style.display = "block";

  setTimeout(() => {
    statusMessage.style.display = "none";
  }, 5000);
});
