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
        <input type="checkbox" id="checkbox" v-model="facebookLight" v-on:change="update()">
      </td>
    </tr>
    <SidebarButton type="friends" />
    <SidebarButton type="groups" />
    <SidebarButton type="events" />
    <SidebarButton v-show="!getFaceLight" type="marketplace" />
    <SidebarButton v-show="!getFaceLight" type="watch" />
    <SidebarButton v-show="!getFaceLight" type="memories" />
    <SidebarButton v-show="!getFaceLight" type="saved" />
    <SidebarButton v-show="!getFaceLight" type="pages" />
    <SidebarButton v-show="!getFaceLight" type="news" />
    <!-- <SidebarButton v-show="!facebookLight" type="marketplace" />
    <SidebarButton v-show="!facebookLight" type="watch" />
    <SidebarButton v-show="!facebookLight" type="memories" />
    <SidebarButton v-show="!facebookLight" type="saved" />
    <SidebarButton v-show="!facebookLight" type="pages" />
    <SidebarButton v-show="!facebookLight" type="news" /> -->
    <SidebarButton type="favorites" />
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
    }) 
   // console.log(faceLight.find(1));
  }, 
    methods: {
      update(){
      faceLight.update({
        where: 1,
        data: {
          enabled: (!this.getFaceLight)
        }
      })
        // console.log(this.getFaceLight);

        // console.log(faceLight.find(1));
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
