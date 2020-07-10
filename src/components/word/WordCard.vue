<template>
  <el-card class="word-card">
    <header slot="header" class="clearfix word-card__header">
      <h3 class="word-card__header__name word-name">{{ hideName ? '' : word.name }}</h3>
      <p class="word-card__header__btn-group">
        <el-button style="float: right; padding: 3px 0" type="text">수정</el-button>
        <el-button style="float: right; padding: 3px 0" type="text">삭제</el-button>
      </p>
    </header>
    <section class="word-card__content">
      <p class="word-card__content__meaning word-meaning">{{ hideMeaning ? '' : word.meaning }}</p>
    </section>
  </el-card>
</template>
<script>
export default {
  props: ['word', 'hideMeaning', 'hideName'],

  data() {
    return {};
  },
};
</script>
<style lang="scss">
.word-card {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__btn-group {
      width: 15%;
      display: flex;
      justify-content: space-between;
    }
  }

  &__content {
    &__meaning {
      min-height: 50px;
    }
  }

  & .word-name {
    font-size: 20px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
