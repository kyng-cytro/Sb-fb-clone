<template>
  <div id="preview">
    <div id="date">
      <div id="redBar">
        <h1 id="dayText">
          {{event.date.toLocaleDateString("en-US", {day: 'numeric'})}}
        </h1>
      </div>
    </div>
    <strong class="dateText">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
    <h1 class="placeholder" v-if="event.name === ''">Event name</h1>
    <h1 v-else>{{event.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "Events",
  components: {
  },
  props: ["event"],
  data() {
    return {
      dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
      timeFormatting: { hour: "numeric", minute: "2-digit"}
    }
  }
};
</script>

<style scoped>
  .placeholder {
    color: rgb(196, 196, 196);
  }
  .dateText {
    font-size: 0.9em;
    color: rgb(224, 49, 49);
  }
  #preview {
    margin: 30px;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgb(196, 195, 195);
  }
  #date {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    box-shadow: 0px 0px 12px rgb(217, 217, 217);
  }
  #redBar {
    height: 20px;
    background-color: rgb(247, 79, 79);
    border-radius: 8px 8px 0px 0px;
  }
  #idText {
    font-weight: bold;
  }
</style>
