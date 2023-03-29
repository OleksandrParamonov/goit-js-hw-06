
const inputRef = document.querySelector('#font-size-control');
const abracadabraRef = document.querySelector('#text');
console.log(abracadabraRef);
console.log(inputRef);

inputRef.addEventListener(`input`, onAbracadabraFontsize)

function onAbracadabraFontsize(event){
   const size = event.currentTarget.value;
   abracadabraRef.style.fontSize = `${size}px`
}
    