<template>
  <div v-if="showFriendQuestionNotNull">
    <table>
      <div
        class="square"
        v-for="friendRequest in this.friendRequests"
        :key="friendRequest.id"
      >
        <tr>
          <td>
            <p id="friendQuestion">
              A friend that the user {{ friendRequest.friendQuestion }}:
            </p>
          </td>
          <td>
            <FriendRequestSquare v-bind:friendRequest="friendRequest" />
          </td>
        </tr>
      </div>
    </table>
  </div>
  <div v-else-if="friendRequests.length > 0" class="friendRequestDisplay">
    <FriendRequestSquare
      :friendRequest="friendRequest"
      class="square"
      v-for="friendRequest in this.friendRequests"
      :key="friendRequest.id"
    />
  </div>
  <div v-else class="no-friend-requests text-secondary text-center w-100">
    <h3>No friend requests</h3>
    <h5>Check again later</h5>
  </div>
</template>

<script>
import FriendRequestSquare from './FriendRequestSquare.vue'

export default {
  name: 'FriendRequestDisplay',
  props: ['friendRequests', 'showFriendQuestion'],
  components: {
    FriendRequestSquare,
  },
  computed: {
    showFriendQuestionNotNull() {
      return this.showFriendQuestion != null && this.showFriendQuestion
    },
  },
}
</script>

<style scoped>
.friendRequestDisplay {
  display: inline-block;
}
.square {
  margin: 10px;
}

.no-friend-requests {
  margin-top: 50px;
}

#friendQuestion {
  width: 20vw;
  padding-left: 10%;
}
</style>
