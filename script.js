const products = [
  { name: "Product 1", price: 10, img: "https://via.placeholder.com/200" },
  { name: "Product 2", price: 15, img: "https://via.placeholder.com/200" },
  { name: "Product 3", price: 20, img: "https://via.placeholder.com/200" }
];

const container = document.getElementById('products');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');

let cart = [];

products.forEach((p, index) => {
  container.innerHTML += `
    <div class="product">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <button class="btn" onclick="addToCart(${index})">Add to Cart</button>
    </div>
  `;
});

function addToCart(index) {
  cart.push(products[index]);
  cartCount.textContent = cart.length;
}

function showCart() {
  cartItems.innerHTML = cart.map((item, i) => `
    <p>${item.name} - $${item.price}</p>
  `).join('');
  cartModal.style.display = 'block';
}

function closeCart() {
  cartModal.style.display = 'none';
}
const products = [
  { name: "Samsung Galaxy M35", price: 55000, img: "https://via.placeholder.com/200?text=M35" },
  { name: "Xiaomi Redmi Note 13", price: 45000, img: "https://via.placeholder.com/200?text=Redmi" },
  { name: "Realme GT Neo", price: 75000, img: "https://via.placeholder.com/200?text=Realme" }
];
