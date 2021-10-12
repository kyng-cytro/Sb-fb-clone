<template>
  <div>
      <nav>
        <div class="container">
          <div class = "sidebar-buttons-container">
            <PageSidebarButton iconName="home" text="Home" />
            <PageSidebarButton iconName="friendRequest" text="Friend Request" />
            <PageSidebarButton iconName="suggestion" text="Suggestions" />
            <PageSidebarButton iconName="birthdays" text="Birthdays" />
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";

export default {
  name: "FriendSidebar",
  components: {
    PageSidebarButton
  }

}
</script>


<style scoped>
.container {
  background-color: white;
  box-shadow: 3px 3px 3px rgb(232, 232, 232);
}
</style>
