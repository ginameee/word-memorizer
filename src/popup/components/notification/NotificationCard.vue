<template>
  <el-card>
    <header slot="header" class="clearfix">
      <h4>{{ version }}</h4>
    </header>
    <content>
      <ul>
        <li v-for="(updateItem, idx) in updateList" :key="idx">{{ updateItem }}</li>
      </ul>
    </content>
  </el-card>
</template>
<script>
export default {
  props: ['version', 'updateList'],

  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>