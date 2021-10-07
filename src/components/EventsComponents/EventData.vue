<template>
  <div>
    <CalendarIcon :date="event.date" />
    <div>
      <div id="headerInfo">
        <strong class="dateText">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
        <h1 class="placeholder" v-if="event.name === ''">Event name</h1>
        <h1 v-else>{{event.name}}</h1>
        <p id="location">{{event.location}}</p>
      </div>
      <div v-if="eventState==='eventCreated'">
          <button class="btn btn-secondary" @click="() => togglePopup('emailTrigger')">Email</button>
          <button class="btn btn-secondary">Text</button>
          <button class="btn btn-secondary">Invite</button>
          <button class="btn btn-secondary">Edit</button>
          <!-- <v-btn flat slot="activator" class="success">Test</v-btn> -->
      </div>
      <div v-else id="inviteBox">
          <p><strong>{You} </strong>invited you</p>
          <button class="btn btn-secondary">Going</button>
          <button class="btn btn-secondary">Maybe</button>
          <button class="btn btn-secondary">Can't Go</button>
          <button class="btn btn-secondary">Invite</button>
      </div>
    </div>
    <div id="details">
      <div id="previewBox">
        <h3>Details</h3>
        <p>1 person going, including {you}</p>
        <strong>{{event.location}}</strong>
        <p>Todo: potentially include privacy</p>
        <p>{{event.description}}</p>
      </div>
      <div id="previewBox">
        <div>
            <strong>1</strong>
            <p>GOING</p>
        </div>
        <div>
            <strong>0</strong>
            <p>MAYBE</p>
        </div>
        <div>
            <strong>0</strong>
            <p>INVITED</p>
        </div>
      </div>
    </div>
  <CloseButtonComponent />
  <PopupDialog v-show="this.popupTriggers['emailTrigger']" :togglePopup="() => togglePopup('emailTrigger')">
    <h2>My Popup!</h2>
  </PopupDialog>
  <button >Open Email Popup</button>
  </div>
</template>

<script>
// import EmailDialog from './DialogBoxes/EmailDialog.vue';
import PopupDialog from './DialogBoxes/PopupDialog.vue'
import CalendarIcon from './EventDataComponents/CalendarIcon.vue'

export default {
  name: "Events",
  components: {
    PopupDialog,
    CalendarIcon
  },
  props: ["event", "eventState"],
  data() {
    return {
      dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
      timeFormatting: { hour: "numeric", minute: "2-digit"},
      popupTriggers: {
        emailTrigger: false,
        //Add other values here
      }
    }
  },
  methods: {
    togglePopup(trigger) {
      //Invert the value passed in with trigger
      this.popupTriggers[trigger] = !this.popupTriggers[trigger];
      // console.log(trigger);
    }
  },
};
</script>

<style scoped>
div {
  border-radius: 5px;
}
  .placeholder {
    color: rgb(196, 196, 196);
  }
  .dateText {
    font-size: 0.9em;
    color: rgb(224, 49, 49);
  }
  #preview {
    margin: 25px;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 0px 8px rgb(196, 195, 195);
  }
  #previewBox {
    border-style: solid;
    border-color: rgb(236, 232, 232);
    border-width: thin;
    margin: 10px;
    outline-color: black;
    padding: 30px;
    box-shadow: 0px 2px 4px rgb(214, 211, 211);
    background-color: white;
  }
  #inviteBox {

    background-color: rgb(224, 224, 224);
  }
  #details {
    background-color: rgb(224, 221, 221);
    margin: 20px;
    padding: 10px;
    display: flex;
  }
  button {
    background-color: rgb(199, 196, 196);
    border-color: rgb(199, 196, 196);
    color: black;
    margin: 5px;
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
</style>
