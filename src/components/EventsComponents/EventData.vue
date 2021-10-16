<template>
  <div id="container">
    <div v-bind:class="{ eventCreatedHeader : eventState==='eventCreated' }">
      <EventDataHeaderInfo :event="this.event"/>
      <EventButtons v-if="eventState==='eventCreated'" v-on:buttonClick="togglePopup"/>
      <ButtonsPreview v-else />
    </div>
    <PopulateFriends />
    <EventDetails :event="this.event" :eventState="this.eventState" />
    <PopupDialog maxHeight="500px" v-show="this.popupTriggers['friendsTrigger']" :togglePopup="() => togglePopup('friendsTrigger')" header="Invite">
      <template v-slot:content>
        <Invite />
      </template>
      <template v-slot:footer>
        <InviteFooter />
      </template>
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
import InviteFooter from './DialogBoxes/InviteComponents/InviteFooter.vue'
import PopulateFriends from './PopulateFriends.vue'

export default {
  name: "Events",
  components: {
    PopupDialog,
    EventDataHeaderInfo,
    EventDetails,
    ButtonsPreview,
    EventButtons,
    Invite,
    InviteFooter,
    PopulateFriends
  },
  props: ["event", "eventState"],
  data() {
    return {
      popupTriggers: {
        friendsTrigger: false
      },
    }
  },
  methods: {
    togglePopup(trigger) {
      //Invert the value passed in with trigger
      this.popupTriggers[trigger] = !this.popupTriggers[trigger];
    }
  },
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
