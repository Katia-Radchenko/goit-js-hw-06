const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]')
const valueById = document.getElementById('value')

decrement.addEventListener('click', decrementHandler)
increment.addEventListener('click', incrementHandler)
let counterValue = 0

function decrementHandler() {
    counterValue -= 1
    valueById.textContent = counterValue
}

function incrementHandler() {
    counterValue += 1
    valueById.textContent = counterValue
}