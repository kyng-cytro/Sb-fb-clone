<template>
  <div>
    <div>
        <p>Events</p>
      </div>
      <div class="eventDisplay">
        <div class="square" v-for="event in events" :key="event.name">
            <EventSquare v-bind:event="event"/>
        </div>
    </div>
  </div>
</template>

<script>
import EventSquare from './EventSquare.vue';

const events = [
  {
    imgSrc: "basket.jpg",
    name: "Basket Weaving",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: 21,
    numGoing: 52
  },
  {
    imgSrc: "chiliCookOff.jpg",
    name: "Chili Cookoff",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: "9.3K",
    numGoing: 523
  },
  {
    imgSrc: "library.jpg",
    name: "Reading Club",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: 23,
    numGoing: 7
  },
];



export default {
  name: "eventDisplay",
  components: {
    EventSquare

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
