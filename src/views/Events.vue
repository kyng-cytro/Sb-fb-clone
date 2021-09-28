<template>
    <div class = "Events">
      <div>
        <EventsSidebar :eventState="this.eventState" v-on:stateChange="updateEventState"/>
      </div>
      <div>
      </div>
    </div>

</template>

<script>

import EventsSidebar from "@/components/EventsComponents/EventsSidebar.vue";

export default {
  name: "Events",
  components: {
    EventsSidebar,
  },
  methods: {
    updateEventState(newState) {
      this.eventState = newState;
    },
  },
  data (){
    return {
      eventState : "normal", //Options for state include normal, creatingEvent, eventCreated
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
