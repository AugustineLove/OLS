document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    const cartNotification = document.querySelector('.cart-notification');
    const deliveryLocationInput = document.getElementById('delivery-location');
    const checkoutBtn = document.querySelector('.checkout-btn');

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const dishElement = button.parentElement;
            const dishName = dishElement.getAttribute('data-name');
            const dishPrice = parseFloat(dishElement.getAttribute('data-price'));
            

            const cartItem = cart.find(item => item.name === dishName);
            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ name: dishName, price: dishPrice, quantity: 1,});
            }

            updateCart();
            showCartNotification();
        });
    });

    document.querySelectorAll('.dish img').forEach(img => {
        img.addEventListener('click', () => {
            const dishName = img.parentElement.getAttribute('data-name');
            window.location.href = `food.html?name=${encodeURIComponent(dishName)}`;
        });
    });

    checkoutBtn.addEventListener('click', () => {
        const deliveryLocation = deliveryLocationInput.value.trim();
        if (!deliveryLocation) {
            alert('Please enter your delivery location before checking out.');
            return;
        }

        // Proceed with the checkout process
        alert(`Order placed! Delivery location: ${deliveryLocation}`);
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;

            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} x${item.quantity} 
                <span>GH₵${(item.price * item.quantity).toFixed(2)}</span>
                <div class="cart-item-controls">
                    <button class="decrease-quantity" data-name="${item.name}">-</button>
                    <button class="increase-quantity" data-name="${item.name}">+</button>
                </div>
               
            `;
            cartItemsContainer.appendChild(li);

            li.querySelector('.decrease-quantity').addEventListener('click', () => {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart.splice(cart.indexOf(item), 1);
                }
                updateCart();
            });

            li.querySelector('.increase-quantity').addEventListener('click', () => {
                item.quantity += 1;
                updateCart();
            });
        });

        totalAmount.innerText = `GH₵${total.toFixed(2)}`;
        cartNotification.innerText = cart.length;
    }

    function showCartNotification() {
        cartNotification.classList.add('show');
        setTimeout(() => {
            cartNotification.classList.remove('show');
        }, 2000);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Check and apply the saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.removeItem('theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Existing code...
});

document.addEventListener('DOMContentLoaded', () => {
    // Existing code...

    checkoutBtn.addEventListener('click', () => {
        const deliveryLocation = deliveryLocationInput.value.trim();
        if (!deliveryLocation) {
            alert('Please enter your delivery location before checking out.');
            return;
        }

        const paymentMethod = document.getElementById('payment-method').value;
        alert(`Order placed! Delivery location: ${deliveryLocation}\nPayment Method: ${paymentMethod}`);
    });

    // Existing code...
});

