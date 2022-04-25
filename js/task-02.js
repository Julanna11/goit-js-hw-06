const ingredients = [
'Potatoes', 
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const el = ingredients.map(ingredients => {
const ingredientsEl = document.createElement('li');
ingredientsEl.textContent = ingredients;
ingredientsEl.classList.add('item');

  return ingredientsEl;
})

const ingredientsListIn = document.querySelector('ul');
ingredientsListIn.append(...el);



//========function=========

// const makeIngredients = ingredient => {
//   return ingredient.map(ingredients => {
//     const ingredientsEl = document.createElement('li');
//     ingredientsEl.textContent = ingredients;
//     ingredientsEl.classList.add('item');

//     return ingredientsEl;
//   });
// };

// const ingredientsList = document.querySelector('ul');
// const elements = makeIngredients(ingredients);
// ingredientsList.append(...elements);