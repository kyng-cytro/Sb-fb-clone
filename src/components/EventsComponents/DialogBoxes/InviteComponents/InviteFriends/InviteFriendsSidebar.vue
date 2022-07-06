<template>
  <div class="container p-2">
    <div v-show="this.$root.$data.fbLiteEnabled" class="externalInvites">
      <h3>Invite via...</h3>
      <form @submit.prevent>
        <div
          class="form-check"
          @click="$emit('toggleNonFacebookVisibility', null)"
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault0"
            v-model="inviteVia"
            value="Facebook"
          />
          <label class="form-check-label" for="flexRadioDefault0">
            Facebook
          </label>
        </div>
        <div
          class="form-check"
          @click="$emit('toggleNonFacebookVisibility', 'email')"
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            v-model="inviteVia"
            value="Email"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Email
          </label>
        </div>
        <div
          class="form-check"
          @click="$emit('toggleNonFacebookVisibility', 'phone')"
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            v-model="inviteVia"
            value="Phone"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Phone Number
          </label>
        </div>
      </form>
      <hr />
    </div>
    <div style="display: contents" v-if="inviteVia === 'Facebook'">
      <button
        id="suggested"
        class="indent"
        :class="selected === 'suggested' ? 'selected' : ''"
        @click="select"
      >
        Suggested
      </button>
      <button
        id="all"
        class="indent"
        :class="selected === 'all' ? 'selected' : ''"
        @click="select"
      >
        All Friends
      </button>
      <h3>EVENTS I ATTENDED</h3>
      <button
        v-for="event in events"
        :key="event"
        :id="event"
        class="indent"
        :class="selected === event ? 'selected' : ''"
        @click="selectEvent"
      >
        {{ event }}
      </button>
      <h3>MY GROUPS</h3>
      <button
        v-for="group in groups"
        :key="group"
        :id="group"
        class="indent"
        :class="selected === group ? 'selected' : ''"
        @click="selectGroup"
      >
        {{ group }}
      </button>
    </div>
  </div>
</template>

<script>
import GroupFriend from "@/vuex-orm_models/GroupFriendModel.js";
import EventFriend from "@/vuex-orm_models/EventFriendModel.js";

export default {
  data() {
    return {
      selected: "suggested",
      inviteVia: "Facebook",
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
      this.$emit("selected", id);
    },
    selectEvent(event) {
      const id = event.currentTarget.id;
      this.selected = id;
      this.$emit("event", id);
    },
    selectGroup(event) {
      const id = event.currentTarget.id;
      this.selected = id;
      this.$emit("group", id);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 400px;
}

h3 {
  color: rgb(101, 103, 107);
  font-weight: bold;
  font-size: 0.85em;
  margin-top: 9px;
  margin-bottom: 9px;
  text-transform: uppercase;
}

button {
  color: grey;
  border: 0px;
  padding: 6px;
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

.indent {
  padding-left: 8px;
}

.selected {
  color: rgb(26, 119, 242);
  background-color: rgb(229, 229, 229);
  outline: none;
}
</style>
