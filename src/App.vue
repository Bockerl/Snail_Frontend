<template>
  <div class="app-container">
    <AppHeader />
    <main class="content">
      <RouterView />
    </main>
    <AppFooter v-if="route.name !== 'Chatbot'" />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'

const route = useRoute()

</script>

<style scoped>

.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  background-color: #f9f9f9;
  overflow: hidden; 
}

.content {
  flex: 1;
  overflow: hidden; 
}

</style>
