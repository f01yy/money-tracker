import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      expenses: [
        {
          id: 0,
          title: 'Поездка в Турцию',
          value: 100000,
          category: 'путешествия',
        },
        {
          id: 1,
          title: 'Покупка дома',
          value: 10000000,
          category: 'недвижимость',
        },
        { id: 2, title: 'Новый телефон', value: 75000, category: 'техника' },
        { id: 3, title: 'Подарок маме', value: 100000, category: 'подарки' },
      ],
      categories: [
        'путешествия',
        'недвижимость',
        'техника',
        'подарки',
        'другое',
      ],
    };
  },

  getters: {
    getExpensesByCategory: (state) => (category) =>
      state.expenses.filter((expense) => expense.category === category),

    totalExpenses(state) {
      return state.expenses.reduce(
        (accumulator, currentExpense) =>
          accumulator + Number(currentExpense.value),
        0
      );
    },
  },

  mutations: {
    addExpense(state, expense) {
      state.expenses.push(expense);
    },

    removeExpense(state, expenseId) {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== expenseId
      );
    },

    addCategory(state, category) {
      state.categories.push(category);
    },
  },
});
