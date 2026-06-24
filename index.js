import { menuArray } from "./data.js";

const listEl = document.querySelector('.list');

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
     <button>+</button>
     </div>
     `

     render(menuObject)
 }
}

function render(menuItem) {
    const listItem = document.createElement('li')
    listItem.classList.add('list-item')
    listItem.innerHTML = menuItem
    listEl.appendChild(listItem)
}

dataArray();
