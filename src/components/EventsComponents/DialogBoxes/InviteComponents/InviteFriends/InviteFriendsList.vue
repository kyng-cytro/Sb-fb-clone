<template>
  <div class="d-flex flex-column">
    <!-- The following div is the search bar -->
    <div>
      <div class="input-icons">
        <!-- I use the following two divs/classes as described here: https://stackoverflow.com/questions/17656623/position-absolute-scrolling-->
        <!-- For the purpose of having an absolutely positioned search icon that still scrolls in the dialog box -->
        <div class="inner mb-3">
          <div class="full-height">
            <div id="searchBoxContainer">
              <div class="form-group m-0 w-100">
                <input
                  type="text"
                  id="searchBox2"
                  v-model="searchQuery"
                  style="
                    width: 95%;
                    border-radius: 10px;
                    background: #f0f2f5;
                    color: #606770;
                    border: none;
                    padding: 0px 10px;
                  "
                  :placeholder="placeholderText"
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
        <button v-if="!isAllSelected" id="selectAll" @click="selectAllFriends">
          Select All
        </button>
        <button v-else id="selectAll" @click="deselectAllFriends">
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
import Friend from '@/vuex-orm_models/FriendModel'

export default {
  mixins: [FriendPopulation],
  components: {
    InviteFriendsListItem,
  },
  props: ['friendsList'],
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    selectAllFriends() {
      this.selectOrDeselectAllFriends(true, this.friendsList)
    },
    deselectAllFriends() {
      this.selectOrDeselectAllFriends(false, this.friendsList)
    },
  },
  computed: {
    isAllSelected() {
      return (
        Friend.query()
          .where((friend) =>
            this.friendsList.map((friend) => friend.id).includes(friend.id),
          )
          .where('selected', true)
          .count() === this.friendsList.length
      )
    },
    placeholderText() {
      return !this.$root.$data.fbLiteEnabled
        ? 'Search for people to invite'
        : 'Search for Facebook friends to invite'
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
  height: 60px;
}

#selectAll {
  color: rgb(24, 113, 230);
  font-family: Arial;
  font-size: 17px;
  font-weight: bold;
  background: none;
  border: none;
  width: 100%;
  padding: 10px 0;
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
