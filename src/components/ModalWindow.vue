<template>
  <div v-if="isShowing" @click="close" class="modal">
    <div @click.stop class="modal__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowing: false,
    };
  },

  methods: {
    close() {
      this.isShowing = false;
    },

    open() {
      this.isShowing = true;
    },
  },
};
</script>

<style scoped>
.modal {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__body {
  background-color: #eee;
  max-width: 770px;
  width: 90%;
}
</style>
