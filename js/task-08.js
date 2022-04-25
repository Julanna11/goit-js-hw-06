const form = document.querySelector(".login-form");
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
 const {
    elements: { email, password }
  } = event.currentTarget;

 if (email.value === "" || password.value === "") {
   alert("Fill all the fields");
  }

console.dir(event.currentTarget.elements);
    
console.log(`email: ${email.value},Password: ${password.value}`);
  event.currentTarget.reset();
}
