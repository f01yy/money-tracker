<template>
  <form class="expenses__form form" @submit.prevent>
    <input
      v-model="title"
      class="form__input"
      type="text"
      placeholder="Введите название"
    />
    <input
      v-model="value"
      class="form__input"
      type="number"
      placeholder="Введите сумму"
    />
    <select v-model="selectedCategory" class="form__select">
      <option value="" disabled>Выберите категорию:</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <p>или создайте свою:</p>
    <input
      v-model="newCategory"
      type="text"
      class="form__input"
      placeholder="Новая категория"
    />
    <button @click="handleClick" class="form__btn btn">Добавить</button>
  </form>
</template>

<script>
export default {
  props: {
    categories: Array,
  },

  data() {
    return {
      title: null,
      value: '',
      selectedCategory: '',
      newCategory: '',
    };
  },

  methods: {
    handleClick() {
      let category;

      if (!this.newCategory.length) {
        category = this.selectedCategory;
      } else {
        category = this.newCategory;

        this.$emit('add-category', this.newCategory.toLowerCase());
      }

      this.$emit('add-expense', {
        id: Date.now(),
        title: this.title,
        value: this.value,
        category,
      });
    },
  },
};
</script>

<style scoped>
.expenses__form {
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
.form__input,
.form__select {
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
}
</style>
