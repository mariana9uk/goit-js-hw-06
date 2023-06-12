const inputElem = document.querySelector('#validation-input');


inputElem.addEventListener('blur', (e) => {
    if (Number(e.currentTarget.value.length) === Number(inputElem.dataset.length)) {
        inputElem.classList.add("valid"),
        inputElem.classList.remove('invalid');

      
    }
    else
        inputElem.classList.add("invalid"),
            inputElem.classList.remove('valid');

});
