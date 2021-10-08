<template>
  <div>
    <div>
      <EventDataHeaderInfo :event="this.event"/>
      <div v-if="eventState==='eventCreated'">
          <button class="btn btn-secondary" @click="() => togglePopup('emailTrigger')">Email</button>
          <button class="btn btn-secondary">Text</button>
          <button class="btn btn-secondary">Invite</button>
          <button class="btn btn-secondary">Edit</button>
          <!-- <v-btn flat slot="activator" class="success">Test</v-btn> -->
      </div>
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

export default {
  name: "Events",
  components: {
    PopupDialog,
    EventDataHeaderInfo,
    EventDetails,
    ButtonsPreview
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
div {
  border-radius: 5px;
}
  button {
    background-color: rgb(235,235,235);
    border-color: rgb(235,235,235);
    color: black;
    margin: 5px;
  }
.btn-secondary {
  color: black;
  padding: 10px;
  background-color: hsl(0, 0%, 92%);
  border: 0px;
  border-radius: 6px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
}
.btn-secondary:hover {
  color: black;
  background-color: hsl(0, 0%, 82%);
  transition: 0.3s;
}

.btn-secondary:focus {
  outline: none;
  border: none;
}
</style>
