<template>
  <div class="container">
    <div class="App">
      <section class="expenses">
        <h1>Список трат</h1>
        <button @click="$refs.modal.open" class="expenses__btn btn">
          Добавить
        </button>
        <div class="expenses__main">
          <div>
            <modal-window ref="modal">
              <expense-form
                :categories="categories"
                @add-expense="handleAddExpense"
                @add-category="handleAddCategory"
              />
            </modal-window>

            <expenses-list :expenses="expenses" />
          </div>

          <div class="expenses__total">
            <h3>Итоговые траты</h3>
            {{ getNormalizedPrice(totalExpenses) }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

import { getNormalizedPrice } from './utils';

import ExpensesList from './components/ExpensesList.vue';
import ExpenseForm from './components/ExpenseForm.vue';
import ModalWindow from './components/ModalWindow.vue';

export default {
  name: 'App',

  components: {
    ExpensesList,
    ExpenseForm,
    ModalWindow,
  },

  data() {
    return {};
  },

  methods: {
    getNormalizedPrice,

    handleAddCategory(category) {
      this.addCategory(category);
    },

    handleAddExpense(expense) {
      this.addExpense(expense);
      this.$refs.modal.close();
    },
    ...mapMutations(['addExpense', 'addCategory']),
  },

  computed: {
    ...mapGetters(['getExpensesByCategory', 'totalExpenses']),
    ...mapState(['expenses', 'categories']),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body {
  background-color: rgb(218, 218, 218);
  padding: 0 10px;
}
.container {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.expenses > h1 {
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
}
.close {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 43, 43);
  cursor: pointer;
}
.btn {
  padding: 10px;
  transition: all 0.2s;
  width: fit-content;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  cursor: pointer;
}
.btn:hover {
  background-color: transparent;
  color: #000;
}
.expenses__main {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 10px;
}
.expenses__btn {
  margin-top: 10px;
  margin-bottom: 20px;
}
.expenses__total {
  background-color: #eee;
  padding: 10px;
  height: fit-content;
  font-size: 20px;
}
</style>
