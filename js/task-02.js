const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  

// ingredients.forEach(function (ingredient, index) {
// ;
//   const ingrListItem = document.createElement('li');
//   ingrListItem.textContent = ingredient;
//   ingrListItem.classList.toggle("item");
//   const ingrList = document.querySelector("#ingredients")
//   ingrList.prepend(ingrListItem);
//    console.log(ingrList.textContent);
// })
const ingrList = document.querySelector("#ingredients");
ingredients.map((ingradient) => {
  const ingrListItem = document.createElement('li');
  ingrListItem.textContent = ingradient;
  ingrListItem.classList.toggle("item");
  console.log(ingrListItem);
  ingrList.prepend(ingrListItem);
});

