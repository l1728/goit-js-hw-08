const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
    // Отримуємо введений текст та очищуємо його від пробілів по краях
    const inputValue = event.target.value.trim();

    // Встановлюємо значення в спан, перевіряючи, чи введений текст не є порожнім
    // або не містить лише пробіли
    nameOutput.textContent = inputValue ? inputValue : 'Anonymous';
});
