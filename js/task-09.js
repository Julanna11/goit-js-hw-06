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
  refs.widget.style.backgroundColor = getRandomHexColor();
  refs.colorText.textContent = getRandomHexColor();
}

refs.btnChangeColor.addEventListener('click', onbtnChangeColor)
