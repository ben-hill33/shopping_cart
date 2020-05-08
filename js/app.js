'use strict';

// Cart constructor.
var Cart = function (items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

// We need to add an event listener that's triggered by add to cart button to store the objects selected from drop down
// items, quantity, submit

function handleSubmit(event){
  event.preventDefault();
  var product = event.target.items.value;
  var howMuch = event.target.quantity.value;
  console.log(product, howMuch);
}

Cart.prototype.addItem = function (product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function (item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function (product, quantity) {
  this.product = product;
  this.quantity = quantity;

};

// Product contructor.
var Product = function (filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();


// var catalog = document.getElementById('catalog');
// dropDown.src = Product.allProducts[0].filePath;

var dropDown = document.getElementById('items');
function renderDropDown() {
  for (var i = 0; i < Product.allProducts.length; i++) {
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    dropDown.appendChild(option);

  }
}
renderDropDown();

var button = document.getElementById('catalog');
button.addEventListener('submit', handleSubmit);

