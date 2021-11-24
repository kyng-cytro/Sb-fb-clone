<template>
  <div class="container">
    <!-- HEADER -->
    <FriendDisplay :friend="this.user" :bold="true"></FriendDisplay>

    <br />
    <!-- TEXT ENTRY -->
    <div class="textarea">
      <textarea
        :ref="'postText'"
        :placeholder="'What\'s on your mind, ' + user.name + '?'"
        :style="textAreaStyles"
        v-model="postBeingCreated.text"
      ></textarea>
    </div>

    <!-- CHECKBOXES -->
    <div class="optionsContainer">
      <div>
        <p v-b-toggle.collapse-1>See posting options <i class="bi bi-box-arrow-in-down-right"></i></p>
      </div>
      <div class=checkboxesContainer>
        <b-collapse id="collapse-1" class="mt-2">
          <tr
            v-b-tooltip.hover
            title="Friends can see your post but not interact with it"
          >
            <td>
              <p>View only</p>
            </td>
            <td>
              <input
                v-model="postBeingCreated.filter.isPostViewOnly"
                type="checkbox"
              />
            </td>
          </tr>

          <tr
            v-b-tooltip.hover
            title="Mark post as a major event so friends with the major event filter can view post"
          >
            <td>
              <p>Major event</p>
            </td>
            <td>
              <input
                v-model="postBeingCreated.filter.isMajorEvent"
                type="checkbox"
              />
            </td>
          </tr>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
  import FriendDisplay from "@/components/Multipurpose/FriendDisplay";
  export default {
    data() {
      return {
        postBeingCreated: {
          text: "",
          friend: this.user,
          filter: {
            isMajorEvent: false,
            isPostViewOnly: false,
          },
        },
      };
    },
    mounted() {
      this.focusInput();
    },
    updated() {
      this.focusInput();
    },
    props: ["user"],
    components: {
      FriendDisplay,
    },
    methods: {
      focusInput() {
        this.$refs.postText.focus();
      },
    },
    computed: {
      textAreaStyles() {
        let styles = `
                    width: 100%;
                    border: none;
                    resize: none;
                    outline: none;
                    overflow: hidden;
                `;
        styles +=
          this.postBeingCreated.text.length < 61
            ? "font-size: 1.7em;"
            : "font-size: 1em;";
        return styles;
      },
    },
  };
</script>

<style scoped>
  .container {
    padding: 4%;
  }
  .optionsContainer {
    /* border: 1px solid rgb(216, 216, 216); */
    border: none;
    border-radius: 6px;
    padding: 2%;
    display: flex;
    justify-content:center;
  }
  .checkboxesContainer {
    display: flex;
    justify-content:space-around;
  }
  tr {
      padding-right: 500px;
  }
  td > p {
    text-align: right;
    margin: 0px;
  }
  td > input {
    margin: 80%;
    padding-right: 50px;
  }
</style>
