<template>
  <nav class="topbar">
    <div>
      <img id="logo" src="@/assets/images/facebook.png" />
      <router-link to="/" class="title">
        <span v-if="this.$root.$data.fbLiteEnabled">Facebook Lite</span>
        <span v-else>Facebook</span>
      </router-link>
    </div>
    <div id="icons">
      <router-link :to="'/ResearcherReview'">
        <button class="invisible">Add Friend Request</button>
      </router-link>
      <router-link :to="'/FriendEntry'"
        ><button class="btn btn-primary">Friend Entry</button></router-link
      >
      <CircularIcon type="plus" />
      <CircularIcon type="messenger" />
      <CircularIcon type="notifications" />
      <CircularIcon type="triangle" />
    </div>
  </nav>
</template>

<script>
import CircularIcon from './TopbarIcon'
export default {
  name: 'TopBar',
  components: {
    CircularIcon,
  },
}
</script>

<style scoped>
button {
  margin-top: 5px;
  margin-right: 10px;
}
.title {
  font-size: 1.4em;
}
.title:hover {
  text-decoration: none;
}

.topbar {
  display: flex;
  justify-content: space-between;
  /* height: 5.5vh; */
  height: 55px;
  background-color: white;
  box-shadow: 0px 1px 3px #d8d5d5;
  padding: 5px 5px 5px 14px;
  position: relative; /*This is done so that the shadow will appear above the Home component*/
  z-index: 10;
}

#icons {
  display: flex;
  margin-right: 2vw;
}

#logo {
  margin: 0px 20px 10px 0px;
  width: 40px;
  height: 40px;
}
</style>
