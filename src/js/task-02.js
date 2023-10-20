const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsById = document.getElementById('ingredients');

ingredients.map(item => {
    const addListEl = document.createElement('li')
    addListEl.textContent = item
    addListEl.classList.add('item')
    ingredientsById.append(addListEl)
    console.log(addListEl)
})


