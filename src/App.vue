<template>
  <div>
    <div>
      <AppFooter />
      <main>
        공통 최 상 위 vue 입니다.
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import AppFooter from './components/common/AppFooter.vue';

const route = useRoute();

// 특정 페이지에서 숨길 경로 목록 예시
const excludedPaths = [
  '/login',
];

</script>

<style scoped>
</style>
