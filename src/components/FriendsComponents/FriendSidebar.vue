<template>
  <nav class="sidebar-buttons-container">
    <PageSidebarButton iconName="people-fill" text="Home" route="Home" />
    <PageSidebarButton
      iconName="file-person"
      text="Friend Requests"
      route="/FriendEntry"
    />
    <PageSidebarButton iconName="file-plus" text="Suggestions" />
    <PageSidebarButton iconName="gift" text="Birthdays" />
  </nav>
</template>

<script>
import PageSidebarButton from '@/components/PageSidebarButton.vue'

export default {
  name: 'FriendSidebar',
  components: {
    PageSidebarButton,
  },
}
</script>

<style scoped>
nav {
  background-color: white;
  box-shadow: 0px 0px 7px rgb(187, 185, 185);
  width: 22vw;
}
</style>
