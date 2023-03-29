const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur (event) {
    const valueLength = event.currentTarget.value.length;
if (valueLength === 6) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
} else {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid')

}

}