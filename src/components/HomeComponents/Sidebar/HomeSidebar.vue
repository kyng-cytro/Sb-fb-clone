<template>
  <div id="nav">
    <tr>
      <td>
        <p>Enable Facebook Lite  </p>
      </td>
      <td>
        <input type="checkbox" id="checkbox" v-model="facebookLight" v-on:change="update()">
      </td>
    </tr>
    <div v-for="type in this.facebookLightButtons" :key="type">
      <SidebarButton :type="type"/>
    </div>

    <div v-for="type in this.facebookButtons" :key="type">
      <SidebarButton :type="type"/>
    </div>
    <!-- <SidebarButton type="friends" />
    <SidebarButton type="groups" />
    <SidebarButton type="events" />
    <SidebarButton v-show="!getFaceLight" type="marketplace" />
    <SidebarButton v-show="!getFaceLight" type="watch" />
    <SidebarButton v-show="!getFaceLight" type="memories" />
    <SidebarButton v-show="!getFaceLight" type="saved" />
    <SidebarButton v-show="!getFaceLight" type="pages" />
    <SidebarButton v-show="!getFaceLight" type="news" />
    <SidebarButton type="favorites" /> -->
  </div>
</template>

<script>
  import SidebarButton from "./SidebarButton.vue";
  import faceLight from "@/classes/faceLight.js";

 
  export default {
    name: "Sidebar",
    components: {
      SidebarButton
    },
    data() {
      return {
        facebookLight: false,
        facebookLightButtons: null,
        facebookButtons: null,
      }
    },
    computed:  {
      getFaceLight(){
        return faceLight.find(1).enabled;
      }
    },
     created () {
      faceLight.insert({
        data: { id: 1, enabled: false }
      });
      this.facebookLightButtons = ["friends", "groups", "events", "favorites"];
      this.facebookButtons = ["marketplace", "watch", "memories", "saved", "pages", "news"];
  }, 
    methods: {
      update(){
      faceLight.update({
        where: 1,
        data: {
          enabled: (!this.getFaceLight)
        }
      })
    }
  }
  }
</script>
<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 20vw;
}

input {
  margin: 8px;
}
</style>
