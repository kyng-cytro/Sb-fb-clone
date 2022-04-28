<template>
  <div id="App">
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    />
    <Topbar v-if="isUserLoggedIn" />
    <router-view id="fillWidth" />
  </div>
</template>

<script>
  import Topbar from "@/components/TopbarComponents/Topbar.vue";
  import { DataPopulation } from "@/mixins/DataPopulation.js";
  import { UserPopulation } from "@/mixins/UserPopulation";
  import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";

  export default {
    name: "App",
    mixins: [DataPopulation, UserPopulation],
    components: {
      Topbar
    },
    created() {
      // POPULATE VUEX-ORM DATA
      this.setFaceookLite();
      this.populatePosts();
      
      FacebookLite.insert({
        data: { id: 1, enabled: false },
      });
    },
  };
</script>

<style>
  .App {
    text-align: center;
    width: 100%;
    height: 100vw;
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

  #fillWidth {
    width: 100vw;
    height: 100%;
  }
</style>
