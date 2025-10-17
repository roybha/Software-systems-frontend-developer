<template>
  <div :class="{ 'dark-mode': isDarkMode }">
<!--    <HeaderNav />-->

<!--      <AboutSection />-->
<!--      <ProgrammingSection />-->
<!--      <EducationalFieldsSection />-->
      <router-view></router-view>

<!-- <FooterSection />-->

    <!-- Модальне вікно -->
    <div v-if="showModal" id="modal-overlay" @click="closeModal">
      <div id="learning-rules-modal">
        <h3>Золоті правила навчання</h3>
        <p v-for="rule in rules" :key="rule">{{ rule }}</p>
        <button id="close-modal-btn" @click="closeModal">Зрозуміло</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Темний режим
const isDarkMode = ref(false)
onMounted(() => {
  const hour = new Date().getHours()
  isDarkMode.value = hour >= 21 || hour < 6
})

// Модальне вікно
const showModal = ref(false)
let timer = null
const rules = [
  "1. Декомпозиція: Розбивайте складні завдання на маленькі, керовані кроки.",
  "2. Активний пошук: Використовуйте документацію, але намагайтеся зрозуміти чому.",
  "3. Систематичність: Кожен день потроху краще, ніж один марафон.",
  "4. Коментарі: Пишіть зрозумілий код, наче пояснюєте його собі через півроку."
]
const targetSection =
function startTimer() { timer = setTimeout(() => showModal.value = true, 3000) }
function cancelTimer() { clearTimeout(timer) }
function closeModal() { showModal.value = false }


</script>
