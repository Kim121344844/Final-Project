document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.food-item');
  const cartModal = document.getElementById('cartModal');
  const cartItemsList = document.getElementById('cartItems');
  const closeModal = document.getElementById('closeModal');
  const goToChart = document.getElementById('goToChart');

  let cart = [];

  items.forEach(item => {
    const addBtn = item.querySelector('.add-to-cart');
    const name = item.querySelector('p').textContent;
    const quantitySpan = item.querySelector('.quantity');

    addBtn.addEventListener('click', () => {
      const quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        fetch('/add_to_cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, quantity })
        })
        .then(res => res.json())
        .then(() => {
          
          const existing = cart.find(i => i.name === name);
          if (existing) {
            existing.quantity += quantity;
          } else {
            cart.push({ name, quantity });
          }

          updateCartDisplay();
          openModal();
        })
        .catch(() => alert('Error connecting to server.'));
      } else {
        alert('Please select a quantity before adding.');
      }
    });
  });

  function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
      cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    } else {
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.quantity}`;
        cartItemsList.appendChild(li);
      });
    }
  }

  function openModal() {
    cartModal.style.display = 'flex';
  }

  closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  goToChart.addEventListener('click', () => {
    window.location.href = '/chart';
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
});
