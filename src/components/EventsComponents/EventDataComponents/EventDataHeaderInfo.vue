<template>
    <div>
        <CalendarIcon :date="event.date" />
        <div id="headerInfo">
            <strong class="dateText">{{event.date.toLocaleDateString("en-US", dateFormatting).toUpperCase() + " AT " + event.date.toLocaleTimeString("en-US", timeFormatting)}}</strong>
            <h1 class="placeholder" v-if="event.name === ''">Event name</h1>
            <h1 v-else>{{event.name}}</h1>
            <p id="location">{{event.location}}</p>
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

<style>
  .placeholder {
    color: rgb(196, 196, 196);
  }
  .dateText {
    font-size: 0.9em;
    color: rgb(224, 49, 49);
  }

</style>