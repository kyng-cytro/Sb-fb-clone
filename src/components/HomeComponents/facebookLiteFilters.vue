<template>
  <div class="filter" v-show="getFaceLight">
    <p style="text-align: center">Filters</p>
    <table>
      <th>People</th>

      <tr>
        <input type="checkbox" id="checkbox" />
        Family
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Favorites
      </tr>

      <th>Time Period</th>
      <tr>
        <input type="checkbox" id="checkbox" />
        Last 3 days
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Last week
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Last two weeks
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Last month
      </tr>
      <th>tags</th>
      <tr>
        <input type="checkbox" id="checkbox" />
        wedding
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Engagements
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Birthdays
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Family
      </tr>
      <tr>
        <input type="checkbox" id="checkbox" />
        Vacations
      </tr>
    </table>
  </div>
</template>

<script>
import HomeSidebar from "./Sidebar/HomeSidebar.vue";
import faceLight from "@/classes/faceLight.js";

export default {
  name: "facebookLiteFilters",
  data() {
    return {
      facebookLight: HomeSidebar.facebookLight, //''
    };
  },
  computed: {
    getFaceLight() {
      return faceLight.find(1).enabled;
    },
  },
};
</script>

<style scoped>
.filter {
  /* box-shadow: 0px 0px 3px; */
  width: 200px;
  border-radius: 10px;
  margin: 10%;
  /* padding: 10%; */
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}
</style>
