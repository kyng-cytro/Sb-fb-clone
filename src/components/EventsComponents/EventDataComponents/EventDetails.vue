<template>
    <div id="details">
      <div id="previewBox">
        <h3>Details</h3>
        <p>
          <i class="bi bi-people-fill" style="color: grey"></i>
          1 person going, including {you}
          </p>
        <strong>{{event.location}}</strong>
        <p>Todo: potentially include privacy</p>
        <p>{{event.description}}</p>
      </div>
      <div id="previewBox">
        <EventAttendance :numInvited="0"/>
        <!-- TODO: have this dynamically update as you invite people -->
      </div>
    </div>
</template>

<script>
import EventAttendance from "./EventAttendance.vue"

export default {
    components: {
        EventAttendance
    },
    props: ['event']
}
</script>

<style scoped>
  #details {
    background-color: rgb(247, 243, 243);
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
  }
  #previewBox {
    border-style: solid;
    border-radius: 8px;
    border-color: rgb(236, 232, 232);
    border-width: thin;
    margin: 10px;
    outline-color: black;
    padding: 30px;
    box-shadow: 0px 2px 4px rgb(214, 211, 211);
    background-color: white;
  }
</style>