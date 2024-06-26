
document.addEventListener('DOMContentLoaded', () => {
    // Найти элементы на странице
    const coin = document.getElementById('coin');
    const scoreDisplay = document.getElementById('score');

    // Инициализировать счёт
    let score = 0;

    // Функция для обновления счёта
    function updateScore() {
        score += 1;
        scoreDisplay.textContent = 'Счет: ' + score;
    }

    // Добавить обработчик событий для кликов на изображение
    coin.addEventListener('click', updateScore);
});