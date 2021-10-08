<template>
  <div id="sidebar">
      <div class="container">
        <div v-if="eventState==='normal' || eventState==='eventCreated'" class = "sidebar-buttons-container">
          <PageSidebarButton iconName = "home" text = "Home" />
          <PageSidebarButton iconName = "yourEvents" text = "Your Events" />
          <PageSidebarButton iconName = "birthdays" text = "Birthdays" />
          <PageSidebarButton iconName = "notifications" text = "Notifications" />
          <button id="createNewEventButton" v-on:click="changeEventState('editing')">＋ Create New Event</button>
        </div>
        <div v-else-if="eventState === 'editing'">
          <h1>{{stages[stage]}}</h1>
          <div v-if="stages[stage] === 'Event Details'">
            <input v-model="eventName" placeholder="Event name" v-on:input="updateName">
            <datepicker v-model="eventDate" :bootstrap-styling="true" v-on:input="updateDate">
              <div slot="beforeCalendarHeader" class="calender-header">
              </div>
            </datepicker>
            <vue-timepicker v-model="eventTime" manual-input format="h:mm A" v-on:input="updateTime"></vue-timepicker>
          </div>
          <div v-else-if="stages[stage] === 'Location'">
              <textarea v-model="eventLocation" v-on:input="updateLocation" placeholder="Location"></textarea>
          </div>
          <div v-else-if="stages[stage] === 'Description'">
              <textarea v-model="eventDescription" v-on:input="updateDescription" placeholder="Description"></textarea>
          </div>
        </div>
        <div id="navigationButtons">
          <button v-on:click="regressStage()" class="btn-secondary">Back</button>
          <button id="nextButton" v-on:click="progressStage()" class="btn-secondary">Next</button>
        </div>
      </div>
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
      this.$emit('dateChange', this.eventDate);
    },
    updateTime() {
      this.$emit('timeChange', this.eventTime);
    },
    updateLocation() {
      this.$emit('locationChange', this.eventLocation);
    },
    updateDescription() {
      this.$emit('descriptionChange', this.eventDescription);
    },
    progressStage() {
      if (this.stage === this.stages.length - 1) {
        this.changeEventState("eventCreated");
      } else {
        this.stage++;
      }
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
      eventLocation: "",
      eventDescription: "",
      stages: ["Event Details", "Location", "Description"], //Possible values are Event Details, Location, and Description
      stage: 0
    }
  },
}
</script>


<style scoped>
#sidebar {
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}

.container {
  background-color: white;
  box-shadow: 3px 3px 3px rgb(232, 232, 232);
  width: 350px;
  padding: 10px;
}

#createNewEventButton {
  width: 100%;
  height: 40px;
  border: rgba(235, 30, 137, 0);
  border-radius: 5px;
  background-color: rgb(231,243,255);
  font-weight: bold;
  color: rgb(24,119,242);
}

#createNewEventButton:hover {
  background-color: rgb(225, 239, 240);
  transition: 0.3s;
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

#navigationButtons {
  width: 100%;
  display: flex;
}
#nextButton {
  width: 100%;
}
</style>
