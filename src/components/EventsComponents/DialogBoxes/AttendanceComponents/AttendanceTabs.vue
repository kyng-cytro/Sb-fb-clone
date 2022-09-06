<template>
  <div>
    <!-- Using a slot is fine, but the problem will come when you have padding and stuff and content inside the tab, because then it offsets the other tabs -->
    <div class="tabs">
      <AttendanceTab
        v-on:setSelected="setSelected"
        title="Going (1)"
        :selectedTitle="this.selectedTitle"
      >
      </AttendanceTab>
      <AttendanceTab
        v-on:setSelected="setSelected"
        title="Maybe (0)"
        :selectedTitle="this.selectedTitle"
      >
      </AttendanceTab>
      <AttendanceTab
        v-on:setSelected="setSelected"
        v-bind:title="'Invited (' + this.numInvited + ')'"
        :selectedTitle="this.selectedTitle"
      >
      </AttendanceTab>
      <AttendanceTab
        v-on:setSelected="setSelected"
        title="Can't Go (0)"
        :selectedTitle="this.selectedTitle"
      >
      </AttendanceTab>
    </div>

    <!-- Content -->
    <div class="content">
      <div v-if="selectedTitle === 'Going (1)'">
        <AttendanceTabInvitedListItem
          :friend="this.user"
        ></AttendanceTabInvitedListItem>
      </div>
      <div v-else-if="selectedTitle === 'Maybe (0)'"></div>
      <div v-else-if="selectedTitle === 'Invited (' + this.numInvited + ')'">
        <!-- <InvitesLeft /> -->
        <AttendanceTabInvitedList></AttendanceTabInvitedList>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import Friend from '@/vuex-orm_models/FriendModel.js'
import NonFacebookFriend from '@/vuex-orm_models/NonFacebookFriendModel.js'
import AttendanceTab from './AttendanceTab.vue'
import AttendanceTabInvitedListItem from './AttendanceTabInvitedListItem.vue'
import AttendanceTabInvitedList from './AttendanceTabInvitedList.vue'
import { UserPopulation } from '@/mixins/UserPopulation'

export default {
  mixins: [UserPopulation],
  data() {
    return {
      selectedTitle: 'Going (1)',
      tabs: [],
    }
  },
  components: {
    AttendanceTab,
    AttendanceTabInvitedListItem,
    AttendanceTabInvitedList,
  },
  computed: {
    numInvited() {
      return (
        Friend.query().where('invited', true).get().length +
        NonFacebookFriend.query().where('invited', true).get().length
      )
    },
  },
  methods: {
    setSelected(title) {
      this.selectedTitle = title
    },
  },
}
</script>

<style scoped>
.tabs {
  display: flex;
}
.content {
  margin-top: 1.25rem;
}
</style>
