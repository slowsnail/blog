<template>
  <div class="article-card">
    <h2 class="article-title">
      <router-link :to="{ name: 'ArticleById', params: { id: article.id } }">{{ article.title }}</router-link>
    </h2>
    <p class="article-excerpt">{{ article.excerpt }}</p>
    <p class="article-date">{{ article.date }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.article-card {
  border: 1px solid #eaeaea;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transition: box-shadow 0.3s ease;
}
.article-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.article-title a {
  text-decoration: none;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
}
.article-excerpt {
  color: #555;
  margin: 1rem 0;
  line-height: 1.6;
}
.article-date {
  font-size: 0.9rem;
  color: #888;
}
</style>