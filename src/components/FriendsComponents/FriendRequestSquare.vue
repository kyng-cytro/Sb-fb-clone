<template>
        <div class="friendRequestSquare">
          <img v-if="friendRequest.imageSource" class="profilePic" :src="require('@/assets/images/FriendProfilePics/' + friendRequest.imageSource)" @error="setAltImg"/>
          <i v-else class="bi bi-person-fill"></i>
          <div class="info">
            <strong>{{friendRequest.name}}</strong>
            <!-- <p id="mutualFriends">{{friendRequest.numOfMutualFriends}} mutual friends <p> -->
              <br />
            <em id="expireMessage">{{"Expires in " + friendRequest.daysUntilExpiration + " days"}}</em>
            <div v-if="friendRequest.state==='deleted'">
              <div>
                <button type="button" class="btn btn-secondary invisible" disabled>Invisible</button>
              </div>
              <div>
                <button type="button" v-on:click="handleDeleteClick" class="btn btn-secondary" disabled>Request deleted</button>
              </div>
              <em class="invisible">Invisible placeholder</em>
            </div>
            <div v-else-if="friendRequest.state==='confirmed'">
              <div>
                <button type="button" class="btn btn-secondary invisible" disabled>Invisible</button>
              </div>
              <div>
                <button type="button" class="btn btn-secondary" disabled>Request confirmed</button>
              </div>
              <em class="invisible">Invisible placeholder</em>
            </div>
            <div v-else>
              <div>
                <button type="button" v-on:click="handleConfirmClick" class = "btn btn-primary">Confirm</button>
              </div>
              <div>
                <button type="button" v-on:click="handleDeleteClick" class="btn btn-secondary">Delete</button>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import FriendRequest from "@/vuex-orm_models/FriendRequestModel.js";

export default {
  name: "friend-request-square",
  props: ["friendRequest"],
  methods: {
    handleDeleteClick() {
      FriendRequest.update({
        where: this.friendRequest.id,
        data: {
          state: "deleted"
        }
      });
    },
    setAltImg(event) {
      event.target.src = `https://ui-avatars.com/api/?name=${this.friendRequest.name.split(' ').join('+')}`;
    },
    handleConfirmClick() {
      FriendRequest.update({
        where: this.friendRequest.id,
        data: {
          state: "confirmed"
        }
      });
    },
  }
}
</script>

<style scoped>
.bi {
  text-align: center;
  color: rgb(73, 113, 172);
  /* color: rgb(0,123,255); */
  font-size: 10em;
  width: 215px;
  height: 215px;
  background-color: rgb(214, 214, 214);
  border-radius: 10px 10px 0px 0px;
}

.friendRequestSquare {
  width: 100%;
  border-radius: 10px;
  margin: 10%;
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

#expireMessage {
  /* color: rgb(73, 113, 172); */
  color: rgb(192, 65, 65);
}

em {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

</style>
