// Fetch breakfast data
// Fetch breakfast data
fetch("http://localhost:3000/breakfast")
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      displayBreakfast(data);
    } else {
      console.error('Data is empty or not an array.');
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display breakfast items
function displayBreakfast(breakfasts) {
  const breakfastContainer = document.getElementById('breakfast');

  breakfasts.forEach((breakfast) => {
    const breakfastElement = document.createElement('div');
    breakfastElement.classList.add('box');

    breakfastElement.innerHTML = `
      <a href="#" class="fa fa-heart"></a>
      <a href="#" class="fa fa-eye"></a>
      <img src="${breakfast.image}" alt="${breakfast.name}">
      <h3>${breakfast.name}</h3>
      <div class="stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
      </div>
      <span>$${breakfast.price}</span>
      <a href="#" class="btn">Add to cart</a>
    `;
    breakfastContainer.appendChild(breakfastElement);
  });
}
// Fetch dinner data
fetch("http://localhost:3000/dinner")
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      displayDinner(data);
    } else {
      console.error('Data is empty or not an array.');
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display dinner items
function displayDinner(dinners) {
  const dinnerContainer = document.getElementById('dinner');

  dinners.forEach((dinner) => {
    const dinnerElement = document.createElement('div');
    dinnerElement.classList.add('box');

    dinnerElement.innerHTML = `
      <a href="#" class="fa fa-heart"></a>
      <a href="#" class="fa fa-eye"></a>
      <img src="${dinner.image}" alt="${dinner.name}">
      <h3>${dinner.name}</h3>
      <div class="stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
      </div>
      <span>$${dinner.price}</span>
      <a href="#" class="btn">Add to cart</a>
    `;
    dinnerContainer.appendChild(dinnerElement);
  });
}
// Fetch quickbites data
fetch("http://localhost:3000/quickbite")
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    if (Array.isArray(data) && data.length > 0) {
      displayQuickbite(data);
    } else {
      console.error('Data is empty or not an array.');
    }
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Function to display quickbites items
function displayQuickbite(quickbites) {
  const quickbiteContainer = document.getElementById('quickbite');

  quickbites.forEach((quickbite) => {
    const quickbiteElement = document.createElement('div');
    quickbiteElement.classList.add('box');

    quickbiteElement.innerHTML = `
      <a href="#" class="fa fa-heart"></a>
      <a href="#" class="fa fa-eye"></a>
      <img src="${quickbite.image}" alt="${quickbite.name}">
      <h3>${quickbite.name}</h3>
      <div class="stars">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star-half-o"></i>
      </div>
      <span>$${quickbite.price}</span>
      <a href="#" class="btn">Add to cart</a>
    `;
    quickbiteContainer.appendChild(quickbiteElement);
  });
}

function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

// Function to handle form submission
document.getElementById("order-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // You can add logic here to handle the form submission, e.g., sending the data to a server or processing it locally

  // Show a confirmation message
  alert("Order placed successfully!");

  // Redirect to the homepage
  window.location.href = "";
});

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const header = document.querySelector('header');

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '3s';
    header.style.background = 'white';
    header.style.color = 'black';
    header.style.transition = '3s';
  } else {
    body.style.background = 'black';
    body.style.color = 'white';
    body.style.transition = '3s';
    header.style.background = 'black';
    header.style.color = 'white';
    header.style.transition = '3s';
  }
})