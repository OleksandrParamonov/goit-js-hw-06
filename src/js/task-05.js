const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


inputRef.addEventListener('input',onInputChange);

function onInputChange (event) {
    if (spanRef.textContent = event.currentTarget.value) {
        return  event.currentTarget.value
    } else {
        spanRef.textContent = "Anonymous"
    }
    

};

