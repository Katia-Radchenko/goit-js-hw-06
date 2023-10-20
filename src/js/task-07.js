const input = document.getElementById('font-size-control')
const spanText = document.getElementById('text')

input.addEventListener('input', inputTextHandler)

function inputTextHandler(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`
}