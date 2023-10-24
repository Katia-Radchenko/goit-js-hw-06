const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsById = document.getElementById('ingredients');

const ingredientsEl = ingredients.map(item => {
    const addListEl = document.createElement('li')
    addListEl.textContent = item
    addListEl.classList.add('item')
    console.log(addListEl)
    return addListEl
})
ingredientsById.append(...ingredientsEl)


