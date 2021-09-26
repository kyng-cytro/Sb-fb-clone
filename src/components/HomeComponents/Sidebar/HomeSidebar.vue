<template>
  <div id="nav">
    <!-- <router-link to="/">Home</outer-link>
    <router-link to="/Friends">Friends</router-link>
    <router-link to="/Events">Events</router-link> -->
    <tr>
      <td>
        <p>Enable Facebook Lite  </p>
      </td>
      <td>
        <input type="checkbox" id="checkbox" v-model="facebookLight">
      </td>
    </tr>
    <SidebarButton type="friends" />
    <SidebarButton type="groups" />
    <SidebarButton type="events" />
    <SidebarButton v-show="!facebookLight" type="marketplace" />
    <SidebarButton v-show="!facebookLight" type="watch" />
    <SidebarButton v-show="!facebookLight" type="memories" />
    <SidebarButton v-show="!facebookLight" type="saved" />
    <SidebarButton v-show="!facebookLight" type="pages" />
    <SidebarButton v-show="!facebookLight" type="news" />
    <SidebarButton type="favorites" />
  </div>
</template>

<script>
  import SidebarButton from "./SidebarButton.vue";
  export default {
    name: "Sidebar",
    components: {
      SidebarButton
    },
    data() {
      return {
        facebookLight: false,
      }
    }
  }
</script>
<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

input {
  margin: 8px;
}
</style>
