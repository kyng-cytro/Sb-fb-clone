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
    /* padding: 30px; */
    box-shadow: 0px 2px 4px rgb(214, 211, 211);
  }
</style>
