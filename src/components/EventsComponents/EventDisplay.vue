<template>
  <div>
    <div>
        <p>Events</p>
      </div>
      <div class="eventDisplay">
        <div class="square" v-for="event in events" :key="event.name">
            <eventSquare v-bind:event="event"/>
        </div>
    </div>
  </div>
</template>

<script>
import eventSquare from './eventSquare.vue';

const events = [
  {
    imgSrc: "businessMan.jpg",
    name: "Miles",
    daysUntilExpiration: 29,
    numOfMutualevents: 21,
  },
  {
    imgSrc: "anson.jpg",
    name: "Anson",
    daysUntilExpiration: 29,
    numOfMutualevents: 21,
  },
];



export default {
  name: "eventDisplay",
  components: {
    eventSquare

  },
  data(){
    return {events}
  },
}

</script>


<style scoped>
.eventDisplay {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.square {
  padding: 5px;
}

</style>
