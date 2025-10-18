<script setup>
</script>

<template>

  <footer>
    <address>
      <p>Адреса: вул. Прикладна, 12, Київ, Україна</p>
      <p>Телефон: +380 50 123 45 67</p>
      <p>Пошта: desandali@gmail.com</p>
    </address>
    <p align="center">© 2025 LearniKo</p>
  </footer>
</template>

<style scoped>

footer {
  position: absolute;
  background: radial-gradient(circle at center,
  #e6f0fa,
  #c2dbf0,
  #a0c4ff
  );
  color: #222;
  padding: 2rem;
  width: 96.65%;
}

address {
  text-align: left;
  font-style: normal;
  line-height: 1.4;
}

address:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: box-shadow 2s ease;
}
</style>