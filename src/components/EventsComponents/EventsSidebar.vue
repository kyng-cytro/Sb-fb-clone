<template>
  <div id="sidebar">
      <div class="container">
        <div v-if="eventState==='normal' || eventState==='eventCreated'" class = "sidebar-buttons-container">
          <PageSidebarButton iconName = "calendar-check" text = "Home" />
          <PageSidebarButton iconName = "person-circle" text = "Your Events" />
          <PageSidebarButton iconName = "gift" text = "Birthdays" />
          <PageSidebarButton iconName = "bell-fill" text = "Notifications" />
          <button id="createNewEventButton" v-on:click="changeEventState('editing')">＋ Create New Event</button>
        </div>
        <div v-else-if="eventState === 'editing'">
          <p>Event > Create Event</p>
          <h1>{{stages[stage]}}</h1>
          <div v-if="stages[stage] === 'Event Details'">
            <!-- The following commented out code is how the page looked before using material components -->
            <div class="input">
              <md-field>
                <label>Event name</label>
                <md-input v-model="eventName" md-counter="100"></md-input>
              </md-field>
            </div>
            <!-- <input v-model="eventName" placeholder="Event name" v-on:input="updateName"> -->
            <div id="dateAndTime">
              <div class="input">
                <md-datepicker style="width: 130px" v-model="eventDate" v-on:input="updateDate">
                  <label>Start Date</label>
                </md-datepicker>
              </div>
              <!-- <datepicker v-model="eventDate" :bootstrap-styling="true" v-on:input="updateDate">
                <div slot="beforeCalendarHeader" class="calender-header">
                </div>
              </datepicker> -->
              <div class="input">
                <!-- <vue-timepicker id="timePicker" v-model="eventTime" manual-input format="h:mm A" v-on:input="updateTime">Select time</vue-timepicker> -->
                <EventTimePicker />

              </div>
            </div>
          </div>
          <div v-else-if="stages[stage] === 'Location'">
              <textarea v-model="eventLocation" v-on:input="updateLocation" placeholder="Location"></textarea>
          </div>
          <div v-else-if="stages[stage] === 'Description'">
              <textarea v-model="eventDescription" v-on:input="updateDescription" placeholder="Description"></textarea>
          </div>
        </div>
        <div id="navigationButtons" v-show="eventState === 'editing'">
          <hr />
          <button v-on:click="regressStage()" class="btn-secondary">Back</button>
          <button id="nextButton" v-on:click="progressStage()" class="btn-secondary">Next</button>
        </div>
      </div>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";
// import Datepicker from 'vuejs-datepicker';
// import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue';
import EventTimePicker from './EventTimePicker.vue';

//MATERIAL IMPORTS:
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

export default {
  name: "EventsSidebar",
  components: {
    PageSidebarButton,
    // Datepicker,
    // VueTimepicker,
    EventTimePicker
  },
  methods: {
    changeEventState(newState) {
      this.$emit('stateChange', newState);
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
  /* 55px is the height of the topbar, so this calculates the height the sidebar should be */
  height: calc(100vh - 55px); 

  display: flex;
  align-items: stretch;
  justify-content: space-around;
}

.container {
  background-color: white;
  width: 350px;
  padding: 10px;
  z-index: 9;
  box-shadow: 2px 0px 3px #d6d6d6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input {
  padding: 10px;
  margin: 10px;
  /* height: 30px; */
  border-radius: 5px;
  border:1px solid rgb(231, 231, 231);
}

.input:hover {
  border:1px solid rgb(196, 196, 196);
}

#dateAndTime {
  display: flex;
}

md-datepicker {
  width: 1px;
}
#timePicker {
  width: 10px;
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

h1 {
  margin-left: 9px;
  font-weight: bold;
  font-size: 1.4em;
}

p {
  color: grey;
  font-size: 0.8em;
  margin: 0px;
  margin-left: 9px;
}
</style>
