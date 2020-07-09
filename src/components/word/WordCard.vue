<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{word}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">수정</el-button>
        <el-button style="float: right; padding: 3px 0" type="text">삭제</el-button>
      </div>
      <div>ghghghgh</div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: ['word'],

  data() {
    return {};
  },
};
</script>
<style lang="scss">
</style>