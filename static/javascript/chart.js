const cartTable = document.getElementById("cartTable");
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
  cartTable.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    
    const parts = item.split(" - ₱");
    const [name, qtyPart] = parts[0].split(" x ");
    const price = parseFloat(parts[1]) || 0;
    const qty = parseInt(qtyPart) || 0;
    const subtotal = price * qty;

    total += subtotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${name}</td>
      <td>${qty}</td>
      <td>₱${subtotal.toFixed(2)}</td>
      <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
    `;
    cartTable.appendChild(tr);
  });

  
  if (cart.length > 0) {
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td colspan="2" style="text-align:right; font-weight:bold;">Total:</td>
      <td colspan="2" style="font-weight:bold;">₱${total.toFixed(2)}</td>
    `;
    cartTable.appendChild(totalRow);
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  renderCart();
}

renderCart();
