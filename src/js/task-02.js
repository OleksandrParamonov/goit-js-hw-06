const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const listRef = document.querySelector('ul#ingredients')



const elements = ingredients.map(ingredient => {
const ingredientsRef = document.createElement('li');
ingredientsRef.textContent = ingredient;
ingredientsRef.classList.add('item') ;

return ingredientsRef
})
console.log(elements)

listRef.append(...elements)
