const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) =>
{outputEl.textContent=e.currentTarget.value===""?"Anonimus": e.currentTarget.value});
