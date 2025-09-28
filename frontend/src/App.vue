<template>
  <div id="app-layout">
    <Header />
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
}
</style>