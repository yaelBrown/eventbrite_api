'use strict';

// Key would normally be stored in a key.js file and added to .gitignore
const key = ""; 

let data;
let musicData;
let app = document.getElementById("app");

// Prints items to page
let printToPage = (str) => app.innerHTML = str;

// Fetches Categories
let fetchCategories = async () => {
  await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${key}`)
    .then(res => res.json())
    .then(json => data = json)
  return data;
};

// create html string of catories data
let categoriesHTML = () => {
  let html = "";
  data.categories.forEach(e => {
    html += `${e.name} <br>`;
  });
  app.innerHTML = "";
  app.innerHTML = html;
}


// Event listener for categories button
let categoriesBtn = document.getElementById("categories");

categoriesBtn.addEventListener("click", () => {
  categoriesHTML();
  console.log("Categories was clicked");
});


// Fetch music events
let fetchMusicEvents = async () => {
  await fetch(`https://www.eventbriteapi.com/v3/categories/103/?token=${key}`)
  .then(res => res.json())
  .then(json => musicData = json);
  return musicData;
}

fetchMusicEvents();

// Convert music data to html
let musicDataHTML = () => {
  let html = "";
  musicData.subcategories.forEach(e => {
    html += `${e.name} <br>`;
  });
  app.innerHTML = "";
  app.innerHTML = html;
};

// Event listener for search button stuff
let searchBtn = document.getElementById("search");

searchBtn.addEventListener("click", () => {
  musicDataHTML();
  console.log("Search button was pressed");
})




fetchCategories();

printToPage();

app.innerHTML = "";
