<template>
  <div class="friendRequestSquare">
    <img
      v-if="friendRequest.imageSource"
      class="profilePic"
      :src="
        require('@/assets/images/FriendProfilePics/' +
          friendRequest.imageSource)
      "
      @error="setAltImg"
    />
    <i v-else class="bi bi-person-fill profilePic"></i>
    <div class="info">
      <strong>{{ friendRequest.name }}</strong>
      <div
        v-if="this.$root.$data.fbLiteEnabled"
        class="d-flex align-items-center"
      >
        <p id="expireMessage">
          <i>
            {{ 'Expires in ' + friendRequest.daysUntilExpiration + ' days' }}
          </i>
        </p>
        <i
          class="bi bi-question-circle tip"
          v-b-tooltip.hover.v-dark
          :title="tooltip"
        ></i>
      </div>
      <div v-if="friendRequest.state === 'deleted'">
        <button
          type="button"
          v-on:click="handleDeleteClick"
          class="btn btn-secondary"
          disabled
        >
          Request deleted
        </button>
      </div>
      <div v-else-if="friendRequest.state === 'confirmed'">
        <button type="button" class="btn btn-secondary" disabled>
          Request confirmed
        </button>
      </div>
      <div v-else>
        <div>
          <button
            type="button"
            v-on:click="handleConfirmClick"
            class="btn btn-primary"
          >
            Confirm
          </button>
        </div>
        <div>
          <button
            type="button"
            v-on:click="handleDeleteClick"
            class="btn btn-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
import FriendRequest from '@/vuex-orm_models/FriendRequestModel.js'

export default {
  name: 'friend-request-square',
  props: ['friendRequest'],
  methods: {
    handleDeleteClick() {
      FriendRequest.update({
        where: this.friendRequest.id,
        data: {
          state: 'deleted',
        },
      })
    },
    setAltImg(event) {
      event.target.src = `https://ui-avatars.com/api/?name=${this.friendRequest.name
        .split(' ')
        .join('+')}`
    },
    handleConfirmClick() {
      FriendRequest.update({
        where: this.friendRequest.id,
        data: {
          state: 'confirmed',
        },
      })
    },
  },
  watch: {
    getFacebookLite: function (isEnabled) {
      if (!isEnabled) {
        //If it's now not enabled
        this.resetFilters()
      }
    },
  },
  computed: {
    getFacebookLite() {
      return FacebookLite.find(1).enabled
    },
    tooltip() {
      return `After ${this.friendRequest.daysUntilExpiration} days this request will be automatically deleted. The sender will not be notified.`
    },
  },
}
</script>

<style scoped>
.profilePic {
  text-align: center;
  color: rgb(73, 113, 172);
  /* color: rgb(0,123,255); */
  font-size: 10em;
  width: 215px;
  height: 215px;
  background-color: rgb(214, 214, 214);
  border-radius: 10px 10px 0px 0px;
}

.tip {
  color: grey;
  margin-left: 10px;
}

.friendRequestSquare {
  border-radius: 10px;
  margin: 10%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
  float: left;
}

.profilePic {
  width: 215px;
  height: 215px;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  border-radius: 10px 10px 0px 0px;
}

.info {
  margin: 10px;
}

button {
  width: 100%;
  margin: 7px 0px;
  font-weight: bold;
  font-size: 0.9em;
}

.btn-secondary {
  color: black;
  background-color: hsl(0, 0%, 92%);
  border: 0px;
  margin: 0;
}

.invisible {
  color: white;
  background-color: white;
}

#mutualFriends {
  color: rgb(111, 111, 111);
  font-size: 0.9em;
}

#expireMessage {
  margin: 0;
  font-size: 00.9em;
  color: grey;
}

em {
  color: rgb(111, 111, 111);
  font-size: 0.9em;
}
</style>
