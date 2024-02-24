const refs = {
  input: document.querySelector('input#name-input'),
  span: document.querySelector('span#name-output'),
};

refs.input.addEventListener('input', onInputPress);

function onInputPress(event) {

    const input = event.target;

    if (input.value.length === 0 || input.value.trim() === '') {
        refs.span.textContent = 'Anonymous';
    } else {
        refs.span.textContent = input.value.trim();
    }
};