<template>
        <div class="friendRequestSquare">
          <img class="profilePic" :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)" />
          <div class="info">
            <strong>{{friend.name}}</strong>
            <p id="mutualFriends">{{friend.numOfMutualFriends}} mutual friends <p>
            <div v-if="deleted">
              <div>
                <button type="button" class="btn btn-secondary invisible" disabled>Invisible</button>
              </div>
              <div>
                <button type="button" v-on:click="handleDeleteClick" class="btn btn-secondary" disabled>Request deleted</button>
              </div>
            </div>
            <div v-else-if="accepted">
              <div>
                <button type="button" class="btn btn-secondary invisible" disabled>Invisible</button>
              </div>
              <div>
                <button type="button" class="btn btn-secondary" disabled>Request confirmed</button>
              </div>
            </div>
            <div v-else>
              <div>
                <button type="button" v-on:click="handleAcceptClick" class = "btn btn-primary">Confirm</button>
              </div>
              <div>
                <button type="button" v-on:click="handleDeleteClick" class="btn btn-secondary">Delete</button>
              </div>
            </div>
            <em>{{"Expires in " + friend.daysUntilExpiration + " days"}}</em>
          </div>
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
  width: 100%;
  border-radius: 10px;
  margin: 10%;
  /* padding: 10%; */
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}

.profilePic {
  width: 215px;
  height: 215px;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  border-radius: 10px 10px 0px 0px;
}

.info {
  margin:10px;
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

.invisible {
  color: white;
  background-color: white;
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
