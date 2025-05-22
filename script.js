document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
    
    // Инициализация анимации
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
    });
    
    // Обработка кликов на карточки
    options.forEach(option => {
        option.addEventListener('click', function() {
            // Анимация при клике
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Действие при клике
            if (this.querySelector('h3').textContent === 'Купить билет') {
                alert('Переход к покупке билетов!');
            } else {
                alert(`Вы выбрали направление: ${this.querySelector('h3').textContent}`);
            }
        });
    });
});
