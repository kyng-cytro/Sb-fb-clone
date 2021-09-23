<template> 
  <div>
      <nav>
        <div class="container">
          <div class = "sidebar-buttons-container">
            <FriendSidebarButton type = "home"></FriendSidebarButton>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import FriendSidebarButton from "@/components/FriendsComponents/FriendSidebarButton.vue";





export default {
  name: "FriendSidebar",
  components: {
    FriendSidebarButton
    
  }

}
</script>


<style scoped>

</style>