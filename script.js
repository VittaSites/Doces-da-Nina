// Faz aparecer suave os produtos ao rolar
const produtos = document.querySelectorAll('.produto');

function mostrarProdutos() {
  produtos.forEach((produto) => {
    const top = produto.getBoundingClientRect().top;
    const limite = window.innerHeight - 100;

    if (top < limite) {
      produto.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarProdutos);
window.addEventListener('load', mostrarProdutos);

// -----------------
// Efeito de entrada nas promoções
// -----------------
document.addEventListener("DOMContentLoaded", () => {
  const promos = document.querySelectorAll(".promo-item");
  promos.forEach((promo, i) => {
    setTimeout(() => {
      promo.style.opacity = "1";
      promo.style.transform = "translateY(0)";
    }, i * 200);
  });
});
