const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', onFormSbmt);

function onFormSbmt(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === '' || password.trim() === '') {
        return alert('All form fields must be filled in');
    };

    const objForConsole = {
        email: email.trim(),
        password: password.trim(),
    }

    console.log(objForConsole);

    form.reset()
}