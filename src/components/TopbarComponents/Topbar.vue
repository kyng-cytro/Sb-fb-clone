<template>
    <nav class="topbar">
      <div>
        <img id="logo" src = "@/assets/images/facebook.png" />
        <Link class="navbar-brand" to="/">
          Facebook Lite
        </Link>
      </div>
      <div id="icons">
        <CircularIcon type = "plus"/>
        <CircularIcon type = "messenger"/>
        <CircularIcon type = "notifications"/>
        <CircularIcon type = "triangle"/>
      </div>
    </nav>
</template>

<script>

import CircularIcon from "./TopbarIcon"
export default {
  name: "Topbar",
  components: {
    CircularIcon
  }
}
</script>


<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  height: 55px;
  background-color: white;
  box-shadow: 0px 1px 3px #d8d5d5;
  padding: 5px 5px 5px 14px;
  position: relative; /*This is done so that the shadow will appear above the Home component*/
  z-index: 10
}

#icons {
  display: flex;
}

#logo {
  margin: 0px 20px 10px 0px;
  width: 40px;
  height: 40px;
}
</style>
