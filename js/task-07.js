const sizeControl = document.querySelector('input');
const text = document.querySelector('span');
text.style.fontSize = sizeControl.value + "px";

sizeControl.addEventListener("input", (event) => {
   text.style.fontSize = sizeControl.value + "px";
});
