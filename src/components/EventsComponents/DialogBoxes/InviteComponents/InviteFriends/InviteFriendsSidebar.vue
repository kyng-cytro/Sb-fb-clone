<template>
    <div class="container">
        <button id="selected">Suggested</button>
        <button>All Friends</button>
        <h3>EVENTS I ATTENDED</h3>
        <button v-for="event in eventsAttended" :key="event">{{event}}</button>
        <h3>MY GROUPS</h3>
 </div>
</template>

<script>
const eventsAttended = [
    "Example event 1",
    "Example event 2",
    "Example event 3",
    "Example event 4",
    "Example event 5"
]
    export default {
       data() {
           return {
               eventsAttended: eventsAttended
           }
       } 
    }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 300px;
}

h3 {
    color: rgb(101,103,107);
    font-weight: bold;
    font-size: 0.85em;
    margin-top:9px;
    margin-bottom:9px;
}

button {
    color: grey;
    border: 0px;
    padding: 6px;
    padding-left: 8px;
    background-color: transparent;
    text-align: left;
    border-radius: 7px;
}

button:hover {
    background-color: rgb(245, 245, 245);
}

button:focus {
    color:rgb(26,119,242);
    background-color: rgb(229,229,229);
    outline: none;
}
#selected {
    color:rgb(26,119,242);
    background-color: rgb(229,229,229);
    outline: none;
}
</style>