<template>
  <div class="expenses__item">
    <div class="expenses__desc">
      <div class="expenses__category">{{ expense.category }}</div>
      <div class="expenses__title">{{ expense.title }}</div>
    </div>
    <div @click="handleClick(expense.id)" class="expenses__close">&#215;</div>
    <div class="expenses__price">{{ getNormalizedPrice(expense.value) }}</div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import { getNormalizedPrice } from '@/utils';

export default {
  props: {
    expense: Object,
  },

  methods: {
    getNormalizedPrice,

    handleClick(expenseId) {
      this.removeExpense(expenseId);
    },

    ...mapMutations(['removeExpense']),
  },

  computed: { ...mapState(['expenses']) },
};
</script>

<style scoped>
.expenses__item {
  padding: 10px;
  background-color: #eee;
  display: flex;
  position: relative;
}
.expenses__desc {
}
.expenses__category {
  color: rgb(0, 166, 0);
  font-weight: 600;
}
.expenses__title {
  font-size: 20px;
}
.expenses__price {
  margin-left: auto;
  font-size: 20px;
  align-self: flex-end;
}
.expenses__close {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 43, 43);
  cursor: pointer;
}
</style>
