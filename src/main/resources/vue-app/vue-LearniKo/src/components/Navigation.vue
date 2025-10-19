<template>
  <nav class="highlight">
    <ul v-if="route.name === 'Main'">
      <li>
        <a href="#about">Про нас</a>
      </li>
      <li>
        <a href="#programming">
          Програмування
        </a>
      </li>
      <li>
        <a href="#educational fields">
          Навчальні теми
        </a>
      </li>
      <li>
        <router-link :to="{name: 'Feedback'}">Зворотній зв'язок</router-link>
      </li>
    </ul>
    <template v-else>
      <p><router-link :to="{name: 'Main'}">Головна</router-link></p>
      <nav v-if="route.name === 'Themes'" class="highlight" id="page_nav">
        <ul class="themes-nav">
          <li>
            <a href="#python_theme">Pyhton</a>
          </li>
          <li>
            <a href="#java_theme">Java</a>
          </li>
          <li>
            <a href="#js_theme">JavaScript</a>
          </li>
          <li>
            <a href="#c++_theme">C++</a>
          </li>
          <li>
            <a href="#ruby_theme">Ruby</a>
          </li>
          <li>
            <a href="#php_theme">PHP</a>
          </li>
        </ul>
      </nav>
    </template>
  </nav>
</template>
<script setup>
import {useRoute} from "vue-router";
const route = useRoute();
</script>
<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.highlight {
  position: sticky;
  background-color: #559fd1;
}

.highlight p{
  margin-bottom: 0;
  padding-bottom: 20px;
}
nav {
  position: sticky;
  text-align: center;
  top: 0;
  padding: 5px 0 0 0;
  z-index: 3;
}
.themes-nav {
  padding: 2px 20px;
}
nav a:visited {
  color: #FFD700;
}
nav a {
  text-decoration: none;
  font-weight: bold;
}

nav p > a {
  font-style: italic;
}
nav ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  align-content: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  flex: 0 0 49%;
  margin-bottom: 10px;
}
#page_nav {
background: hsl(204, 68%, 67%);
}
#page_nav ul li {
  background: #cfe7f7;
  text-align: center;
  border-radius: 5px;
}
</style>