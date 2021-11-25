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
    <SidebarButton v-show="!getFacebookLite" type="marketplace" />
    <SidebarButton v-show="!getFacebookLite" type="watch" />
    <SidebarButton v-show="!getFacebookLite" type="memories" />
    <SidebarButton v-show="!getFacebookLite" type="saved" />
    <SidebarButton v-show="!getFacebookLite" type="pages" />
    <SidebarButton v-show="!getFacebookLite" type="news" />
    <SidebarButton type="favorites" /> -->
  </div>
</template>

<script>
  import SidebarButton from "./SidebarButton.vue";
  import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";

 
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
      getFacebookLite(){
        return FacebookLite.find(1).enabled;
      }
    },
     created () {
      FacebookLite.insert({
        data: { id: 1, enabled: false }
      });
      this.facebookLightButtons = ["friends", "groups", "events", "favorites"];
      this.facebookButtons = ["marketplace", "watch", "memories", "saved", "pages", "news"];
  }, 
    methods: {
      update(){
      FacebookLite.update({
        where: 1,
        data: {
          enabled: (!this.getFacebookLite)
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
