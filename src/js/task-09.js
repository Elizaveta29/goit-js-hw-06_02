//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const randomColor = document.querySelector('.widget');
const span = document.querySelector('.color');

randomColor.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = getRandomHexColor();

function onButtonClick(event) {
  span.textContent = getRandomHexColor();
  if (!event.target.classList.contains("change-color")) {
    return;
  }
  return (document.body.style.background = color);
}