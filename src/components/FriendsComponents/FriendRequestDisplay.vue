<template>
  <div>
    <div>
        <p>Friend Requests</p>
      </div>
      <div class="friendRequestDisplay">
        <div class="square" v-for="friend in friends" :key="friend.name">
            <FriendRequestSquare v-bind:friend="friend"/>
        </div>
    </div>
  </div>
</template>

<script>
import FriendRequestSquare from './FriendRequestSquare.vue';

const friends = [
  {
    imgSrc: "businessMan.jpg",
    name: "Miles",
    daysUntilExpiration: 29,
    numOfMutualFriends: 21,
  },
  {
    imgSrc: "anson.jpg",
    name: "Anson",
    daysUntilExpiration: 29,
    numOfMutualFriends: 21,
  },
];



export default {
  name: "FriendRequestDisplay",
  components: {
    FriendRequestSquare

  },
  data(){
    return {friends}
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
