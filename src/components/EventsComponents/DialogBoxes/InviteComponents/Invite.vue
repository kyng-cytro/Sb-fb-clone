<template>
  <div id="invite">
    <div class="inviteDiv">
      <div v-show="collapseNonFacebook">
        <b-collapse
          id="collapse-non-facebook"
          v-model="collapseNonFacebook"
          class="mt-2"
        >
          <InviteNonFacebook />
        </b-collapse>
      </div>
      <InviteFriends @toggleNonFacebookVisibility = "toggleVisibility"/>
      <!-- <b-button
        :class="collapseNonFacebook ? null : 'collapsed'"
        :aria-expanded="collapseNonFacebook ? 'true' : 'false'"
        aria-controls="collapse-non-facebook"
        @click="collapseNonFacebook = !collapseNonFacebook"
      >
        Toggle Collapse
      </b-button> -->
    </div>
    <div>
      <InvitesLeft />
    </div>
  </div>
</template>

<script>
  import InviteFriends from "./InviteFriends/InviteFriends.vue";
  import InviteNonFacebook from "./InviteNonFacebook.vue";
  import InvitesLeft from "./InvitesLeft.vue";

  export default {
    components: {
      InviteFriends,
      InviteNonFacebook,
      InvitesLeft,
    },
    data() {
      return {
        collapseNonFacebook: false,
      };
    },
    methods: {
      toggleVisibility() {
        this.collapseNonFacebook = !this.collapseNonFacebook;
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
