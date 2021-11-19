<template>
  <div id="sidebar">
      <div class="container">
        <div v-if="eventState==='normal' || eventState==='eventCreated'" class = "sidebar-buttons-container">
          <PageSidebarButton iconName = "calendar-check" text = "Home" />
          <PageSidebarButton iconName = "person-circle" text = "Your Events" />
          <PageSidebarButton iconName = "gift" text = "Birthdays" />
          <PageSidebarButton iconName = "bell-fill" text = "Notifications" />
          <br>
          <button class="enabledButton" v-on:click="changeEventState('editing')">＋ Create New Event</button>
        </div>
        <div v-else-if="eventState === 'editing'">
          <p>Event > Create Event</p>
          <h1>{{stages[stage]}}</h1>
          <div v-if="stages[stage] === 'Event Details'">
            <div class="input">
              <md-field>
                <label>Event name</label>
                <md-input v-model="eventName" md-counter="100"></md-input>
              </md-field>
            </div>
            <div id="dateAndTime">
              <input type="date" id="startDate" name="startDate" />
              <input type="date" data-date="" data-date-format="MMMM YYYY" value="2015-08-09">
              <!-- <div class="input">
                <md-datepicker style="width: 130px" v-model="eventDate" v-on:input="updateDate">
                  <label>Start Date</label>
                </md-datepicker>
              </div> -->
              <div class="input timePicker">
                <EventTimePicker v-on:updateTime="updateTime"/>
              </div>
            </div>
          </div>
          <div v-else-if="stages[stage] === 'Location'">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <md-field>
                <label>Location</label>
                <md-textarea v-model="eventLocation" v-on:input="updateLocation"></md-textarea>
              </md-field>
          </div>
          <div v-else-if="stages[stage] === 'Description'">
              <md-field>
                <label>Description</label>
                <md-textarea v-model="eventDescription" v-on:input="updateDescription"></md-textarea>
              </md-field>
          </div>
        </div>

        <div id="footer">
          <hr />
          <div id="navigationButtons" v-show="eventState === 'editing'">
            <button v-on:click="regressStage()" class="btn-secondary">Back</button>
            <button :class="{enabledButton : this.nextEnabled, disabledButton : !this.nextEnabled}" v-on:click="progressStage()" class="btn-secondary">Next</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";
import EventTimePicker from './EventsSidebarComponents/EventTimePicker.vue';

//MATERIAL IMPORTS:
// import Vue from 'vue'
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// import 'vue-material/dist/theme/default.css'

// Vue.use(VueMaterial)

export default {
  name: "EventsSidebar",
  components: {
    PageSidebarButton,
    EventTimePicker,
  },
  mounted() {
    this.$root.$on('timeUpdated', () => {
      this.togglePopup("friendsTrigger");
    });
  },
  computed: {
    nextEnabled() {
      if (this.stage == 0) {
        console.log(this.eventName.length && this.eventTime.length && this.eventDate);
        return this.eventName.length && this.eventTime.length && this.eventDate;
      }
      else if (this.stage == 1) {
        return this.eventLocation.length > 0;
      }
      else {
        return this.eventDescription.length > 0;
      }
    }
  },
  methods: {
    changeEventState(newState) {
      this.$emit('stateChange', newState);
    },
    updateName() {
      this.$emit('nameChange', this.eventName);
    },
    updateDate() { //Here, we simply emit the string representation of the date. Events.vue converts this to a JS Date object
      console.log("Updating the date!");
      this.$emit('dateChange', this.eventDate);
    },
    updateTime(newTime) {
      this.eventTime = newTime;
      this.$emit('timeChange', newTime);
    },
    updateLocation() {
      this.$emit('locationChange', this.eventLocation);
    },
    updateDescription() {
      this.$emit('descriptionChange', this.eventDescription);
    },
    progressStage() {
      if (this.nextEnabled) {
        if (this.stage === this.stages.length - 1) {
          this.changeEventState("eventCreated");
        } else {
          this.stage++;
        }
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

.disabledButton {
    width: 100%;
    background-color: rgb(228,230,235);
    color: rgb(116, 116, 116) !important;
    cursor: not-allowed;
}
.disabledButton:hover {
    /* Same as parent */
    background-color: rgb(228,230,235);
    color: rgb(188,192,196);
}
.enabledButton {
  width: 100%;
  height: 40px;
  border: rgba(235, 30, 137, 0);
  border-radius: 5px;
  background-color: rgb(24,119,242) !important;
  font-weight: bold;
  color: white !important;
}

#enabledButton:hover {
  background-color: rgb(41, 112, 204);
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

.timePicker {
  width: 140px;
  z-index: 5;
}
</style>
