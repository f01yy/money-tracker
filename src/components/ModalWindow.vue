<template>
  <div v-if="isShowing" class="modal">
    <div class="modal__body">
      <div @click="close" class="close modal__close">&#215;</div>
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
  padding-top: 20px;
  background-color: #eee;
  max-width: 770px;
  width: 90%;
  position: relative;
}
.modal__close {
  position: absolute;
  top: 0;
  right: 10px;
}
</style>
