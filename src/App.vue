<template>
  <div>
    <el-container>
      <el-header height="50px">header</el-header>
      <el-aside width="200px">
        <el-menu>
          <el-menu-item index="1">Menu one</el-menu-item>
          <el-menu-item index="2">Menu two</el-menu-item>
          <el-menu-item index="3">Menu three</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
};
</script>

<style>
.el-container {
  background-color: antiquewhite;
}

.el-header {
  background-color: burlywood;
}

.el-aside {
  background-color: aquamarine;
}

.el-main {
  background-color: chartreuse;
}
</style>