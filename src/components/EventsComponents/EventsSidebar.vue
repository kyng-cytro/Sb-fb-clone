<template>
  <div>
      <nav>
        <div class="container">
          <div v-if="eventState==='normal'" class = "sidebar-buttons-container">
            <PageSidebarButton iconName = "home" text = "Home" />
            <PageSidebarButton iconName = "home" text = "Your Events" />
            <PageSidebarButton iconName = "home" text = "Birthdays" />
            <PageSidebarButton iconName = "home" text = "Notifications" />
            <button v-on:click="beginEditing">Create New Event</button>
          </div>
          <div v-else-if="eventState === 'editing'">
            <input v-model="eventName" placeholder="Event Name">
            <datepicker v-model="eventDate" :bootstrap-styling="true">
              <div slot="beforeCalendarHeader" class="calender-header">
                Hello!
              </div>
            </datepicker>
            <vue-timepicker v-model="eventTime" manual-input format="h:mm A"></vue-timepicker>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
import PageSidebarButton from "@/components/PageSidebarButton.vue";
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'


export default {
  name: "EventsSidebar",
  components: {
    PageSidebarButton,
    Datepicker,
    VueTimepicker
  },
  methods: {
    beginEditing() {
      this.$emit('stateChange', "editing");
      console.log("You clikced me!");
    }
  },
  props: ["eventState"],
  data() {
    return {
      eventTime: "",
      eventDate: "",
      eventName: "",
    }
  },
}
</script>


<style scoped>
.container {
  background-color: white;
  box-shadow: 3px 3px 3px rgb(232, 232, 232);
}

</style>
