document.addEventListener('DOMContentLoaded', function() {
    const telegramInput = document.getElementById('telegram');
    const submitButton = document.getElementById('submit-button');
console.log(submitButton);
    // Устанавливаем начальное значение для поля Telegram
    telegramInput.value = 'https://t.me/';

    // Обработчик для кнопки "Связаться со мной"
    submitButton.addEventListener('click', function() {
        // Обновляем страницу
        location.reload();
    });

    // Обработчик для поля Telegram, чтобы пользователь мог ввести только ID
    telegramInput.addEventListener('input', function() {
        const baseUrl = 'https://t.me/';
        if (!telegramInput.value.startsWith(baseUrl)) {
            telegramInput.value = baseUrl;
        }
    });

    // Обработчик для поля Telegram, чтобы запретить удаление базовой части ссылки
    telegramInput.addEventListener('keydown', function(event) {
        const baseUrl = 'https://t.me/';
        if (event.key === 'Backspace' && telegramInput.value.length <= baseUrl.length) {
            event.preventDefault();
        }
    });
});