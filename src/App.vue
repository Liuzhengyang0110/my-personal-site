<template>
  <el-container>
    <el-header height="64px">
      <div class="nav">
        <div class="brand">我的个人网站</div>
        <el-menu :default-active="active" mode="horizontal" router class="nav-menu" :ellipsis="false">
          <el-menu-item index="/study">学习</el-menu-item>
          <el-menu-item index="/life">生活</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  
</template>

<script>
export default {
  name: 'App',
  data() {
    return { active: this.$route.path }
  },
  watch: {
    '$route.path'(val) { this.active = val }
  }
}
</script>

<style>
html, body, #app { height: 100%; margin: 0; }
.nav { display: flex; align-items: center; justify-content: space-between; }
.brand { font-weight: 600; font-size: 18px; }
.nav-menu { border-bottom: none; }
</style>
