function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector('input');
const createRef = document.querySelector('[data-create]');
const destroyRef = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('div#boxes');

// Додаємо слухача події на кнопку Створити
createRef.addEventListener('click', createBoxes);

// Додаємо слухача події на кнопку Очистити
destroyRef.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(inputRef.value)
  for (let i = 0; i < amount; i+=1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(newBox);
  }
  
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
