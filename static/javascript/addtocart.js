function addToCart(itemName, itemQuantity, itemPrice) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  cartItems.push(`${itemName} x ${itemQuantity} - ₱${itemPrice}`);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  alert(`${itemQuantity} x ${itemName} added to cart!`);
}
