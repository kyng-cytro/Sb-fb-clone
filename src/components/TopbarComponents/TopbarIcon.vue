<template>
  <div class="circle">
    <img
      class="imageIcon"
      :src="require('@/assets/images/TopbarIcons/' + type + 'Icon.png')"
    />
  </div>
</template>

<script>
export default {
  name: 'CircularIcon',
  props: ['type'],
}
</script>

<style scoped>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  width: 40px;
  height: 40px;
  background: rgb(222, 222, 221);
  border-radius: 50%;
  transition: 0.3s;
}
.circle:hover {
  background: rgb(191, 191, 191);
}

.imageIcon {
  height: 24px;
  width: 24px;
}
</style>
