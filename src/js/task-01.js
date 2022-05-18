//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const categories = document.querySelectorAll('#categories .item'); //вызываем массив ссылок на элементы с оинаковым селектором

console.log(`Number of categories: ${categories.length}`);

categories.forEach((item) => console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`))