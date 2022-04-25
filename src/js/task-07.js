const sizeControl = document.querySelector('input');
const text = document.querySelector('span');

sizeControl.addEventListener("input", (event) => {
   text.style.fontSize = sizeControl.value + "px";
});
