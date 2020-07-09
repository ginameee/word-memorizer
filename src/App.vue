<template>
  <div class="app-container">
    <el-header>
      <el-menu default-active="0" mode="horizontal">
        <el-menu-item v-for="(menu, idx) in MENU_LIST" :index="idx + ''" :key="menu.id">
          <router-link :to="menu.path">
            <div>
              <i :class="menu.iconClassName"></i>
              {{ menu.title }}
            </div>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { stateTypes as sType } from '@/store/store-types';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState({
      MENU_LIST: sType.MENU_LIST,
    }),
  },
};
</script>

<style lang="scss">
.app-container {
  width: 480px;
  height: 400px;
}

.el-header {
  height: 15% !important;
  padding: 0 !important;

  .el-menu {
    width: 100%;
    height: 100%;

    &-item {
      width: 120px;
      padding: 0 !important;

      div {
        text-align: center;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.el-main {
  height: 85%;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
</style>