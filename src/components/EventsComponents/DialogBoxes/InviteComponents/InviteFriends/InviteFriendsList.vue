<template>
  <div class="container p-0">
    <div>
      <button
        v-if="!selectAll"
        id="selectAll"
        class="selectRectangle"
        @click="selectAllFriends"
      >
        Select All
      </button>
      <button
        v-else
        id="selectAll"
        class="selectRectangle"
        @click="deselectAllFriends"
      >
        Deselect All
      </button>
      <div
        v-for="friend in friendsList"
        :key="friend.id"
        class="selectRectangle"
      >
        <InviteFriendsListItem v-bind:friend="friend" />
      </div>
    </div>
  </div>
</template>

<script>
import InviteFriendsListItem from "./InviteFriendsListItem.vue";
import { FriendPopulation } from "@/mixins/FriendPopulation.js";

export default {
  mixins: [FriendPopulation],
  components: {
    InviteFriendsListItem,
  },
  props: ["friendsList"],
  data() {
    return {
      selectedFriends: [],
      selectAll: false,
    };
  },
  methods: {
    selectAllFriends() {
      this.selectOrDeselectAllFriends(true);
      this.selectAll = true;
    },
    deselectAllFriends() {
      this.selectOrDeselectAllFriends(false);
      this.selectAll = false;
    },
  },
};
</script>

<style scoped>
.container {
  width: 350px;
  height: 60vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.selectRectangle {
  background-color: transparent;
  border-radius: 8px;
  border: 0px;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  padding: 8px;
  height: 60px;
}

#selectAll {
  color: rgb(24, 113, 230);
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  padding: 16px 31px;
}

.selectRectangle:hover {
  background-color: rgb(242, 242, 242);
}
/* .selectRectangle:active {
	position:relative;
	top:1px;
} */
</style>
