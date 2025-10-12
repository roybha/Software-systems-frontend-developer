document.addEventListener('DOMContentLoaded', () => {

    // 4 Завдання
    const detailField = document.getElementById('details'); // <textarea id="details">
    const wrapper = document.getElementById('details-wrapper'); // <p id="details-wrapper">

    if (detailField && wrapper) {
        // Створення елемента підказки
        const tooltip = document.createElement('div');
        tooltip.id = 'detail-tooltip';
        tooltip.textContent = 'Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка.';

        // Додаємо початковий клас прихованого стану
        tooltip.classList.add('tooltip-hidden');

        wrapper.appendChild(tooltip);

        // Обробник наведення
        detailField.addEventListener('mouseenter', () => {
            // А. Динамічна зміна стилів поля
            detailField.classList.add('details-active');

            // Б. Показ підказки
            tooltip.classList.remove('tooltip-hidden');
            tooltip.classList.add('tooltip-visible');

            // В. Позиціювання (залишається в JS)
            tooltip.style.top = (detailField.offsetTop) + 'px';
            tooltip.style.left = (detailField.offsetLeft + detailField.offsetWidth + 15) + 'px';
        });

        // Обробник зняття наведення
        detailField.addEventListener('mouseleave', () => {
            // А. Відновлення стилів
            detailField.classList.remove('details-active');

            // Б. Приховування підказки
            tooltip.classList.remove('tooltip-visible');
            tooltip.classList.add('tooltip-hidden');
        });
    }
});