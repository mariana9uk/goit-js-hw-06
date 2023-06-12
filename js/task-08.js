const formEl = document.querySelector(".login-form");
const labelEmailEl = formEl.firstElementChild;
const inputEmailEl = labelEmailEl.lastElementChild;
const labelPassEl = labelEmailEl.nextElementSibling;
const inputPassEl = labelPassEl.lastElementChild;
const submitButtonEl = formEl.lastElementChild;
console.log(formEl);
console.log(inputEmailEl);
console.log(inputPassEl);
console.log(submitButtonEl);

formEl.addEventListener("submit", submitData);
function submitData(e) {
     e.preventDefault();
if (inputEmailEl.value===""||inputPassEl.value==="") {
    alert("Заповніть всі поля!");
} else {
    const loginData = {};
   loginData.emailEl = inputEmailEl.value;
    loginData.passEl = inputPassEl.value;
    console.log(loginData);
}

    formEl.reset();   
}