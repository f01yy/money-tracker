<template>
  <div class="expenses__list">
    <expenses-item
      v-for="expense in expenses"
      :expense="expense"
      :key="expense.id"
    />
  </div>
</template>

<script>
import ExpensesItem from './ExpensesItem.vue';

export default {
  props: {
    expenses: Array,
  },

  components: {
    ExpensesItem,
  },
};
</script>

<style scoped>
.expenses__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
