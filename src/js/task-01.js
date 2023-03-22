const categoriesRef = document.querySelector('ul#categories');
const itemRef = categoriesRef.querySelectorAll('.item')
console.log(`Number of categories: ${itemRef.length}`)

itemRef.forEach(item => {
    const titleRef = item.querySelector('h2').textContent;
    const elementsRef = item.querySelectorAll('li').length

    console.log(`Category: ${titleRef}`);
    console.log(`Elements: ${elementsRef}`);
})

