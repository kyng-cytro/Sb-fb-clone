<template>
  <div>
    <div>
        <p>Friend Requests</p>
      </div>
      <div class="friendRequestDisplay">
        <div class="square" v-for="friend in friendRequests" :key="friend.name">
            <FriendRequestSquare v-bind:friend="friend"/>
        </div>
    </div>
  </div>
</template>

<script>
import FriendRequestSquare from './FriendRequestSquare.vue';
import FriendRequest from "@/classes/friendRequest.js";



export default {
  name: "FriendRequestDisplay",
  components: {
    FriendRequestSquare
  },
  computed: {
    friendRequests() {
    return FriendRequest.all();
    }
  }
}

</script>


<style scoped>
.friendRequestDisplay {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.square {
  padding: 5px;
}

</style>
