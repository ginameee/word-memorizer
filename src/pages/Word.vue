<template>
  <div id="word-container">
    <h1 class="hide">단어장</h1>
    <header>
      <h2>
        <el-button type="text" @click="onSelectDate">{{ selectedDate }}</el-button>
      </h2>
      <el-button class="clear-btn" @click="onClearWordList">Clear</el-button>
    </header>
    <section>
      <word-card v-for="(word, idx) in WORD_LIST" :key="idx" :word="word"></word-card>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { actionTypes as aTypes, stateTypes as sTypes } from '@/store/store-types';
import * as moment from 'moment';
import WordCard from '@/components/word/WordCard.vue';

export default {
  components: {
    WordCard,
  },

  created() {
    this.LOAD_WORD_LIST();
  },

  data() {
    return {
      selectedDate: moment(new Date()).format('YYYY-MM-DD'),
    };
  },

  computed: {
    ...mapState({
      WORD_LIST: sTypes.WORD_LIST,
    }),
  },

  methods: {
    ...mapActions({
      LOAD_WORD_LIST: aTypes.LOAD_WORD_LIST,
      CLEAR_WORD_LIST: aTypes.CLEAR_WORD_LIST,
    }),
    onClearWordList() {
      this.CLEAR_WORD_LIST();
    },
    onSelectDate() {},
  },
};
</script>

<style lang="scss">
#word-container {
  height: 100%;

  header {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .clear-btn {
      float: right;
    }
  }
}
</style>
