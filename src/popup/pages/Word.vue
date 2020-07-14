<template>
  <div id="word-container">
    <h1 class="hide">단어장</h1>
    <header class="word-header">
      <el-date-picker
        class="word-header__date"
        v-model="selectedDate"
        type="date"
        align="left"
        placeholder="날짜를 선택하세요"
        @change="onSelectDate"
      ></el-date-picker>
      <el-dropdown @command="onSelectMenu">
        <!-- <el-button type="primary">
          MENU
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>-->
        <span class="el-dropdown-link">
          MENU
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="word-header__btn-dropdown-menu">
          <el-dropdown-item command="clear">초기화</el-dropdown-item>
          <el-dropdown-item command="name">단어 {{ isHidedName ? '표시하기' : '숨기기' }}</el-dropdown-item>
          <el-dropdown-item command="meaning">뜻 {{ isHidedMeaning ? '표시하기' : '숨기기' }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </header>
    <section class="word-list" v-if="WORD_LIST.length > 0">
      <word-card
        class="word-list__item"
        v-for="word in WORD_LIST"
        :key="word.name"
        :word="word"
        :hide-meaning="isHidedMeaning"
        :hide-name="isHidedName"
      ></word-card>
    </section>
    <section class="word-list-empty" v-else>
      <i class="el-icon-circle-close empty-icon"></i>
      <div class="empty-text">단어장이 비어있습니다.</div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { actionTypes as aTypes, stateTypes as sTypes, mutationTypes as mTypes } from '@/popup/store/store-types';
import * as moment from 'moment';
import WordCard from '@/popup/components/word/WordCard.vue';

export default {
  components: {
    WordCard,
  },

  created() {
    this.selectedDate = this.DATE;
    this.LOAD_WORD_LIST(this.selectedDate);
  },

  data() {
    return {
      selectedDate: new Date(),
      isHidedName: false,
      isHidedMeaning: false,
    };
  },

  computed: {
    ...mapState({
      WORD_LIST: sTypes.WORD_LIST,
      DATE: sTypes.DATE,
    }),
  },

  methods: {
    ...mapActions({
      LOAD_WORD_LIST: aTypes.LOAD_WORD_LIST,
      CLEAR_WORD_LIST: aTypes.CLEAR_WORD_LIST,
    }),
    ...mapMutations({
      SET_DATE: mTypes.SET_DATE,
    }),
    clearWordList() {
      this.isHidedName = false;
      this.isHidedMeaning = false;

      this.CLEAR_WORD_LIST();
    },
    changeMeaningDisplay() {
      this.isHidedMeaning = !this.isHidedMeaning;
    },
    changeNameDisplay() {
      this.isHidedName = !this.isHidedName;
    },
    onSelectDate() {
      this.isHidedName = false;
      this.isHidedMeaning = false;

      this.SET_DATE(this.selectedDate);
      this.LOAD_WORD_LIST(this.DATE);
    },
    onSelectMenu(command) {
      switch (command) {
        case 'clear':
          this.clearWordList();
          break;
        case 'name':
          this.changeNameDisplay();
          break;
        case 'meaning':
          this.changeMeaningDisplay();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
#word-container {
  height: 100%;

  .word-header {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__date {
      width: 200px;
    }
  }

  .word-list {
    height: 80%;
    overflow-y: scroll;

    &__item {
      margin: 8px 0;
    }
  }

  .word-list-empty {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.4);

    & .empty-icon {
      font-size: 40px;
    }

    & .empty-text {
      font-size: 18px;
      padding-top: 15px;
    }
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
}
</style>
