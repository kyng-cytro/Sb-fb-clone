<template>
  <div>
    <div>
        <p>Friend Requests</p>
      </div>
      <div class="friendRequestDisplay">
        <li v-for="item in friends" :key="item.name">
            {{item.name}}
            <FriendRequestSquare/>
            <!--<FriendRequestSquare friends = {{item}}/>-->
        </li>
      <!--
    <div>
      <FriendRequestSquare imgSrc = {friend.imgSrc} name = {friend.name} daysUntilExpiration = {friend.daysUntilExpiration} numOfMutualFriends = {friend.numOfMutualFriends} />
    </div>
      -->
    </div>
  </div>
</template>

<script>
import FriendRequestSquare from './FriendRequestSquare.vue';

const friends = [
  {
    imgSrc: "./",
    name: "My name",
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

</style>