import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js';

const appSettings = {
    databaseURL: "https://playground-65f30-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shopping-list");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", () => {
    let inputValue = inputFieldEl.value;
    push(shoppingListInDB, inputValue);
    
    shoppingListEl.innerHTML += `<li>${inputValue}</li>`;
});