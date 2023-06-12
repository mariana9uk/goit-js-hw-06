const listEl = document.querySelectorAll('.item');
const categoriesAmount = listEl.length;
console.log(`Number of categories: ${categoriesAmount}`);

listEl.forEach(function (object, index) {
    console.log(object.children[0].textContent);

    console.log(`Elements: ${object.children[1].children.length}`)
   });