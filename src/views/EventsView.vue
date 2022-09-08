<template>
  <div class="Events">
    <div>
      <EventsSidebar
        :eventState="this.eventState"
        @stateChange="updateEventState"
        @nameChange="updateEventName"
        @dateChange="updateEventDate"
        @timeChange="updateEventTime"
        @locationChange="updateEventLocation"
        @descriptionChange="updateEventDescription"
      />
    </div>

    <div class="content">
      <EventExampleHolder
        v-if="!this.hasCustomEvent && eventState === 'normal'"
      />
      <EventData
        :event="this.mostRecentEvent"
        :eventState="eventState"
        v-else-if="this.hasCustomEvent && eventState === 'eventCreated'"
      />
      <EventPreview
        :event="this.mostRecentEvent"
        v-else-if="eventState === 'editing'"
      />
    </div>
  </div>
</template>

<script>
import UserEvent from '@/vuex-orm_models/EventModel.js'
import EventsSidebar from '@/components/EventsComponents/EventsSidebar.vue'
import EventExampleHolder from '@/components/EventsComponents/EventExampleHolder.vue'
import EventPreview from '@/components/EventsComponents/EventPreview.vue'
import EventData from '@/components/EventsComponents/EventCurrentDisplay.vue'
import { UserPopulation } from '@/mixins/UserPopulation'
import { FriendPopulation } from '@/mixins/FriendPopulation'

export default {
  name: 'EventsView',
  mixins: [FriendPopulation, UserPopulation],
  data() {
    return {
      //Options for state include normal, editing or eventCreated
      eventState: 'normal',
      currentEvent: {
        name: 'Event name',
        date: new Date().toJSON(),
        time: new Date().toISOString().split('T')[1].split('.')[0],
        location: 'Location',
        description: 'Description',
      },
    }
  },
  components: {
    EventsSidebar,
    EventExampleHolder,
    EventPreview,
    EventData,
  },
  mounted() {
    this.eventState = this.hasCustomEvent ? 'eventCreated' : 'normal'
  },
  computed: {
    hasCustomEvent() {
      return UserEvent.query().last() // Most recent event created
    },
    mostRecentEvent() {
      return UserEvent.query().last() ?? this.currentEvent
    },
  },
  methods: {
    updateEventState(newState) {
      this.eventState = newState
      if (newState === 'eventCreated') {
        UserEvent.insert({
          data: this.currentEvent,
        })
      }
    },
    updateEventName(newName) {
      this.currentEvent.name = newName
    },
    updateEventDate(newDate) {
      this.currentEvent.date = newDate + 'T00:00:00.000-07:00' // Make an ISO String
    },
    updateEventTime(newTime) {
      this.currentEvent.time = newTime
    },
    updateEventLocation(newLocation) {
      this.currentEvent.location = newLocation
    },
    updateEventDescription(newDescription) {
      this.currentEvent.description = newDescription
    },
  },
}
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
