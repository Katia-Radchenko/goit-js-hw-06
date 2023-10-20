const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault();
    const formTarget = event.target;
    const infoAboutUser = {
        email: formTarget.elements.email.value,
        password: formTarget.elements.password.value,
    }

    if (infoAboutUser.email === "" || infoAboutUser.password === "") {
        return alert("Bсі поля повинні бути заповнені!");
    }

    console.log(infoAboutUser)
    formTarget.reset();
}
