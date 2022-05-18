//  Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul.ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients'); //озвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов.
//Создаст отдельный элемент <li>:
const markup = (item) => {
  const element = document.createElement('li');
  //Добавит название ингредиента как его текстовое содержимое:
  element.textContent = item;
  return element;
}
//Добавит элементу класс item:
const createMarkup = ingredients.map(markup); //вызвает переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции.
//вставит все <li> за одну операцию в список ul.ingredients:
ingredientsList.append(...createMarkup); // (... сбор всех єл.функции)
console.log(ingredientsList);