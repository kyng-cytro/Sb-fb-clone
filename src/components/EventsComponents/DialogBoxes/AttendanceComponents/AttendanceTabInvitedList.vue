<template>
  <div class="container">
    <div>
      <!-- Facebook -->
      <p v-show="invitedFriends.length">
        Friends ({{ invitedFriends.length }})
      </p>
      <div
        v-for="friend in this.invitedFriends"
        :key="friend.id"
        class="selectRectangle"
      >
        <AttendanceTabInvitedListItem v-bind:friend="friend" />
      </div>
      <br />
      <br />

      <!-- Email -->
      <p v-show="invitedEmailFriends.length">
        Invited by email ({{ invitedEmailFriends.length }})
      </p>
      <div
        v-for="emailFriend in this.invitedEmailFriends"
        :key="emailFriend.id"
        class="selectRectangle"
      >
        <AttendanceTabInvitedListItem v-bind:friend="emailFriend" />
      </div>
      <br />
      <br />

      <!-- Phone -->
      <p v-show="invitedPhoneFriends.length">
        Invited by text ({{ invitedPhoneFriends.length }})
      </p>
      <div
        v-for="phoneFriend in this.invitedPhoneFriends"
        :key="phoneFriend.id"
        class="selectRectangle"
      >
        <AttendanceTabInvitedListItem v-bind:friend="phoneFriend" />
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import AttendanceTabInvitedListItem from './AttendanceTabInvitedListItem.vue'

import { friendSorting } from '@/mixins/FriendSorting.js'

export default {
  components: {
    AttendanceTabInvitedListItem,
  },
  data() {
    return {}
  },
  methods: {},
  mixins: [friendSorting],
}
</script>

<style scoped>
.container {
  width: 350px;
}
.selectRectangle {
  background-color: transparent;
  border-radius: 8px;
  border: 0px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  padding: 8px;
}

.selectRectangle:hover {
  background-color: rgb(242, 242, 242);
}

p {
  font-weight: bold;
  margin-left: -30px;
}
</style>
