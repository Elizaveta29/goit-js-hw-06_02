//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', enterText);
function enterText(event) {
    const value = event.target.value.trim();

    if (!value) {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = value;
    }
}