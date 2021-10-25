<template>
    <div class = "Events">
      <div>
        <EventsSidebar :eventState="this.eventState" v-on:stateChange="updateEventState" v-on:nameChange="updateEventName" v-on:dateChange="updateEventDate" v-on:timeChange="updateEventTime" v-on:locationChange="updateEventLocation" v-on:descriptionChange="updateEventDescription"/>
      </div>

      <div class="content">
        <EventDisplay v-if="eventState === 'normal'"/>
        <EventPreview :event="currentEvent" v-else-if="eventState === 'editing'"/>
        <EventData :event="currentEvent" :eventState="eventState" v-else-if="eventState === 'eventCreated'" />
      </div>
    </div>

</template>

<script>

import EventsSidebar from "@/components/EventsComponents/EventsSidebar.vue";
import EventDisplay from "@/components/EventsComponents/EventDisplay.vue"
import EventPreview from "@/components/EventsComponents/EventPreview.vue"
import EventData from "@/components/EventsComponents/EventData.vue"

export default {
  name: "Events",
  components: {
    EventsSidebar,
    EventDisplay,
    EventPreview,
    EventData
  },
  methods: {
    updateEventState(newState) {
      this.eventState = newState;
    },
    updateEventName(newName) {
      this.currentEvent.name = newName;
      console.log("You updated the eventName");
    },
    updateEventDate(newDate) {
      this.currentEvent.date = newDate;
      console.log("This is the new date:");
    },
    updateEventTime(newTime) {
      let tempDate = new Date(this.currentEvent.date.getTime()); //This is essentially a deep copy of the date
      console.log("This is the new time:");
      //The following comment is to make it so that our linter doesn't get mad at the escape characters in the Regex.
      //eslint-disable-next-line
      let timeReg = /(\d+)\:(\d+) (\w+)/; //Thanks to this answer: https://stackoverflow.com/a/16382331/4913592
      let parts = newTime.match(timeReg);
      console.log(parts);
      if (parts != null) {
        let hours = /am/i.test(parts[3]) ?
          function(am) {return am < 12 ? am : 0}(parseInt(parts[1], 10)) :
          function(pm) {return pm < 12 ? pm + 12 : 12}(parseInt(parts[1], 10));
        let minutes = parseInt(parts[2], 10);
        tempDate.setHours(hours);
        tempDate.setMinutes(minutes);
      }
      this.currentEvent.date = tempDate;
    },
    updateEventLocation(newLocation) {
      this.currentEvent.location = newLocation;
    },
    updateEventDescription(newDescription) {
      this.currentEvent.description = newDescription;
    },
  },
  data (){
    return {
      eventState : "eventCreated", //Options for state include normal, creatingEvent, eventCreated
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
  width: 100%;
  overflow-y: scroll;
}
.content {
  width: 100%;
  height: 100%;
}
</style>
