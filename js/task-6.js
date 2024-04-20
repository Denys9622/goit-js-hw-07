function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = Number(document.querySelector('input').value);
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  document.querySelector('input').value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); 
  const fragment = document.createDocumentFragment(); 

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    fragment.appendChild(box); 
  }

  boxesContainer.appendChild(fragment); 
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}