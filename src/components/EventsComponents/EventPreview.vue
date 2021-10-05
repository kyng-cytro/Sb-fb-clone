<template>
  <div id="preview">
    <strong>Desktop Preview</strong>
    <div id="previewBox">
      <EventData :event="event" />
    </div>
  </div>
</template>

<script>
import EventData from "./EventData.vue";

export default {
  name: "Events",
  components: {
    EventData
  },
  props: ["event", "eventState"],
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
    background-color: rgb(217, 217, 217);
    margin: 20px;
    padding: 10px;
  }
  button {
    background-color: rgb(199, 196, 196);
    border-color: rgb(199, 196, 196);
    color: black;
    margin: 5px;
  }
</style>
