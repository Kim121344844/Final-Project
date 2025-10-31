const cartTable = document.getElementById("cartTable");
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCart() {
  cartTable.innerHTML = "";
  cart.forEach((item, index) => {
    const [name, qty] = item.split(" x ");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${name}</td>
      <td>${qty}</td>
      <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
    `;
    cartTable.appendChild(tr);
  });
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  renderCart();
}

renderCart();
