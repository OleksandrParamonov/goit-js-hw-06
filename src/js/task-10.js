function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector('input')
const controlsRef = document.querySelector('#controls');
const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('div#boxes')
console.log(destroyRef);

function createBoxes(amount) {
  amount.forEach(newAmount => {
  let newBox = document.createElement('div');
  newBox.style.width = `30px`;
  newBox.style.height = `30px`;
  const backgroundColor = getRandomHexColor();
  backgroundColor = newBox.style.backgroundColor
createBoxes.push(newAmount)
boxesRef.append(...createBoxes)
console.log(createBoxes)
});
}