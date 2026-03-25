/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [1,2,3,4];
let meat_titles = ["Beeftips","Brisket","Ribeye","Steak"];

let seafood_images = ["clams.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [5,6,7,8,9,10];
let seafood_titles = ["Clams","Lobster","Scallops","Shrimp","Tuna"];

let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [11,12,13];
let dessert_titles = ["Flan","Passionberry","Oreocup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;
  

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let x = 0; x < meat_images.length; x++){
    build += `<div class = "card">
                <h2>${meat_titles[x]}</h2>
                <img src = "images/${meat_images[x]}">
                <p>$${meat_prices[x]}</p>
              </div>`;
  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  let build1 = ``;
  for(let x = 0; x < seafood_images.length; x++){
    build1 += `<div class = "card">
                <h2>${seafood_titles[x]}</h2>
                <img src = "images/${seafood_images[x]}">
                <p>$${seafood_prices[x]}</p>
              </div>`;
  }
  s.innerHTML = build1;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  let build2 = ``;
  for(let x = 0; x < dessert_images.length; x++){
    build2 += `<div class = "card">
                <h2>${dessert_titles[x]}</h2>
                <img src = "images/${dessert_images[x]}">
                <p>$${dessert_prices[x]}</p>
              </div>`;
  }
  d.innerHTML = build2;
}
