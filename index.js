function addToCart() {
 const productName = "product name";
 const cartItems =
 document.getElementById("cart-item");

  const listItem =
  document.createElement("li");
  listItem.innerText = productName;
  cartItems.appendChild(listItem);

}