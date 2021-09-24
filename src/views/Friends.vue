<template>
    <div class = "Friends">
      <div>
        <FriendSidebar />
      </div>
      <div>
        <FriendRequestDisplay />
      </div> 
      <p> this is firends page</p>
    </div>
  
</template>

<script>

import FriendSidebar from "@/components/FriendsComponents/FriendSidebar.vue";
import FriendRequestDisplay from "@/components/FriendsComponents/FriendRequestDisplay.vue";

export default {
  name: "Friends",
  components: {
    FriendSidebar,
    FriendRequestDisplay
  },
};
</script>


<style scoped>
.Friends {
  display: flex;
  flex-direction: row;
}
</style>