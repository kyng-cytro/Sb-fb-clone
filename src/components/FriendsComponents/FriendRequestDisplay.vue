<template>
  <div>
    <div>
      </div>
      <div class="friendRequestDisplay">
        <div class="square" v-for="friendRequest in this.friendRequests" :key="friendRequest.id">
            <FriendRequestSquare v-bind:friendRequest="friendRequest"/>
        </div>
    </div>
  </div>
</template>

<script>
import FriendRequestSquare from './FriendRequestSquare.vue';



export default {
  name: "FriendRequestDisplay",
  props: ["friendRequests"],
  components: {
    FriendRequestSquare
  },
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
