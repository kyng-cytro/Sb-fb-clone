<template>
  <div class="container">
    <button
      id="suggested"
      :class="selected === 'suggested' ? 'selected' : ''"
      @click="select"
    >
      Suggested
    </button>
    <button
      id="all"
      :class="selected === 'all' ? 'selected' : ''"
      @click="select"
    >
      All Friends
    </button>
    <h3>EVENTS I ATTENDED</h3>
    <button
      v-for="event in eventsAttended"
      :key="event"
      :id="event"
      :class="selected === event ? 'selected' : ''"
      @click="select"
    >
      {{ event }}
    </button>
    <h3>MY GROUPS</h3>
    <button
      v-for="group in groups"
      :key="group"
      :id="group"
      :class="selected === group ? 'selected' : ''"
      @click="select"
    >
      {{ group }}
    </button>
  </div>
</template>

<script>
import GroupFriend from "@/vuex-orm_models/GroupFriendModel.js";
import EventFriend from "@/vuex-orm_models/EventFriendModel.js";

export default {
  data() {
    return {
      selected: "suggested",
    };
  },
  computed: {
    events() {
      let EventFriends = EventFriend.all();
      let eventNames = [];
      for (let i = 0; i < EventFriends.length; i++) {
        eventNames.push(EventFriends[i].eventName);
      }
      return eventNames;
    },
    groups() {
      let GroupFriends = GroupFriend.all();
      let groupNames = [];
      for (let i = 0; i < GroupFriends.length; i++) {
        groupNames.push(GroupFriends[i].groupName);
      }
      return groupNames;
    },
  },
  methods: {
    select(event) {
      const id = event.currentTarget.id;
      this.selected = id;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 300px;
}

h3 {
  color: rgb(101, 103, 107);
  font-weight: bold;
  font-size: 0.85em;
  margin-top: 9px;
  margin-bottom: 9px;
}

button {
  color: grey;
  border: 0px;
  padding: 6px;
  padding-left: 8px;
  background-color: transparent;
  text-align: left;
  border-radius: 7px;
}

button:hover {
  background-color: rgb(245, 245, 245);
}

button:focus {
  color: rgb(26, 119, 242);
  background-color: rgb(229, 229, 229);
  outline: none;
}

.selected {
  color: rgb(26, 119, 242);
  background-color: rgb(229, 229, 229);
  outline: none;
}
</style>
