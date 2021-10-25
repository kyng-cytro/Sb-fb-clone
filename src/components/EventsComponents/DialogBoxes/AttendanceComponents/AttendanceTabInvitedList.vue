<template>
  <div class="container">
    <div>
        <!-- Facebook -->
      <p v-show="selectedFriends.length">
        Friends ({{ selectedFriends.length }})
      </p>
      <div
        v-for="friend in this.selectedFriends"
        :key="friend.id"
        class="selectRectangle"
        >
        <AttendanceTabInvitedListItem v-bind:friend="friend" />
      </div>
      <br>
      <br>
      
      <!-- Email -->
      <p v-show="emailFriends.length">
        Invited by email ({{ emailFriends.length }})
      </p>
      <div
        v-for="emailFriend in this.emailFriends"
        :key="emailFriend.id"
        class="selectRectangle"
      >
        <AttendanceTabInvitedListItem v-bind:friend="emailFriend" />
      </div>
      <br>
      <br>

      <!-- Phone -->
      <p v-show="phoneFriends.length">
        Invited by text ({{ phoneFriends.length }})
      </p>
      <div
        v-for="phoneFriend in this.phoneFriends"
        :key="phoneFriend.id"
        class="selectRectangle"
      >
        <AttendanceTabInvitedListItem v-bind:friend="phoneFriend" />
      </div>
    </div>
  </div>
</template>

<script>
import AttendanceTabInvitedListItem from "./AttendanceTabInvitedListItem.vue";
import NonFacebookFriend from "@/classes/nonFacebookFriend.js";
import Friend from "@/classes/friend.js";
export default {
  components: {
    AttendanceTabInvitedListItem,
  },
  data() {
    return {
      // friends: friendExampleList
    };
  },
  methods: {},
  computed: {
    selectedFriends() {
      return Friend.query().where("selected", true).get();
    },
    emailFriends() {
      return NonFacebookFriend.query().where("email", (email) => email !== "").get();
    },
    phoneFriends() {
      return NonFacebookFriend.query().where("phone", (phone) => phone !== "").get();
    },
  },
};
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