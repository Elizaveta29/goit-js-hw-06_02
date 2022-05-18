//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const validationInput = document.querySelector('#validation-input');
const validNumber = parseInt(validationInput.dataset.length);

const onInput = (event) => {
    const userValue = event.target.value.trim().length;
    validationInput.classList.add('invalid');

    if (userValue === validNumber) {
        validationInput.classList.replace('invalid', 'valid');
        return;
    }

    validationInput.classList.replace('valid', 'invalid');
    }
validationInput.addEventListener('blur', onInput)
