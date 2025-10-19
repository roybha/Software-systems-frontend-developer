document.addEventListener('DOMContentLoaded', () => {
    // Завдання 5
    function setNightMode() {
        const currentHour = new Date().getHours();
        // Перевіряємо, чи година в проміжку [21:00, 23:59] АБО [00:00, 05:59]
        const isNightTime = currentHour >= 21 || currentHour < 6;

        if (isNightTime) {
            document.body.classList.add('dark-mode');
        }
    }
    setNightMode();

    // Завдання 1
    const targetSection = document.getElementById('goal-article');
    if (targetSection) {
        let focusTimer = null;
        const focusDuration = 3000; // 30 секунд

        function closeModal() {
            const overlay = document.getElementById('modal-overlay');
            const modal = document.getElementById('learning-rules-modal');
            if (overlay) overlay.remove();
            if (modal) modal.remove();
            document.body.style.overflow = '';
        }

        function showModal() {
            if (document.getElementById('modal-overlay')) return;

            // Золоті правила навчання
            const rules = `
                <p>1. <b>Декомпозиція:</b> Розбивайте складні завдання на маленькі, керовані кроки.</p>
                <p>2. <b>Активний пошук:</b> Використовуйте документацію, але завжди намагайтеся зрозуміти чому.</p>
                <p>3. <b>Систематичність:</b> Кожен день потроху краще, ніж один марафон.</p>
                <p>4. <b>Коментарі:</b> Пишіть зрозумілий код, наче пояснюєте його собі через півроку.</p>
            `;

            // Створення модального вікна та оверлею
            const overlay = document.createElement('div');
            overlay.id = 'modal-overlay';

            const modal = document.createElement('div');
            modal.id = 'learning-rules-modal';


            // Контент модального вікна, включаючи кнопку
            modal.innerHTML = `
                <h3> Золоті правила навчання</h3>
                ${rules}
                <button id="close-modal-btn">
                    Зрозуміло
                </button>
            `;

            document.body.appendChild(overlay);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            document.getElementById('close-modal-btn').addEventListener('click', closeModal);
            overlay.addEventListener('click', closeModal);
        }

        targetSection.addEventListener('mouseenter', () => {
            // Запуск таймера при наведенні
            focusTimer = setTimeout(showModal, focusDuration);
        });

        targetSection.addEventListener('mouseleave', () => {
            // Скидання таймера при знятті наведення
            clearTimeout(focusTimer);
        });
    }
});