<template>
  <div id="container">
    <CalendarIcon :date="new Date(event.date)" />
    <div id="headerInfo">
      <br />
      <strong class="dateText"
        >{{
          new Date(event.date)
            .toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
            .toUpperCase()
        }}
        AT
        {{ getTime(new Date(`1 ${event.time}`).toLocaleTimeString()) }}</strong
      >
      <h1 class="holder" v-if="event.name === ''">Event name</h1>
      <h1 v-else>{{ event.name }}</h1>
      <p class="holder" v-if="event.location === ''">Location</p>
      <p id="location">{{ event.location }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
import CalendarIcon from './CalendarIcon.vue'
import { dateProcessing } from '@/mixins/DateProcessing.js'

export default {
  mixins: [dateProcessing],
  props: ['event'],
  components: {
    CalendarIcon,
  },
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

.holder {
  color: rgb(196, 196, 196);
}
.dateText {
  font-size: 1.1em;
  font-weight: bold;
  color: rgb(243, 66, 95);
}
</style>
