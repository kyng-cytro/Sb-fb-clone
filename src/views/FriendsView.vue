<template>
  <div class="Friends">
    <FriendSidebar />
    <FriendRequestDisplay :friendRequests="friendRequests" />
  </div>
</template>

<script>
import FriendSidebar from '@/components/FriendsComponents/FriendSidebar.vue'
import FriendRequestDisplay from '@/components/FriendsComponents/FriendRequestDisplay.vue'
import FriendRequest from '@/vuex-orm_models/FriendRequestModel.js'

export default {
  name: 'FriendsView',
  components: {
    FriendSidebar,
    FriendRequestDisplay,
  },
  computed: {
    friendRequests() {
      return FriendRequest.all()
    },
  },
}
</script>

<style scoped>
.Friends {
  display: flex;
  flex: 1 1 auto;
  background: rgb(244, 246, 247);
}
</style>
