<template>
  <div class="filter" v-show="getFaceLight">
    <h3 style="text-align: center">Filters</h3>
    <table>
      <th>People</th>
      <tr>
        <input 
          type="checkbox"
          id="checkbox"
          v-model="isFamily"
          v-on:change="updateFilters()"
          />
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
          v-model="isMajorEvent"
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
  </div>
</template>

<script>
import faceLight from "@/classes/faceLight.js";
import FiltersValues from "@/classes/filterValues.js";

export default {
  name: "facebookLiteFilters",
  data() {
    return {
      isFamily: true,
      isMajorEvent: true,
      last3Days: true,
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
    this.updateFilters();
  },
  methods: {
    updateFilters() {
      // TODO: it seems that we might want to store the family filter in the friend object
      FiltersValues.update({
        where: 1,
        data: {
          isFamily: this.isFamily,
          isMajorEvent: this.isMajorEvent,
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
  width: 200px;
  border-radius: 10px;
  margin: 10%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
  padding: 15px;
}
</style>
