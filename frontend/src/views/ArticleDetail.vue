<template>
  <div class="article-detail-container">
    <div v-if="article" class="article-detail">
      <h1 class="article-title">{{ article.title }}</h1>
      <p class="article-meta">发布于 {{ article.date }}</p>
      <div class="article-content" v-html="article.content"></div>
    </div>
    <div v-else class="not-found">
      <p>文章不存在</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import posts from '@/data/posts.json';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

const route = useRoute();
const allPosts: Post[] = posts;

const article = computed(() => {
  const { id, slug } = route.params;
  if (id) {
    return allPosts.find(p => p.id.toString() === id);
  } else if (slug) {
    // 在实际应用中，slug 通常是唯一的标识符。这里我们用 title 作为示例。
    // 注意：标题可能不唯一，这只是一个演示。
    return allPosts.find(p => p.title === slug);
  }
  return undefined;
});
</script>

<style scoped>
.article-detail-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #222;
}

.article-meta {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 2.5rem;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.article-content ::v-deep(p) {
  margin-bottom: 1.5rem;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
  font-size: 1.2rem;
  color: #555;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .article-detail-container {
    padding: 1.5rem;
  }
  .article-title {
    font-size: 2rem;
  }
  .article-content {
    font-size: 1rem;
  }
}
</style>