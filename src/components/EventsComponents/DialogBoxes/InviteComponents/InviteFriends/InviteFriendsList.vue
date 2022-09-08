<template>
  <div class="d-flex flex-column">
    <!-- The following div is the search bar -->
    <div>
      <div class="input-icons">
        <!-- I use the following two divs/classes as described here: https://stackoverflow.com/questions/17656623/position-absolute-scrolling-->
        <!-- For the purpose of having an absolutely positioned search icon that still scrolls in the dialog box -->
        <div class="inner mb-3">
          <div class="full-height">
            <div v-if="!this.$root.$data.fbLiteEnabled" id="searchBoxContainer">
              <div class="form-group m-0 w-100">
                <input
                  type="text"
                  id="searchBox2"
                  v-model="searchQuery"
                  style="width: 95%"
                  placeholder="  Search for people to invite"
                />
              </div>
            </div>
            <div v-else id="searchBoxContainer">
              <div class="form-group m-0 w-100">
                <input
                  type="text"
                  id="searchBox2"
                  class="rounded"
                  v-model="searchQuery"
                  style="width: 95%"
                  placeholder="  Search for friends to invite via Facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Friend List here -->
    <div class="container m-0 p-0">
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
  </div>
</template>

<script>
import InviteFriendsListItem from './InviteFriendsListItem.vue'
import { FriendPopulation } from '@/mixins/FriendPopulation.js'

export default {
  mixins: [FriendPopulation],
  components: {
    InviteFriendsListItem,
  },
  props: ['friendsList'],
  data() {
    return {
      selectedFriends: [],
      selectAll: false,
      searchQuery: '',
    }
  },
  methods: {
    selectAllFriends() {
      this.selectOrDeselectAllFriends(true)
      this.selectAll = true
    },
    deselectAllFriends() {
      this.selectOrDeselectAllFriends(false)
      this.selectAll = false
    },
  },
}
</script>

<style scoped>
.container {
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

#searchBoxContainer {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

#searchBox2 {
  border: 1px solid rgb(228, 230, 235);
}
/* .selectRectangle:active {
	position:relative;
	top:1px;
} */
</style>
