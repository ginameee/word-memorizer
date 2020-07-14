<template>
  <el-card class="word-card">
    <header slot="header" class="clearfix word-card__header">
      <template v-if="!isUpdateMode">
        <h3 class="word-card__header__name word-name">{{ hideName ? '' : name }}</h3>
        <p class="word-card__header__btn-group">
          <el-button type="text" @click="onUpdateWord">수정</el-button>
          <el-button type="text" @click="onDeleteWord">삭제</el-button>
        </p>
      </template>
      <el-input
        v-else
        class="word-name--update"
        placeholder="Please input"
        v-model="name"
        clearable
      ></el-input>
    </header>
    <section class="word-card__content">
      <p
        v-if="!isUpdateMode"
        class="word-card__content__meaning word-meaning"
      >{{ hideMeaning ? '' : meaning }}</p>
      <div v-else>
        <el-input type="textarea" class="word-meaning--update" v-model="meaning"></el-input>
        <p class="word-card__content__btn-group">
          <el-button type="text" @click="onSaveWord">저장</el-button>
          <el-button type="text" @click="onCancelUpdate">취소</el-button>
        </p>
      </div>
    </section>
  </el-card>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { stateTypes as sTypes, actionTypes as aTypes } from '@/store/store-types';

export default {
  props: ['word', 'hideMeaning', 'hideName'],

  data() {
    return {
      isUpdateMode: false,
      meaning: '',
      name: '',
    };
  },

  created() {
    this.setInitialWordData();
  },

  computed: {
    ...mapState({
      DATE: sTypes.DATE,
    }),
  },

  methods: {
    ...mapActions({
      DELETE_WORD: aTypes.DELETE_WORD,
      UPDATE_WORD: aTypes.UPDATE_WORD,
    }),
    setInitialWordData() {
      this.meaning = this.word.meaning;
      this.name = this.word.name;
    },
    onDeleteWord(wordName) {
      this.DELETE_WORD({ date: this.DATE, targetWord: this.word.name });
    },
    onCancelUpdate() {
      this.isUpdateMode = false;
      this.setInitialWordData();
    },
    onUpdateWord() {
      this.isUpdateMode = true;
    },
    onSaveWord() {
      const oldWordName = this.word.name;
      const updatedWord = {
        name: this.name,
        meaning: this.meaning,
      };

      this.UPDATE_WORD(this.DATE, oldWordName, updatedWord);

      this.isUpdateMode = false;
    },
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
    min-height: 80px;

    &__meaning {
      height: 100%;

      &--update {
        height: 100%;
      }
    }

    &__btn-group {
      float: right;
    }
  }

  & .word-name {
    font-size: 20px;
    font-weight: bolder;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
