//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
let counterValue = 0;
const increaseByOne = () => {
    valueRef.textContent = counterValue -= 1;
};
const reduceByOne = () => {
    valueRef.textContent = counterValue += 1;
};
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
const btnDecrementRef = document.querySelector(
    'button[data-action="decrement"]'
);
const valueRef = document.querySelector("#value");
const btnIncrementRef = document.querySelector(
    'button[data-action="increment"]'
);
btnDecrementRef.addEventListener("click", increaseByOne);
btnIncrementRef.addEventListener("click", reduceByOne);
//Обновляй интерфейс новым значением переменной counterValue.