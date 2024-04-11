function addToCart(item) {
    // Create a new list item
    let listItem = document.createElement("li");
    listItem.textContent = item;

    // Add the list item to the cart
    document.getElementById("cart-items").appendChild(listItem);
}
