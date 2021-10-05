<template>
  <div>
    <div id="headerInfo">
      <div id="date">
        <div id="redBar">
        </div>
        <h1 id="dayText">
          {{event.date.toLocaleDateString("en-US", {day: 'numeric'})}}
        </h1>
      </div>
      <strong class="dateText">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
      <h1 class="placeholder" v-if="event.name === ''">Event name</h1>
      <h1 v-else>{{event.name}}</h1>
      <p id="location">{{event.location}}</p>
      <div v-if="eventState==='eventCreated'">
          <button class="btn btn-secondary" @click="openEmailDialog">Email</button>
          <button class="btn btn-secondary">Text</button>
          <button class="btn btn-secondary">Invite</button>
          <button class="btn btn-secondary">Edit</button>
          <!-- <v-btn flat slot="activator" class="success">Test</v-btn> -->
          <!-- Consider using https://vuejsexamples.com/a-full-screen-modal-popup-for-vue/ for the pop up dialouges here -->
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
  </div>
</template>

<script>
// import EmailDialog from './DialogBoxes/EmailDialog.vue';
import CloseButtonComponent from './DialogBoxes/CloseButton';

const popUpStyles = {
  border: '4px solid grey',
  borderBottomLeftRadius: '25px',
  borderBottomRightRadius: '25px',
  position: "fixed",
  top: "5%",
  left: "25%",
  width: "50%",
  boxShadow: "0px 0px 10px rgb(185, 183, 183)",
  borderWidth: "0px",
  borderRadius: "10px",
};

export default {
  name: "Events",
  components: {
    CloseButtonComponent
  },
  methods: {
    openEmailDialog() {
      this.$FModal.show(
        {
          component: CloseButtonComponent,
          overlayStyles: {
              backgroundColor: 'rgba(232, 232, 232, 0.8)',
          },
          contentStyles: popUpStyles,
        },
        {
          msg: "Emails!"
        },
      );
      console.log("I'm trying to open a dialog!");
    }
  },
  props: ["event", "eventState"],
  data() {
    return {
      dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
      timeFormatting: { hour: "numeric", minute: "2-digit"}
    }
  }
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
  #date {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px rgb(217, 217, 217);
    text-align: center;
  }
  #redBar {
    height: 20px;
    background-color: rgb(247, 79, 79);
    border-radius: 8px 8px 0px 0px;
  }
  #dayText {
    font-weight: bold;
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
