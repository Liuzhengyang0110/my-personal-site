<template>
  <div class="app-container">
    <!-- 轮播图背景 - 只在学习页面显示 -->
    <div class="carousel-bg" v-if="showCarousel">
      <el-carousel :interval="4000" arrow="never" indicator-position="none" height="100vh">
        <el-carousel-item v-for="item in carouselItems" :key="item.id">
          <div class="carousel-item" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="carousel-overlay"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <!-- 主要内容层 -->
    <div class="content-layer" :class="{ 'study-page': showCarousel }">
      <el-container>
        <el-header height="64px" class="header-overlay">
          <div class="nav">
            <img src="./assets/logo.jpg" width="64" height="64" style="border-radius: 50%;">
            <div class="brand">我的个人网站</div>
            <el-menu :default-active="active" mode="horizontal" router class="nav-menu" :ellipsis="false">
              <el-menu-item index="/study">学习</el-menu-item>
              <el-menu-item index="/life">生活</el-menu-item>
            </el-menu>
          </div>
        </el-header>
        <el-main class="main-overlay" :class="{ 'study-main': showCarousel }">
          <router-view />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { 
      active: this.$route.path,
      carouselItems: [
        { id: 1, image: 'https://picsum.photos/1920/1080?random=1' },
        { id: 2, image: 'https://picsum.photos/1920/1080?random=2' },
        { id: 3, image: 'https://picsum.photos/1920/1080?random=3' },
        { id: 4, image: 'https://picsum.photos/1920/1080?random=4' }
      ]
    }
  },
  computed: {
    showCarousel() {
      return this.active === '/study'
    }
  },
  watch: {
    '$route.path'(val) { this.active = val }
  }
}
</script>

<style>
html, body, #app { height: 100%; margin: 0; }

.app-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.carousel-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.carousel-item {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.content-layer {
  position: relative;
  z-index: 2;
  height: 100vh;
}

.header-overlay {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.main-overlay {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.study-main {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}

.nav { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
}

.brand { 
  font-weight: 600; 
  font-size: 18px; 
  color: #2c3e50;
}

.nav-menu { 
  border-bottom: none; 
}

.nav-menu .el-menu-item {
  color: #2c3e50;
}

.nav-menu .el-menu-item:hover,
.nav-menu .el-menu-item.is-active {
  color: #409eff;
}
</style>
