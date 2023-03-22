const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listRef = document.querySelector('ul#ingredients')

const elements = ingredients.map(ingridient => {

  const ingredientsRef = document.createElement('li');
ingredientsRef.textContent = ingridient
ingredientsRef.classList = 'item';

console.log(ingredientsRef)
})

listRef.appendChild(elements)
