<template>
  <div>
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
    <div v-else>
      <div class="friendRequestDisplay">
        <div
          class="square"
          v-for="friendRequest in this.friendRequests"
          :key="friendRequest.id"
        >
          <FriendRequestSquare v-bind:friendRequest="friendRequest" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FriendRequestSquare from "./FriendRequestSquare.vue";

  export default {
    name: "FriendRequestDisplay",
    props: ["friendRequests", "showFriendQuestion"],
    components: {
      FriendRequestSquare,
    },
    computed: {
      showFriendQuestionNotNull() {
        return this.showFriendQuestion != null && this.showFriendQuestion;
      },
    },
  };
</script>

<style scoped>
  .friendRequestDisplay {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .square {
    padding: 5px;
  }

  #friendQuestion {
    width: 20vw;
    padding-left: 10%;
  }
</style>
