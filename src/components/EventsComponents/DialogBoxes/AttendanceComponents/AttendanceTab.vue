<template>
  <div>
    <button
      @click="setSelected"
      v-bind:class="{ selected: this.title === this.selectedTitle }"
    >
      {{ this.title }}
    </button>
    <div v-if="this.title === this.selectedTitle" class="tabContent">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'selectedTitle'],
  methods: {
    setSelected() {
      this.$emit('setSelected', this.title)
    },
  },
}
</script>

<style scoped>
button {
  font-weight: bold;
  color: rgb(94, 94, 94);
  background-color: transparent;
  border-width: 0px;
  padding: 12px;
}
button:hover {
  border-radius: 7px;
  background-color: rgb(240, 240, 240);
}
button:focus {
  outline: 0;
}
.selected {
  color: rgb(24, 118, 242);
  border-bottom: 3px solid;
  border-bottom-color: rgb(24, 118, 242);
}
.selected:hover {
  background-color: transparent;
  border-radius: 0px;
}
</style>
