<template>
  <div id="sidebar">
    <div class="container">
      <div
        v-if="eventState === 'normal' || eventState === 'eventCreated'"
        class="sidebar-buttons-container"
      >
        <PageSidebarButton iconName="calendar-check" text="Home" />
        <PageSidebarButton iconName="person-circle" text="Your Events" />
        <PageSidebarButton iconName="gift" text="Birthdays" />
        <PageSidebarButton iconName="bell-fill" text="Notifications" />
        <br />
        <button class="enabledButton" @click="changeEventState('editing')">
          ＋ Create New Event
        </button>
      </div>
      <div v-else-if="eventState === 'editing'">
        <p>Event > Create Event</p>

        <h1>{{ stages[stage] }}</h1>

        <!-- EVENT NAME -->
        <div v-if="stages[stage] === 'Event Details'">
          <form>
            <div class="form-group">
              <input
                type="text"
                @input="updateName"
                v-model="eventName"
                class="form-control"
                id="eventNameInput"
                aria-describedby="emailHelp"
                placeholder="Event name"
              />
            </div>
          </form>

          <!-- DATE AND TIME -->
          <div id="dateAndTime">
            <!-- Date -->
            <b-form-datepicker
              id="example-datepicker"
              v-model="eventDate"
              size="lg"
              @input="updateDate"
              class="mb-2"
              :date-format-options="{
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }"
              placeholder="Date"
            ></b-form-datepicker>

            <!-- Time -->
            <b-form-timepicker
              id="example-timepicker"
              v-model="eventTime"
              size="lg"
              @input="updateTime"
              class="mb-2"
              placeholder="Time"
            ></b-form-timepicker>
          </div>
        </div>

        <!-- LOCATION -->
        <div v-else-if="stages[stage] === 'Location'">
          <div class="form-group">
            <textarea
              v-model="eventLocation"
              @input="updateLocation"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>

        <!-- DESCRIPTION -->
        <div v-else-if="stages[stage] === 'Description'">
          <div class="form-group">
            <textarea
              v-model="eventDescription"
              @input="updateDescription"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div id="footer">
        <hr />
        <div id="navigationButtons" v-show="eventState === 'editing'">
          <button @click="regressStage()" class="btn-secondary">Back</button>
          <button
            :class="{
              enabledButton: this.nextEnabled,
              disabledButton: !this.nextEnabled,
            }"
            @click="progressStage()"
            class="btn-secondary"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageSidebarButton from '@/components/PageSidebarButton.vue'
import UserEvent from '@/vuex-orm_models/EventModel.js'

export default {
  name: 'EventsSidebar',
  components: {
    PageSidebarButton,
  },
  mounted() {
    this.$root.$on('timeUpdated', () => {
      this.togglePopup('friendsTrigger')
    })
  },
  computed: {
    nextEnabled() {
      if (this.stage == 0) {
        return this.eventName.length && this.eventTime.length && this.eventDate
      } else if (this.stage == 1) {
        return this.eventLocation.length > 0
      } else {
        return this.eventDescription.length > 0
      }
    },
    hasCustomEvent() {
      return UserEvent.query().last() // Most recent event created
    },
  },
  methods: {
    changeEventState(newState) {
      this.$emit('stateChange', newState)
    },
    updateName() {
      this.$emit('nameChange', this.eventName)
    },
    updateDate() {
      this.$emit('dateChange', this.eventDate)
    },
    updateTime() {
      this.$emit('timeChange', this.eventTime)
    },
    updateLocation() {
      this.$emit('locationChange', this.eventLocation)
    },
    updateDescription() {
      this.$emit('descriptionChange', this.eventDescription)
    },
    progressStage() {
      if (this.nextEnabled) {
        if (this.stage === this.stages.length - 1) {
          this.stage = 0
          this.changeEventState('eventCreated')
        } else {
          this.stage++
        }
      }
    },
    regressStage() {
      if (this.stage === 0) {
        if (this.hasCustomEvent) {
          this.changeEventState('eventCreated')
        } else {
          this.changeEventState('normal')
        }
      } else {
        this.stage--
      }
    },
  },
  props: ['eventState'],
  data() {
    return {
      eventTime: '',
      eventDate: '',
      eventName: '',
      eventLocation: '',
      eventDescription: '',
      stages: ['Event Details', 'Location', 'Description'], //Possible values are Event Details, Location, and Description
      stage: 0,
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
  border: 1px solid rgb(231, 231, 231);
}

.input:hover {
  border: 1px solid rgb(196, 196, 196);
}

#dateAndTime {
  height: 5px;
  display: flex;
  flex-direction: row;
}

md-datepicker {
  width: 1px;
}
#timePicker {
  width: 10px;
}

.disabledButton {
  width: 100%;
  background-color: rgb(228, 230, 235);
  color: rgb(116, 116, 116) !important;
  cursor: not-allowed;
}
.disabledButton:hover {
  /* Same as parent */
  background-color: rgb(228, 230, 235);
  color: rgb(188, 192, 196);
}
.enabledButton {
  width: 100%;
  height: 40px;
  border: rgba(235, 30, 137, 0);
  border-radius: 5px;
  background-color: rgb(24, 119, 242) !important;
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
  font-size: 0.9em;
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
