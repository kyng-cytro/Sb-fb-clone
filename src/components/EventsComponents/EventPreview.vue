<template>
  <div>
    <p>This is a preview of the event.</p>
    <strong class="date">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
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
  .date {
    font-size: 0.9em;
    color: rgb(224, 49, 49);
  }
</style>
