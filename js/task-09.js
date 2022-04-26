const refs = {
  widget: document.querySelector('.widget'),
 btnChangeColor: document.querySelector('.change-color'),
  colorText: document.querySelector('.color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onbtnChangeColor() {
 const color = getRandomHexColor();
  refs.colorText.textContent = color;
  refs.widget.style.backgroundColor = color; 
}

refs.btnChangeColor.addEventListener('click', onbtnChangeColor)
