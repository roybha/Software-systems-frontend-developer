<template>
  <h3>Теми</h3>
  <div class="accordion-inner-container">
    <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
    >
      <button
          class="accordion-header"
          :class="{ active: activeIndex === index }"
          @click="toggle(index)"
      >
        <span>{{ item.title }}</span>
      </button>

      <div
          ref="contentEls"
          class="accordion-content"
          :style="{
          maxHeight: activeIndex === index ? contentHeights[index] + 'px' : '0',
          opacity: activeIndex === index ? 1 : 0
        }"
      >
        <div class="accordion-content-inner">
          <slot name="content" :item="item">
            <p>{{ item.description }}</p>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue';

type Item = { title: string; description: string };
const props = defineProps<{ items: Item[] }>();

const activeIndex = ref<number | null>(null);
const contentEls = ref<(HTMLElement | null)[]>([]);
const contentHeights = ref<number[]>([]);

function toggle(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
  nextTick(() => updateHeights());
}

function updateHeights() {
  contentHeights.value = contentEls.value.map(el => el?.scrollHeight ?? 0);
}

onMounted(() => {
  nextTick(updateHeights);
});
</script>

<style scoped>

.accordion-inner-container {
  border-radius: 12px;
  background: #f4f4ff;
  padding: 10px;
}

.accordion-item + .accordion-item {
  margin-top: 10px;
}

.accordion-header {
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 14px 16px;
  font-weight: 600;
  border: none;
  outline: none;
  background: #e0e0ff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.25s ease;
}

.accordion-header:hover {
  background: #d5d5ff;
}

.accordion-header.active {
  background: #c4c4ff;
}

.accordion-content {
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.35s ease;
  background: #ffffff;
  border-radius: 0 0 8px 8px;
  margin-top: 4px;
}

.accordion-content-inner {
  padding: 12px 16px;
  line-height: 1.5;
}

h3 {
text-align: center;
}

body.dark-mode .accordion-inner-container {
  background: #3a3a3a;
  border: 1px solid #6688ff;
}


body.dark-mode .accordion-header {
  background: #444444;
  color: #f0f0f0;
}


body.dark-mode .accordion-header:hover {
  background: #555555;
}


body.dark-mode .accordion-header.active {
  background: #315d7e;
  color: #ffffff;
}


body.dark-mode .accordion-content {
  background: #2c2c2c;
}

body.dark-mode .accordion-content-inner {
  color: #e0e0e0;
}


body.dark-mode .accordion-content-inner h3 {
  color: #a0c4ff;
}


body.dark-mode .accordion-header .arrow-icon {
  color: #f0f0f0;
}
</style>
