<template>
  <div class="container">
    <header class="header">
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
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
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
.container {
  width: 480px;
  height: 400px;
}

.header {
  position: fixed;
  z-index: 1;
  height: 60px !important;
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

.content {
  height: calc(100% - 60px);
  padding: 10px;
  padding-top: 60px;

  & > div:first-child {
    width: 100%;
    height: 100%;
  }
}
</style>