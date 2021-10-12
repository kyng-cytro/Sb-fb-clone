<template>
    <div id="container">
        <CalendarIcon :date="event.date" />
        <div id="headerInfo">
            <strong class="dateText">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
            <h1 class="placeholder" v-if="event.name === ''">Event name</h1>
            <h1 v-else>{{event.name}}</h1>
            <p class="placeholder" v-if="event.location === ''">Location</p>
            <p v-else id="location">{{event.location}}</p>
      </div>
    </div>
</template>

<script>
import CalendarIcon from './CalendarIcon.vue'
export default {
    props:['event'],
    data() {
        return {
            dateFormatting: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
            timeFormatting: { hour: "numeric", minute: "2-digit"},
        }
    },
    components: {
        CalendarIcon
    }

}
</script>


<style scoped>
#container {
  padding: 18px;
  width: 100%;
}

h1 {
  font-weight: bold;
  font-size: 2em;
}
  .placeholder {
    color: rgb(196, 196, 196);
  }
  .dateText {
    font-size: 1em;
    color: rgb(243,66,95);
  }

</style>