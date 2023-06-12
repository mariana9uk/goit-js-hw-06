function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.body;
const colorChangeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
console.log(bodyEl);
console.log(colorChangeBtn);
console.log(colorSpan);

colorChangeBtn.addEventListener("click", changeColor);
function changeColor() {
  let changedColor = getRandomHexColor();
  bodyEl.style.backgroundColor = changedColor;
  colorSpan.textContent = changedColor;
}