const categoriesItem = document.querySelectorAll("ul#categories > li.item");
console.log(`Number of categories : ${categoriesItem.length} `)

categoriesItem.forEach(item => {
    console.log(`Categories : ${item.querySelector('h2').textContent}`);
    console.log(`Elements : ${item.querySelectorAll('li').length}`);

})