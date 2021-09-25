<template>
        <div class="friendRequestSquare">
          <img class="profilePic" :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)" />
          <strong>{{friend.name}}</strong>
          <p id="mutualFriends">{{friend.numOfMutualFriends}} mutual friends <p>
          <div>
            <button type="button" onClick = {this.handleAcceptClick} class = "btn btn-primary">Confirm</button>
          </div>
          <div>
            <button type="button" onClick = {this.handleDeleteClick} class="btn btn-secondary">Delete</button>
          </div>
          <em>{{"Expires in " + friend.daysUntilExpiration + " days"}}</em>
        </div>
</template>

<script>
export default {
  name: "friend-request-square",
  props: ["friend"],
  data() {
    return { deleted: false, accepted: false }
  },
  methods: {
    handleDeleteClick() {
      this.deleted = true
    },
    handleAcceptClick() {
      this.accepted = true
    },
  }
}


</script>

<style scoped>
.friendRequestSquare {
  /* box-shadow: 0px 0px 3px; */
  border-radius: 10px;
  margin: 10%;
  padding: 10%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
}

.profilePic {
  width: 100px;
  height: 100px;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
}

button {
  width: 90%;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
}

.btn-secondary {
  color: black;
  background-color: hsl(0, 0%, 92%);
  border: 0px
}

#mutualFriends {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

em {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

</style>
