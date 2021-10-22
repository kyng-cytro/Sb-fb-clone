
<!--import {TopBar, NavigationSidebar, Home, Friends, Groups, Favorites, Events } from "./index.js";
-->

<template>


  <div id="App">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <Topbar />
    <PopulateFriends />
    <router-view />
  </div>

</template>

<script>
import Topbar from "@/components/TopbarComponents/Topbar";
import PopulateFriends from "@/PopulateFriends.vue";

export default {
  name: "App",
  components: {
    Topbar,
    PopulateFriends
  }
}
</script>

<style>
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}




</style>
