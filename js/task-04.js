// const counterValue = 0;
const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");
let counterValue = 0;
function addOne () {
 counterValueEl.textContent= counterValue += 1;
};
function reduceOne() {
 
counterValueEl.textContent= counterValue -= 1;
};
incrButton.addEventListener('click', addOne);
decrButton.addEventListener('click', reduceOne);