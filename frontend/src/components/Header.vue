<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="logo">看盘吃饭</router-link>
      <nav>
        <router-link to="/">首页</router-link>
        <a href="#">标签</a>
        <a href="#">分类</a>
        <a href="#">系列</a>
        <a href="#">关于</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  padding: 1.5rem 0;
  border-bottom: 1px solid #eaeaea;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #333;
}
nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #555;
  font-size: 1rem;
}
nav a.router-link-exact-active {
  color: #007aff;
  font-weight: 500;
}
</style>