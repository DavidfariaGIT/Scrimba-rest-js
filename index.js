import { menuArray } from "./data.js";

const listEl = document.querySelector(".list");
const cartContainer = document.querySelector(".cart-container");
const cartItemName = document.getElementById('cart-item-name');
const cartPrice = document.getElementById('cart-price');
const cart = document.querySelector('.cart');
const totalPriceEl = document.getElementById('total-price');

function dataArray() {
  for (const { name, ingredients, id, price, emoji } of menuArray) {
    const menuObject = `
     <p class="menu-emoji">${emoji}</p>
     <div class="item-info">
     <h2>${name}</h2>
     <p class="indgredients">${ingredients}</p>
     <p class="price">$${price}</p>
     </div>
     <div id="info-button">
     <button id="add-button" class="add-button">+</button>
     </div>
     `;

    render(menuObject, id);
  }
}

const cartArray = [];

listEl.addEventListener("click", (e) => {
  const clickedItem = e.target.closest("li").id;
  let matchingObj = menuArray.find(
    (menuItem) => menuItem.id === Number(clickedItem),
  );

  cartContainer.style.display = "block";
  cartArray.push(matchingObj);
  
  const newItemObj = `
      <p id="cart-price">${matchingObj.name}</p>
      <button class="remove-button">remove</button>
       <p class="cart-price">${matchingObj.price}</p>
  `
renderCartItem(newItemObj, matchingObj.id)

const totalPrice = cartArray.reduce((acc, el) => {
    return acc + el.price 
}, 0)

renderPrice(totalPrice);
});

window.addEventListener(('click'), (e) => {
  if (e.target.className === 'remove-button') {
    const cartRemoveId = e.target.parentElement.id;
    const matchingCartItem = document.getElementById(cartRemoveId);
    matchingCartItem.style.display = "none";
  }
})

function render(menuItem, id) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.id = id;
  listItem.innerHTML = menuItem;
  listEl.appendChild(listItem);
}

function renderCartItem(cartItem, id) {
  const newCartItem = document.createElement('div')
  newCartItem.classList.add('cart-item');
  newCartItem.id = `cart-${id}`
  newCartItem.innerHTML = cartItem
  cart.appendChild(newCartItem)
}

function renderPrice(totalPrice) {
  totalPriceEl.textContent = totalPrice
}

dataArray();
