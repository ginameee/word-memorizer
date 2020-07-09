<template>
  <div>
    <h1>Word Page</h1>
    <ul>
      <li v-for="(word, idx) in WORD_LIST" :key="idx">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
import { actionTypes as aTypes, stateTypes as sTypes } from '@/store/store-types';
import { mapState, mapActions } from 'vuex';
export default {
  created() {
    this.LOAD_WORD_LIST();
  },

  data() {
    return {};
  },

  computed: {
    ...mapState({
      WORD_LIST: sTypes.WORD_LIST,
    }),
  },

  methods: {
    ...mapActions({
      LOAD_WORD_LIST: aTypes.LOAD_WORD_LIST,
    }),
  },
};
</script>

<style lang="scss">
</style>
