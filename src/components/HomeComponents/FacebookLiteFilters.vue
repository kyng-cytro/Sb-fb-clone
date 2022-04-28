<template>
  <div class="filter" v-show="getFacebookLite">
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
        <b-dropdown
          v-model="dropDownTimeSelection"
          boundary="scrollParent"
          id="dropdown-1"
          :text="dropDownTimeSelection"
          variant="light"
          class="m-md-2 my-class"
        >
          <b-dropdown-item
            :value="time"
            v-for="time in timeOptions"
            @click="setTime(time)"
            v-bind:key="time"
            >{{ time }}
          </b-dropdown-item>
        </b-dropdown>
      </tr>
      <th>Tags</th>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="isMajorEvent"
          v-on:change="updateFilters()"
        />
        Major Event
      </tr>
      <th>Features</th>
      <tr>
        <input
          type="checkbox"
          id="checkbox"
          v-model="isUserViewOnly"
          v-on:change="updateFilters()"
        />
        View only mode
      </tr>
      <!-- <tr>
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
      </tr> -->
    </table>
  </div>
</template>

<script>
import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";
import FiltersValues from "@/vuex-orm_models/FilterModel.js";

export default {
  name: "FacebookLiteFilters",
  data() {
    return {
      isFamily: false,
      isMajorEvent: false,
      last3Days: false,
      lastWeek: false,
      last2Weeks: false,
      lastMonth: true,
      isUserViewOnly: true,
      dropDownTimeSelection: "Last month",
    };
  },
  watch: {
    getFacebookLite: function (isEnabled) {
      if (!isEnabled) {
        //If it's now not enabled
        this.resetFilters();
      }
    },
  },
  computed: {
    getFacebookLite() {
      return FacebookLite.find(1).enabled;
    },
    getFilters() {
      return FiltersValues.find(1);
    },
    timeOptions() {
      return ["Last three days", "Last week", "Last two weeks", "Last month"];
    },
  },

  created() {
    FiltersValues.insert({
      data: { id: 1 },
    });
    this.updateFilters();
    this.setTime(this.dropDownTimeSelection);
  },
  methods: {
    setTime(option) {
      this.dropDownTimeSelection = option;
      console.log("switching the time!");
      switch (this.dropDownTimeSelection) {
        case this.timeOptions[0]:
          this.last3Days = true;
          this.lastWeek = false;
          this.last2Weeks = false;
          this.lastMonth = false;
          break;
        case this.timeOptions[1]:
          this.last3Days = false;
          this.lastWeek = true;
          this.last2Weeks = false;
          this.lastMonth = false;
          break;
        case this.timeOptions[2]:
          this.last3Days = false;
          this.lastWeek = false;
          this.last2Weeks = true;
          this.lastMonth = false;
          break;
        case this.timeOptions[3]:
          this.last3Days = false;
          this.lastWeek = false;
          this.last2Weeks = false;
          this.lastMonth = true;
          break;
      }
      this.updateFilters();
    },
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
          isUserViewOnly: this.isUserViewOnly,
        },
      });
    },
    resetFilters() {
      console.log("Trying to reset the filters");
      this.isFamily = false;
      this.isMajorEvent = false;
      this.last3Days = true;
      this.lastWeek = false;
      this.lastTwoWeeks = false;
      this.lastMonth = true;
      this.updateFilters();
    },
  },
};
</script>

<style scoped>
.filter {
  background-color: white;
  width: 13vw;
  border-radius: 10px;
  margin: 10%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
  padding: 15px;
}
</style>
