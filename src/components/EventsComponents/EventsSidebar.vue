<template>
  <div>
      <nav>
        <div class="container">
          <div class = "sidebar-buttons-container">
            <PageSidebarButton iconName = "home" text = "Home" />
            <PageSidebarButton iconName = "home" text = "Your Events" />
            <PageSidebarButton iconName = "home" text = "Birthdays" />
            <PageSidebarButton iconName = "home" text = "Notifications" />
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";

export default {
  name: "EventsSidebar",
  components: {
    PageSidebarButton
  }

}
</script>


<style scoped>

</style>
