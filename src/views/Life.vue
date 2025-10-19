<template>
  <div class="page">
    <h2>生活</h2>

    <el-timeline class="section">
      <el-timeline-item v-for="item in timeline" :key="item.id" :timestamp="item.date" placement="top">
        <el-card>
          <div class="timel-card-title">{{ item.title }}</div>
          <div class="timel-card-desc">{{ item.desc }}</div>
        </el-card>
      </el-timeline-item>
    </el-timeline>

    <div class="section gallery">
      <el-row :gutter="12">
        <el-col :xs="12" :sm="8" :md="6" v-for="img in gallery" :key="img.id" class="g-col">
          <el-card shadow="hover" body-style="padding: 0;">
            <img :src="img.src" class="photo" alt="photo" />
            <div class="g-caption">{{ img.caption }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifePage',
  data() {
    return {
      timeline: [
        { id: 1, date: '2025-10-10', title: '西湖徒步半日', desc: '秋高气爽，步道上的银杏叶很美。' },
        { id: 2, date: '2025-09-05', title: '尝试新菜谱', desc: '第一次做法式炖牛肉，成功！' }
      ],
      gallery: [
        { id: 1, src: 'https://picsum.photos/seed/p1/400/300', caption: '午后阳光' },
        { id: 2, src: 'https://picsum.photos/seed/p2/400/300', caption: '街角咖啡' },
        { id: 3, src: 'https://picsum.photos/seed/p3/400/300', caption: '落日余晖' },
        { id: 4, src: 'https://picsum.photos/seed/p4/400/300', caption: '城市夜景' }
      ]
    }
  }
}
</script>

<style scoped>
.page { padding: 24px; }
h2 { margin: 0 0 12px; }
.section { margin-top: 12px; }
.timel-card-title { font-weight: 600; margin-bottom: 4px; }
.timel-card-desc { color: #606266; }
.gallery .g-col { margin-bottom: 12px; }
.photo { width: 100%; display: block; }
.g-caption { padding: 8px; font-size: 13px; color: #606266; }
</style>


