<template>
  <div id="container">
    <div v-bind:class="{ eventCreatedHeader: eventState === 'eventCreated' }">
      <EventDataHeaderInfo :event="this.event" />
      <EventButtons
        v-if="eventState === 'eventCreated'"
        @buttonClick="togglePopup"
      />
      <ButtonsPreview v-else />
    </div>
    <EventDetails :event="this.event" :eventState="this.eventState" />
    <!-- <PopupDialog minHeight="710px" maxHeight="500px" v-show="this.popupTriggers['friendsTrigger']" :togglePopup="() => togglePopup('friendsTrigger')" header="Invite"> -->
    <PopupDialog
      minHeight="60vh"
      minWidth="40vw"
      v-show="this.popupTriggers['friendsTrigger']"
      :togglePopup="() => togglePopup('friendsTrigger')"
      header="Invite"
    >
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
import PopupDialog from '../Multipurpose/PopupDialog.vue'
import EventDataHeaderInfo from './EventDataComponents/EventDataHeaderInfo.vue'
import EventDetails from './EventDataComponents/EventDetails.vue'
import ButtonsPreview from './EventDataComponents/ButtonsPreview.vue'
import EventButtons from './EventDataComponents/EventButtons.vue'
import Invite from './DialogBoxes/InviteComponents/Invite.vue'
import InviteFooter from './DialogBoxes/InviteComponents/InviteFooter.vue'

export default {
  name: 'Events',
  mounted() {
    this.$root.$on('sendInvites', () => {
      this.togglePopup('friendsTrigger')
    })
  },
  components: {
    PopupDialog,
    EventDataHeaderInfo,
    EventDetails,
    ButtonsPreview,
    EventButtons,
    Invite,
    InviteFooter,
  },
  props: ['event', 'eventState'],
  data() {
    return {
      popupTriggers: {
        friendsTrigger: false,
      },
    }
  },
  methods: {
    togglePopup(trigger) {
      //Invert the value passed in with trigger
      this.popupTriggers[trigger] = !this.popupTriggers[trigger]
    },
  },
}
</script>

<style scoped>
#container {
  margin: 0px;
  /* width: 900px; */
  width: 100%;
}

.eventCreatedHeader {
  background-color: white;
  padding-left: 40px;
  padding-right: 40px;
}
</style>
