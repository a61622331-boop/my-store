const products = [
  { name: "Samsung Galaxy M35", price: 58000, img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m35-5g.jpg" },
  { name: "Samsung Galaxy A35", price: 62000, img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35-5g.jpg" },
  { name: "Xiaomi Redmi Note 13", price: 43000, img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-4g.jpg" },
  { name: "Xiaomi Redmi Note 13 Pro", price: 58000, img: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-4g.jpg" },
  { name: "Realme GT Neo 5", price: 85000, img: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt-neo5.jpg" },
  { name: "Oppo Reno 11", price: 90000, img: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11.jpg" },
  { name: "Infinix Zero Ultra", price: 60000, img: "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-ultra.jpg" },
  { name: "Huawei Nova 11", price: 95000, img: "https://fdn2.gsmarena.com/vv/bigpic/huawei-nova11.jpg" },
  { name: "Samsung Galaxy S24", price: 165000, img: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24.jpg" },
  { name: "iPhone 15", price: 230000, img: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg" }
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
      <p>${p.price} DA</p>
      <button class="btn" onclick="addToCart(${index})">أضف للسلة</button>
    </div>
  `;
});

function addToCart(index) {
  cart.push(products[index]);
  cartCount.textContent = cart.length;
}

function showCart() {
  cartItems.innerHTML = cart.map(item => `
    <p>${item.name} - ${item.price} DA</p>
  `).join('');
  cartModal.style.display = 'block';
}

function closeCart() {
  cartModal.style.display = 'none';
}
