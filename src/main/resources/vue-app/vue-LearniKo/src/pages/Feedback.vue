<template>
  <Navigation />
  <header>
    <img src="../assets/cutted_logo.png" alt="Resource logo" width="140">
    <h1>LearniKo</h1>
  </header>
  <main>
    <h2 align="center">Зворотній зв’язок</h2>
    <form action="#" method="post">
      <fieldset>
        <legend><b>Персональна інформація</b></legend>
        <p>
          <label for="fullname">Прізвище та ім’я:</label>
          <input type="text" id="fullname" name="fullname" required size="40">
        </p>
        <p>
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required size="40">
        </p>
        <p>
          <label for="age">Вік:</label>
          <input type="number" id="age" name="age" min="1" max="120" required size="10">
        </p>
        <p>
          <label>Чи вже вивчаєте мову *?</label>
          <input type="radio" id="prof" name="study_level" value="Так, я профі" required>
          <label for="prof">Так, я профі</label>

          <input type="radio" id="beginner" name="study_level" value="Так, але знаю початки">
          <label for="beginner">Так, але знаю початки</label>

          <input type="radio" id="plan" name="study_level" value="Планую">
          <label for="plan">Планую</label>

          <input type="radio" id="no" name="study_level" value="Ні">
          <label for="no">Ні</label>
        </p>
      </fieldset>
      <p>
        <label for="purpose">Мета зворотнього зв’язку:</label>
        <select id="purpose" name="purpose" required size="1">
          <option value="Співпраця">Співпраця</option>
          <option value="Скарга на неякісний контент">Скарга на неякісний контент</option>
          <option value="Пропозиція">Пропозиція</option>
          <option value="Наявність помилки">Наявність помилки</option>
        </select>
      </p>
      <p id="details-wrapper" ref="wrapperRef">
        <label for="details">Напишіть детальніше, яку мову хочете обрати чи іншу примітку вашого запиту:</label>
        <textarea id="details" name="details" rows="6" cols="50" maxlength="500"
                  placeholder="Максимум 500 символів" required ref="detailFieldRef"></textarea>
      </p>
      <p>
        <input type="checkbox" id="consent" name="consent" required>
        <label for="consent">Я даю згоду на обробку моєї інформації</label>
      </p>
      <p>
        <button type="submit">Відправити</button>
        <button type="reset">Очистити</button>
      </p>
    </form>
  </main>
  <Footer />
  <teleport to="body">
    <div
        v-if="isTooltipVisible"
        id="detail-tooltip"
        :style="tooltipPosition"
        class="tooltip-visible"
    >
      Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка.
    </div>
  </teleport>
</template>
<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
import Footer from "../components/Footer.vue";
import { ref, onMounted, reactive } from 'vue';

// 1. Рефи для доступу до DOM-елементів
const detailFieldRef = ref<HTMLTextAreaElement | null>(null);
const wrapperRef = ref<HTMLParagraphElement | null>(null);

// 2. Реактивний стан для керування видимістю підказки
const isTooltipVisible = ref(false);

// 3. Реактивний об'єкт для динамічного позиціонування підказки
// (Позиціонування залишається в JS, оскільки залежить від розмірів DOM-елемента)
const tooltipPosition = reactive({
  top: '0px',
  left: '0px',
});

// --- Обробники подій ---

function handleMouseEnter() {
  if (detailFieldRef.value) {
    // А. Динамічна зміна стилів поля через клас (або Vue v-bind:class)
    detailFieldRef.value.classList.add('details-active');

    // В. Розрахунок та встановлення позиції
    // Ми робимо це тут, оскільки розміри потрібні лише при наведенні
    const field = detailFieldRef.value;

    // Оскільки підказка буде позиціонована абсолютно відносно body/viewport,
    // використовуємо getBoundingClientRect() для отримання позиції у viewport
    const rect = field.getBoundingClientRect();

    // Встановлюємо реактивні властивості, щоб Vue оновив стилі
    // Додаємо скрол до top, якщо вікно прокручено (для fixed/absolute позиціонування відносно document)
    tooltipPosition.top = (rect.top + window.scrollY) + 'px';
    tooltipPosition.left = (rect.left + rect.width + 15) + 'px';

    // Б. Показ підказки
    isTooltipVisible.value = true;
  }
}

function handleMouseLeave() {
  if (detailFieldRef.value) {
    // А. Відновлення стилів
    detailFieldRef.value.classList.remove('details-active');
  }
  // Б. Приховування підказки
  isTooltipVisible.value = false;
}

// --- Життєвий цикл ---
onMounted(() => {
  // Додаємо обробники подій лише після монтування компонента
  if (detailFieldRef.value) {
    detailFieldRef.value.addEventListener('mouseenter', handleMouseEnter);
    detailFieldRef.value.addEventListener('mouseleave', handleMouseLeave);
  }
});
</script>
<style scoped src="../assets/feedback_style.css"></style>
<style scoped>

</style>