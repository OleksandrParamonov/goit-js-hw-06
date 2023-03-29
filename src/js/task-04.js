
const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnInkrementRef = document.querySelector('[data-action="increment"');
const valueRef = document.querySelector('#value')
//console.log(value);
let counterValue = 0;


function onDecrementOne(event)
{
    counterValue-=1;
    valueRef.textContent = counterValue;
};
    
function onIncrementOne(event) {
    counterValue+=1;
    valueRef.textContent = counterValue
};

btnDecrementRef.addEventListener('click',onDecrementOne );
btnInkrementRef.addEventListener('click',onIncrementOne );




