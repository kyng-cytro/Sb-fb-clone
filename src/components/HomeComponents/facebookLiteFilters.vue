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
        <input
          type="checkbox"
          id="checkbox"
          v-model="last3Days"
          v-on:change="updateFilters()"
        />
        Last 3 days
      </tr>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="lastWeek"
          v-on:change="updateFilters()"
        />
        Last week
      </tr>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="last2Weeks"
          v-on:change="updateFilters()"
        />
        Last two weeks
      </tr>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="lastMonth"
          v-on:change="updateFilters()"
        />
        Last month
      </tr>
      <th>tags</th>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="majorEvents"
          v-on:change="updateFilters()"
        />
        Major Event
      </tr>
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
        Vacations
      </tr>
    </table>
    <p v-show="getFilters.majorEvents">Can you see me?</p>
  </div>
</template>

<script>
import HomeSidebar from "./Sidebar/HomeSidebar.vue";
import faceLight from "@/classes/faceLight.js";
import FiltersValues from "@/classes/filterValues.js";

export default {
  name: "facebookLiteFilters",
  data() {
    return {
      facebookLight: HomeSidebar.facebookLight,
      majorEvents: false,
      last3Days: false,
      lastWeek: false,
      last2Weeks: false,
      lastMonth: false,
    };
  },
  computed: {
    getFaceLight() {
      return faceLight.find(1).enabled;
    },
    getFilters() {
      return FiltersValues.find(1); 
    },
  },

  created() {
    FiltersValues.insert({
      data: { id: 1 },
    });
  },
  methods: {
    updateFilters() {
      FiltersValues.update({
        where: 1,
        data: {
          majorEvents: this.majorEvents,
          lastThreeDays: this.last3Days,
          lastWeek: this.lastWeek,
          lastTwoWeeks: this.last2Weeks,
          lastMonth: this.lastMonth,
        },
      });
      console.log(this.getFilters);

      console.log(FiltersValues.find(1));
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
