const input = document.getElementById('validation-input')

input.addEventListener('blur', blurHandler)

function blurHandler(event) {
    if (event.currentTarget.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } else {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }

}