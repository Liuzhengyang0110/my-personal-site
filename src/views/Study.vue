<template>
  <div class="page">
    <div class="page-header">
      <h2>学习</h2>
      <div class="tags">
        <span class="label">分类：</span>
        <el-tag
          v-for="cat in categories"
          :key="cat"
          :type="activeCategory === cat ? '' : 'info'"
          class="tag"
          @click="activeCategory = cat"
        >{{ cat }}</el-tag>
        <el-tag :type="activeCategory === '全部' ? '' : 'info'" class="tag" @click="activeCategory = '全部'">全部</el-tag>
      </div>
    </div>

    <el-row :gutter="16">
      <el-col :xs="24" :sm="12" :md="8" v-for="post in filteredPosts" :key="post.id" class="card-col">
        <el-card shadow="hover">
          <div class="card-title">{{ post.title }}</div>
          <div class="card-meta">{{ post.date }} · {{ post.category }}</div>
          <div class="card-excerpt">{{ post.excerpt }}</div>
          <div class="card-actions">
            <el-button type="primary" text>阅读全文</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
export default {
  name: 'StudyPage',
  data() {
    return {
      categories: ['前端', '后端', '读书'],
      activeCategory: '全部',
      posts: [
        { id: 1, title: 'Vue3 组合式 API 实战要点', date: '2025-10-01', category: '前端', excerpt: '记录在实际项目中使用 setup、ref/reactive、watch、computed 的最佳实践。' },
        { id: 2, title: 'Node.js 性能优化清单', date: '2025-09-20', category: '后端', excerpt: '从事件循环、线程池到内存管理的系统性优化路径。' },
        { id: 3, title: '《深入理解计算机系统》笔记（上）', date: '2025-08-15', category: '读书', excerpt: '抽象、表示与程序机器级表示的要点梳理。' },
        { id: 4, title: 'Element Plus 实用组件整理', date: '2025-07-30', category: '前端', excerpt: '表单、表格、弹窗、消息等组件的高频使用姿势。' }
      ]
    }
  },
  computed: {
    filteredPosts() {
      if (this.activeCategory === '全部') return this.posts
      return this.posts.filter(p => p.category === this.activeCategory)
    }
  }
}
</script>

<style scoped>
.page { padding: 24px; }
.page-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
h2 { margin: 0; }
.tags { display: flex; align-items: center; flex-wrap: wrap; }
.label { margin-right: 8px; color: #909399; }
.tag { margin-right: 8px; margin-bottom: 8px; cursor: pointer; }
.card-col { margin-bottom: 16px; }
.card-title { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.card-meta { font-size: 12px; color: #909399; margin-bottom: 8px; }
.card-excerpt { font-size: 14px; color: #606266; min-height: 40px; }
.card-actions { text-align: right; margin-top: 8px; }
</style>


