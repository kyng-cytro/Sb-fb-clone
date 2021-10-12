<template>
  <div id="container">
    <div v-bind:class="{ eventCreatedHeader : eventState==='eventCreated' }">
      <EventDataHeaderInfo :event="this.event"/>
      <EventButtons v-if="eventState==='eventCreated'" v-on:buttonClick="togglePopup"/>
      <ButtonsPreview v-else />
    </div>
    <EventDetails :event="this.event" :numInvited = "numInvited" :eventState="this.eventState" :invites="this.invites"/>
    <PopupDialog v-show="this.popupTriggers['friendsTrigger']" :togglePopup="() => togglePopup('friendsTrigger')" header="Invite">
      <Invite :inviteList="this.invites.friends"/>
    </PopupDialog>
  </div>
</template>

<script>
// import EmailDialog from './DialogBoxes/EmailDialog.vue';
import PopupDialog from './DialogBoxes/PopupDialog.vue'
import EventDataHeaderInfo from './EventDataComponents/EventDataHeaderInfo.vue'
import EventDetails from './EventDataComponents/EventDetails.vue'
import ButtonsPreview from './EventDataComponents/ButtonsPreview.vue'
import EventButtons from './EventDataComponents/EventButtons.vue'
import Invite from './DialogBoxes/InviteComponents/Invite.vue'

export default {
  name: "Events",
  components: {
    PopupDialog,
    EventDataHeaderInfo,
    EventDetails,
    ButtonsPreview,
    EventButtons,
    Invite
  },
  props: ["event", "eventState"],
  data() {
    return {
      popupTriggers: {
        friendsTrigger: false
      },
      invites: {
        email: [],
        text: [],
        friends: []
      }

    }
  },
  methods: {
    togglePopup(trigger) {
      //Invert the value passed in with trigger
      console.log("I clicked ");
      this.popupTriggers[trigger] = !this.popupTriggers[trigger];
    }
  },
  computed: {
    numInvited: function() {
      // let num = 0;
      // for (let i = 0; i < invites.length; i++) {
      //   num += invites[i]
      // }
      return this.invites.email.length + this.invites.text.length + this.invites.friends.length
    }
  }
};
</script>

<style scoped>
#container {
  margin: 0px;
}
div {
  /* border-radius: 5px; */
}
.eventCreatedHeader {
  background-color: white;
}
</style>
