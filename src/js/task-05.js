const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


inputRef.addEventListener('input',onInputChange);

function onInputChange (event) {
    spanRef.textContent = event.currentTarget.value ?event.currentTarget.value: spanRef.textContent = "Anonymous";
    
};

