<template>
    <div class = "Events">
      <div>
        <EventsSidebar :eventState="this.eventState" v-on:stateChange="updateEventState" v-on:nameChange="updateEventName"/>
      </div>

      <div>
        <EventDisplay v-if="eventState === 'normal'"/>
        <EventPreview :event="currentEvent" v-if="eventState === 'editing'"/>
      </div>
    </div>

</template>

<script>

import EventsSidebar from "@/components/EventsComponents/EventsSidebar.vue";
import EventDisplay from "@/components/EventsComponents/EventDisplay.vue"
import EventPreview from "@/components/EventsComponents/EventPreview.vue"

export default {
  name: "Events",
  components: {
    EventsSidebar,
    EventDisplay,
    EventPreview
  },
  methods: {
    updateEventState(newState) {
      this.eventState = newState;
    },
    updateEventName(newName) {
      this.currentEvent.name = newName;
      console.log("You updated the eventName");
    }
  },
  data (){
    return {
      eventState : "normal", //Options for state include normal, creatingEvent, eventCreated
      currentEvent : {
        name: "",
        date: new Date(),
        location: "",
        description: ""
      }
    }
  }
};
</script>


<style scoped>
.Events {
  display: flex;
  flex-direction: row;
  background: rgb(244, 246, 247);
}
</style>
