<template>
  <div>
      <nav>
        <div class="container">
          <div v-if="eventState==='normal'" class = "sidebar-buttons-container">
            <PageSidebarButton iconName = "home" text = "Home" />
            <PageSidebarButton iconName = "yourEvents" text = "Your Events" />
            <PageSidebarButton iconName = "birthdays" text = "Birthdays" />
            <PageSidebarButton iconName = "notifications" text = "Notifications" />
            <button v-on:click="changeEventState('editing')">Create New Event</button>
          </div>
          <div v-else-if="eventState === 'editing'">
            <h1>{{stages[stage]}}</h1>
            <div v-if="stages[stage] === 'Event Details'">
              <input v-model="eventName" placeholder="Event name" v-on:input="updateName">
              <datepicker v-model="eventDate" :bootstrap-styling="true" v-on:input="updateDate">
                <div slot="beforeCalendarHeader" class="calender-header">
                  Hello!
                </div>
              </datepicker>
              <vue-timepicker v-model="eventTime" manual-input format="h:mm A" v-on:input="updateTime"></vue-timepicker>
            </div>
            <div v-else-if="stages[stage] === 'Description'">
                <textarea v-model="eventDescription" placeholder="Description"></textarea>
            </div>
            <button v-on:click="regressStage('Location')">Back</button>
            <button v-on:click="progressStage('Location')">Next</button>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'


export default {
  name: "EventsSidebar",
  components: {
    PageSidebarButton,
    Datepicker,
    VueTimepicker
  },
  methods: {
    changeEventState(newState) {
      this.$emit('stateChange', newState);
      console.log("You clikced me!");
    },
    updateName() {
      this.$emit('nameChange', this.eventName);
    },
    updateDate() {
      console.log("You're changing the date");
      this.$emit('dateChange', this.eventDate);
    },
    updateTime() {
      console.log("You're changing the time!");
      this.$emit('timeChange', this.eventTime);
    },
    progressStage() {
      this.stage++;
    },
    regressStage() {
      if (this.stage === 0) {
        this.changeEventState("normal");
      }
      else {
        this.stage--;
      }
    }
  },
  props: ["eventState"],
  data() {
    return {
      eventTime: "",
      eventDate: "",
      eventName: "",
      eventDescription: "",
      stages: ["Event Details", "Location", "Description"], //Possible values are Event Details, Location, and Description
      stage: 0
    }
  },
}
</script>


<style scoped>
.container {
  background-color: white;
  box-shadow: 3px 3px 3px rgb(232, 232, 232);
}

</style>
