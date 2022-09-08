<template>
  <div class="eventSquare">
    <img
      class="eventPic"
      :src="require('@/assets/images/EventImages/' + event.imageSource)"
    />
    <div class="info">
      <strong id="date">{{ event.date }}</strong>
      <br />
      <strong id="name">{{ event.name }}</strong>
      <br />
      <em>{{
        event.numInterested + ' Interested · ' + event.numGoing + ' Going'
      }}</em>
      <div>
        <button type="button" class="btn btn-secondary">Interested</button>
        <button type="button" class="btn btn-secondary">Share</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-square',
  props: ['event'],
}
</script>

<style scoped>
.eventSquare {
  /* box-shadow: 0px 0px 3px; */
  width: 100%;
  border-radius: 10px;
  margin: 10%;
  /* padding: 10%; */
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}

.eventPic {
  width: 350px;
  height: 180px;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  border-radius: 10px 10px 0px 0px;
}

.info {
  margin: 10px;
}

#name:hover {
  text-decoration: underline;
}

button {
  width: 90%;
  margin: 2%;
  font-weight: bold;
  font-size: 0.9em;
}

.btn-secondary {
  color: black;
  background-color: hsl(0, 0%, 92%);
  border: 0px;
}

.invisible {
  color: white;
  background-color: white;
}

#data {
  color: rgb(111, 111, 111);
  font-size: 0.9em;
}

#date {
  font-size: 0.9em;
}

em {
  color: rgb(111, 111, 111);
  font-size: 0.9em;
}
</style>
