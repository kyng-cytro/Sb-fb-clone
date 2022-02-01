<template>
  <div id="invite">
    <div>
      <InviteFriends @toggleNonFacebookVisibility = "toggleVisibility"/>
      <!-- <b-button
        :class="collapseNonFacebook ? null : 'collapsed'"
        :aria-expanded="collapseNonFacebook ? 'true' : 'false'"
        aria-controls="collapse-non-facebook"
        @click="collapseNonFacebook = !collapseNonFacebook"
      >
        Toggle Collapse
      </b-button> -->
      <div v-show="collapseNonFacebook">
        <hr />
        <b-collapse
          id="collapse-non-facebook"
          v-model="collapseNonFacebook"
          class="mt-2"
        >
          <InviteNonFacebook />
        </b-collapse>
      </div>
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
  hr {
    margin: 0px;
  }
</style>
