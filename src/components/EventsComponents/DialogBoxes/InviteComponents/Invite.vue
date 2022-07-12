<template>
  <div class="d-flex w-100" id="invite">
    <InviteFriendsSidebar
      class="w-25"
      v-on:selected="applySelectedList"
      v-on:event="applySelectedEvent"
      v-on:group="applySelectedGroup"
      @toggleNonFacebookVisibility="toggleVisibility"
    />
    <InviteFriends class="w-50" @toggleNonFacebookVisibility="toggleVisibility" />
    <InvitesLeft class="w-25" />
  </div>
</template>

<script>
import InviteFriends from "./InviteFriends/InviteFriends.vue";
import InviteFriendsSidebar from "./InviteFriends/InviteFriendsSidebar.vue";
import InvitesLeft from "./InvitesLeft.vue";

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
    };
  },
  methods: {
    toggleVisibility(method) {
      if (method === null) this.collapseNonFacebook = false;
      else this.collapseNonFacebook = true;

      this.externalInviteMethod = method;
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
