<template>
  <div v-if="expenses.length" class="expenses__list">
    <expenses-item
      v-for="expense in expenses"
      :expense="expense"
      :key="expense.id"
    />
  </div>
  <p class="expenses__empty" v-else>Список пуст</p>
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
.expenses__empty {
  font-size: 20px;
  text-align: center;
}
</style>
