<template>
  <div class="d-flex w-100" id="invite">
    <InviteFriendsSidebar
      class="w-25"
      @selected="(n) => applySelectedList(n)"
      @event="(n) => applySelectedEvent(n)"
      @group="(n) => applySelectedGroup(n)"
      @toggleNonFacebookVisibility="toggleVisibility"
    />
    <InviteFriends
      class="w-50"
      @toggleNonFacebookVisibility="toggleVisibility"
    />
    <InvitesLeft class="w-25" />
  </div>
</template>

<script>
import InviteFriends from "./InviteFriends/InviteFriends.vue";
import InviteFriendsSidebar from "./InviteFriends/InviteFriendsSidebar.vue";
import InvitesLeft from "./InvitesLeft.vue";
import Friend from "@/vuex-orm_models/FriendModel.js";
import GroupFriend from "@/vuex-orm_models/GroupFriendModel.js";
import EventFriend from "@/vuex-orm_models/EventFriendModel.js";

export default {
  components: {
    InviteFriends,
    InviteFriendsSidebar,
    InvitesLeft,
  },
  data() {
    return {
      collapseNonFacebook: false,
      externalInviteMethod: null,
      friendsList: Friend.all().slice(0, 100),
    };
  },
  methods: {
    toggleVisibility(method) {
      if (method === null) this.collapseNonFacebook = false;
      else this.collapseNonFacebook = true;

      this.externalInviteMethod = method;
    },
    applySelectedList(list) {
      if (list === "all") {
        this.friendsList = Friend.all();
      } else {
        this.friendsList = Friend.all().slice(0, 100);
      }
    },
    applySelectedGroup(group) {
      const groupFriends = GroupFriend.all().find(
        (friend) => friend.groupName === group
      ).friends;
      this.friendsList = Friend.findIn(groupFriends);
    },
    applySelectedEvent(event) {
      const eventFriends = EventFriend.all().find(
        (friend) => friend.eventName === event
      ).friends;
      this.friendsList = Friend.findIn(eventFriends);
    },
  },
};
</script>

<style scoped>
#invite {
  display: flex;
}
.inviteDiv {
  overflow-y: auto;
  max-height: 70vh;
}
hr {
  margin: 0px;
}
</style>
