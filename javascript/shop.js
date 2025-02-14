let cartIcon = document.querySelector('.cartIcon');
let cart = document.querySelector('.shopcart');
let close = document.querySelector('.close');
let cartNum = document.querySelector('.cartnum span');
let cartTotalAmount = document.getElementById('cartTotalAmount');
let cartList = document.querySelector('.cartlist');

// Toggle cart display
cartIcon.addEventListener('click', () => {
    cart.classList.toggle("shopcarte");
});

close.addEventListener('click', () => {
    cart.classList.toggle("shopcarte");
});

// Adding products to the cart
let products = [{
    id: 1,
    name: "tshirt",
    images: "./images/tshirt.png",
    price: 3500
},
{
    id: 2,
    name: "hoodie",
    images: "./images/hoodie.png",
    price: 5000
},
{
    id: 3,
    name: "short",
    images: "./images/short.png",
    price: 2500
},
{
    id: 4,
    name: "bag",
    images: "./images/bag.png",
    price: 4000
},
{
    id: 5,
    name: "fanny pack",
    images: "./images/fanny pack.png",
    price: 3000
},
{
    id: 6,
    name: "cap",
    images: "./images/cap.png",
    price: 1500
},
{
    id: 7,
    name: "coffee mug",
    images: "./images/coffee mug.png",
    price: 1000
},
{
    id: 8,
    name: "table calender",
    images: "./images/table calender.png",
    price: 500
},
{
    id: 9,
    name: "notebook",
    images: "./images/notebook.png",
    price: 750
},
{
    id: 10,
    name: "first aid box",
    images: "./images/Firstaidbox.png",
    price: 10000
}
];

// Initialize cart items
let cartItems = [];

// Function to render cart items
function renderCart() {
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        let cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.innerHTML = `
            <div class="img">
                <img src="${item.images}" alt="${item.name}">
            </div>
            <div class="name">${item.name}</div>
            <div class="price">LKR ${item.price}</div>
            <div class="quantity">
                <span class="minus" onclick="decreaseQuantity(${item.id})">-</span>
                <span>${item.quantity}</span>
                <span class="add" onclick="increaseQuantity(${item.id})">+</span>
            </div>
        `;
        cartList.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });
    cartTotalAmount.textContent = totalPrice;
}

// Function to add item to cart
function addToCart(id) {
    let product = products.find(item => item.id === id);
    let cartItem = cartItems.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    cartNum.textContent = cartItems.length;
    renderCart();
}

// Function to remove item from cart
function removeFromCart(id) {
    let index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
        cartNum.textContent = cartItems.length;
        renderCart();
    }
}

// Function to decrease quantity
function decreaseQuantity(id) {
    let item = cartItems.find(item => item.id === id);
    if (item.quantity > 1) {
        item.quantity--;
        renderCart();
    } else if (item.quantity == 1) {
        removeFromCart(id);
        renderCart();
    }
}

// Function to increase quantity
function increaseQuantity(id) {
    let item = cartItems.find(item => item.id === id);
    item.quantity++;
    renderCart();
}

// Add event listeners to "Add to cart" buttons
document.querySelectorAll('.product button').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(index + 1);
    });
});
