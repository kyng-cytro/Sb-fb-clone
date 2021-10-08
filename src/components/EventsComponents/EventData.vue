<template>
  <div id="container">
    <div v-bind:class="{ eventCreatedHeader : eventState==='eventCreated' }">
      <EventDataHeaderInfo :event="this.event"/>
      <EventButtons v-if="eventState==='eventCreated'"/>
      <ButtonsPreview v-else />
    </div>
    <EventDetails :event="this.event"/>
  <CloseButtonComponent />
  <PopupDialog v-show="this.popupTriggers['emailTrigger']" :togglePopup="() => togglePopup('emailTrigger')">
    <h2>My Popup!</h2>
  </PopupDialog>
  <button >Open Email Popup</button>
  </div>
</template>

<script>
// import EmailDialog from './DialogBoxes/EmailDialog.vue';
import PopupDialog from './DialogBoxes/PopupDialog.vue'
import EventDataHeaderInfo from './EventDataComponents/EventDataHeaderInfo.vue'
import EventDetails from './EventDataComponents/EventDetails.vue'
import ButtonsPreview from './EventDataComponents/ButtonsPreview.vue'
import EventButtons from './EventDataComponents/EventButtons.vue'

export default {
  name: "Events",
  components: {
    PopupDialog,
    EventDataHeaderInfo,
    EventDetails,
    ButtonsPreview,
    EventButtons
  },
  props: ["event", "eventState"],
  data() {
    return {
      popupTriggers: {
        emailTrigger: false,
        //Add other values here
      }
    }
  },
  methods: {
    togglePopup(trigger) {
      //Invert the value passed in with trigger
      this.popupTriggers[trigger] = !this.popupTriggers[trigger];
      // console.log(trigger);
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
