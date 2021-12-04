<template>
  <div id="nav">
    <tr class="facebookEnableBox">
      <td>
        <p>Facebook Lite:</p>
      </td>
      <td>
        <toggle-button
          class="toggle"
          :value="true"
          v-model="facebookLight"
          height="27"
          color="#1877F2"
        />
      </td>
    </tr>
    <div v-for="type in this.facebookLightButtons" :key="type">
      <SidebarButton :type="type" />
    </div>

    <div v-for="type in this.facebookButtons" :key="type">
      <SidebarButton :type="type" />
    </div>
  </div>
</template>

<script>
  import ToggleButton from "vue-js-toggle-button";
  import SidebarButton from "./SidebarButton.vue";
  import Vue from "vue";
  import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";

  Vue.use(ToggleButton);

  export default {
    name: "Sidebar",
    components: {
      SidebarButton,
    },
    data() {
      return {
        facebookLight: false,
        facebookLightButtons: null,
        facebookButtons: null,
      };
    },
    computed: {
      getFacebookLite() {
        return FacebookLite.find(1).enabled;
      },
    },
    created() {
      FacebookLite.insert({
        data: { id: 1, enabled: false },
      });
      this.facebookLightButtons = ["friends", "groups", "events", "favorites"];
      this.facebookButtons = [
        "marketplace",
        "watch",
        "memories",
        "saved",
        "pages",
        "news",
      ];
    },
    watch: {
      facebookLight: function () {
        FacebookLite.update({
          where: 1,
          data: {
            enabled: !this.getFacebookLite,
          },
        });
      },
    },
  };
</script>
<style scoped>
  #nav {
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 20vw;
  }

  /* .facebookEnableBox {
    border-color: rgb(212, 212, 212);
    border-width: 1px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgb(140, 140, 140);
  } */

  .toggle {
    padding-left: 30%;
    padding-top: 10%;
  }
  input {
    margin: 8px;
  }
  toggle-button {
    margin-left: 1%;
  }
</style>
