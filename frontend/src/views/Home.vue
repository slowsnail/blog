<template>
  <div class="article-list">
    <div v-if="Object.keys(groupedPosts).length">
      <div v-for="(postsInGroup, year) in groupedPosts" :key="year" class="time-group">
        <h2 class="group-title">{{ year }}</h2>
        <ArticleCard v-for="post in postsInGroup" :key="post.id" :article="post" />
      </div>
    </div>
    <div v-else>
      <p>No articles found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ArticleCard from '../components/ArticleCard.vue';
import posts from '@/data/posts.json';

// 对文章按日期降序排序
const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const groupedPosts = computed(() => {
  const groups: Record<string, typeof sortedPosts> = {};
  
  sortedPosts.forEach(post => {
    const date = new Date(post.date);
    const year = date.getFullYear().toString();
    
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
  });
  
  return groups;
});
</script>

<style scoped>
.article-list {
  padding: 2rem 0;
}

.time-group + .time-group {
  margin-top: 2.5rem;
}

.group-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
</style>