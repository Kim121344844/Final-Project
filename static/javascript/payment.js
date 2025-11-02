document.addEventListener("DOMContentLoaded", function () {
  const placeOrderBtn = document.getElementById("placeOrderBtn");

  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", function () {
      const cartTable = document.getElementById("cartTable");
      const rowCount = cartTable ? cartTable.rows.length : 0;

      if (rowCount === 0) {
        alert("Your cart is empty! Please add items before placing an order.");
      } else {
        const confirmOrder = confirm("Proceed to payment?");
        if (confirmOrder) {
          window.location.href = "/payment"; 
        }
      }
    });
  }
});
