
<!--import {TopBar, NavigationSidebar, Home, Friends, Groups, Favorites, Events } from "./index.js";
-->
<template>
  <div id="App">
    <Topbar />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/Friends">Friends</router-link>
      <router-link to="/Events">Events</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Topbar from "@/components/TopbarComponents/Topbar";
export default {
  name: "App",
  components: {
    Topbar
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
