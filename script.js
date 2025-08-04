// filepath: street-feast/script.js

let cart = [];

// Add item to cart or increase quantity
function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.qty += 1;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    renderCart();
}

// Remove item completely from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}

// Update cart display in the DOM
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.qty} - ${(item.price * item.qty).toFixed(2)}`;
        
        const btn = document.createElement('button');
        btn.textContent = 'Remove';
        btn.onclick = () => removeFromCart(item.name);
        btn.style.marginLeft = '10px';
        li.appendChild(btn);

        cartItems.appendChild(li);
    });

    totalDisplay.textContent = total.toFixed(2);
}

// Scroll to menu section smoothly
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}
