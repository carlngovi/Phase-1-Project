//CHECKOUT SECTION
function addToCart(item) {
    // Create a new list item
    let listItem = document.createElement("h3");
    listItem.textContent = item;

    // Add the list item to the cart
    document.getElementById("cart-items").appendChild(listItem);
}
// Function to open the popup
function openPopup() {
    document.getElementById("myPopup").style.display = "block";
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
  }
   