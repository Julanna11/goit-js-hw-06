const inputEl = document.querySelector("#validation-input");

inputEl.onblur = () => {
  console.log(inputEl.value.length);
  if (inputEl.getAttribute('data-length') > inputEl.value.length) { 
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
};