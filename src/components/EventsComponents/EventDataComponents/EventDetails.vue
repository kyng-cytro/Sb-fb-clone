<template>
  <div id="details">
    <div id="previewBox">
      <h3>Details</h3>
      <p>
        <i class="bi bi-people-fill" style="color: grey"></i>
        1 person going, including {{ this.userName }}
      </p>
      <strong>{{ event.location }}</strong>
      <p>{{ event.description }}</p>
    </div>
    <div id="previewBox">
      <EventAttendance :eventState="eventState" />
    </div>
  </div>
</template>

<script>
import EventAttendance from './EventAttendance.vue'

import { UserPopulation } from '@/mixins/UserPopulation'
export default {
  mixins: [UserPopulation],
  components: {
    EventAttendance,
  },
  props: ['event', 'eventState'],
}
</script>

<style scoped>
#details {
  background-color: rgb(240, 242, 245);
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#previewBox {
  border-style: solid;
  border-radius: 8px;
  border-color: rgb(236, 232, 232);
  border-width: thin;
  margin: 10px;
  outline-color: black;
  padding: 20px;
  box-shadow: 0px 2px 4px rgb(214, 211, 211);
  background-color: white;
}

h3 {
  font-weight: bold;
  font-size: 1.4em;
  margin-right: 350px;
}
</style>
