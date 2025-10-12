document.addEventListener('DOMContentLoaded', () => {
    // Завдання 2
    const searchInput = document.getElementById('theme-search');

    // Вибираємо тільки статті з темами
    const allThemeArticles = document.querySelectorAll('.theme-item');

    //  Вибираємо перший та останній article (нетематичні блоки)
    const themesSection = document.getElementById('themes_list');
    let introArticle = null;
    let outroArticle = null;

    if (themesSection) {
        // Перевіряємо, чи є елементи
        const allArticles = themesSection.querySelectorAll('article');
        if (allArticles.length > 0) {
            introArticle = allArticles[0]; // Перший article
        }
        if (allArticles.length > 1) {
            outroArticle = allArticles[allArticles.length - 1]; // Останній article
        }
    }


    // Створення та додавання елемента повідомлення про результат
    const mainContent = document.querySelector('main.content');
    const noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'no-results-message';
    noResultsMessage.textContent = '❌ Тему за вашим запитом не знайдено.';

    if (mainContent) {
        searchInput.parentNode.insertBefore(noResultsMessage, searchInput.nextSibling);
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            let foundCount = 0;

            // Визначаємо, чи активний пошук
            const isSearchActive = searchTerm !== '';

            // Логіка керування першим і останнім інфо блоками
            // Якщо пошук активний, ховаємо їх, інакше - показуємо
            const infoDisplay = isSearchActive ? 'none' : 'block';

            if (introArticle) introArticle.style.display = infoDisplay;
            if (outroArticle) outroArticle.style.display = infoDisplay;


            // Фільтрація тематичних статей
            allThemeArticles.forEach(article => {
                const themeTitleElement = article.querySelector('h3');

                if (!themeTitleElement) return;

                const themeName = themeTitleElement.textContent.toLowerCase().trim();

                if (themeName.includes(searchTerm)) {
                    article.style.display = 'block';
                    foundCount++;
                } else {
                    article.style.display = 'none';
                }
            });

            // Виведення повідомлення про результат
            if (foundCount === 0 && isSearchActive) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        });
    }
    // Завдання 3
    // Дані для наповнення акордеона
    const themesData = [
        { title: "Python", description: "Популярна у Data Science, веб-розробці та автоматизації. Має простий синтаксис, ідеальна для початкового рівня.",},
        { title: "Java", description: "Кросплатформенність через JVM. Основна мова корпоративної розробки та розробки Android-додатків. Середній рівень.",},
        { title: "JavaScript", description: "Ключова для створення інтерактивних та динамічних веб-сторінок. Використовується для фронтенд- та бекенд-розробки. Початковий рівень.",},
        { title: "C++", description: "Мова для системного програмування, ігор та високопродуктивних додатків. Вимагає поглибленого розуміння пам'яті. Поглиблений рівень.",},
        { title: "Ruby", description: "Відома своїм елегантним синтаксисом та фреймворком Rails. Популярна для веб-розробки та прототипування. Початковий рівень.",},
        { title: "PHP", description: "Використовується для створення динамічних веб-сайтів та серверних скриптів (наприклад, WordPress). Початковий рівень.",},
    ];

    const accordionPlaceholder = document.getElementById('accordion-placeholder');
    if (accordionPlaceholder) {
        let accordionHTML = '<div class="accordion-inner-container">';
        themesData.forEach((theme, index) => {
            // Створення елементів для акордеона
            accordionHTML += `
                <div class="accordion-item">
                    <button class="accordion-header" type="button">${theme.title}</button>
                    <div class="accordion-content">
                        <p>${theme.description}</p>
                    </div>
                </div>
            `;
        });
        accordionHTML += '</div>';
        accordionPlaceholder.innerHTML += accordionHTML;
    }

    // Логіка розкриття/згортання акордеона
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Закриваємо всі інші відкриті секції
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content && item.style.maxHeight) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.classList.remove('active');
                }
            });

            // Відкриваємо/закриваємо поточну секцію
            header.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null; // Закрити
            } else {
                // Використовуємо scrollHeight для коректного розкриття
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});