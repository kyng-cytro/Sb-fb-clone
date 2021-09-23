<template>
    <div class = "Friends">
      <div>
        <FriendSidebar />
      </div>
     <!-- <div>
        <FriendRequestDisplay />
      </div> -->
      <p> this is firends page</p>
    </div>
  
</template>

<script>

import FriendSidebar from "@/components/FriendsComponents/FriendSidebar.vue";


export default {
  name: "Friends",
  components: {
    FriendSidebar
  },
};
</script>


<style scoped>

</style>