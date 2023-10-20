const inputById = document.getElementById('name-input')
const nameInput = document.getElementById('name-output')

inputById.addEventListener('input', inputHandler)


function inputHandler(event) {

    if (event.currentTarget.value === '') {
        nameInput.textContent = 'Anonymous'
    } else {
        nameInput.textContent = event.currentTarget.value;
    }
}