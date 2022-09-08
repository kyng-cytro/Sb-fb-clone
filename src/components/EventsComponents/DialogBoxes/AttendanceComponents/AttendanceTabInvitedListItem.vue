<template>
  <div class="container">
    <div class="verticalAlign pl-4">
      <FriendDisplay :friend="friend" :size="'normal'"></FriendDisplay>
    </div>
    <div class="verticalAlign"></div>
  </div>
</template>

<script>
import FriendDisplay from '@/components/Multipurpose/FriendDisplay.vue'

export default {
  props: ['friend'],
  components: {
    FriendDisplay,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 0px;
}
.verticalAlign {
  display: flex;
  padding: 0px;
  height: 40px;
  line-height: 45px;
  text-align: center;
}

.bold {
  font-weight: bold;
}
</style>
