<template>
  <div class="contactList">
    <div class="header">
      <div class="title">Contacts</div>
      <div class="images">
        <i class="bi bi-camera-video-fill"></i>
        <i class="bi bi-search"></i>
        <i class="bi bi-three-dots"></i>
      </div>
    </div>
    <hr>
    <div
        v-for="friend in friendsList"
        :key="friend.id"
        class="ContactCard"
      >
        <ContactCards v-bind:friend="friend" />
      </div>
  </div>
</template>

<script>
import ContactCards from "./ContactCards.vue";

export default {
  components: {
    ContactCards,
  },
  props: ["friendsList"],
}
</script>

<style scoped>
.contactList {
  margin-top: 2vh;
}
.header {
  display: flex;
  justify-content: space-between;
}
.images {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
</style>