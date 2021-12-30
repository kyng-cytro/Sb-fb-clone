<template>
  <div class="container">
    <!-- HEADER -->
    <div class="header">
      <FriendDisplay :friend="this.user" :bold="true" :slotBelowText="true">
        <!-- CHECKBOX BUTTONS -->
        <button
          class="checkboxButton"
          :style="viewOnlyButtonStyles"
          @click="toggleViewOnly"
          v-b-tooltip.hover
          title="Friends can see your post but not interact with it"
        >
          View only
        </button>
        <button
          class="checkboxButton"
          :style="majorEventButtonStyles"
          @click="toggleMajorEvent"
          v-b-tooltip.hover
          title="Mark post as a major event so friends with the major event filter can view post"
        >
          Major Event
        </button>
      </FriendDisplay>
    </div>
    <!--  -->
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

    <!-- FOOTER -->
    <div class="footer">
      <button v-if="ableToPost" @click="post()" class="btn btn-primary">
        Post
      </button>
      <button v-else id="bootstrap-override" class="btn btn-secondary" disabled>
        Post
      </button>
    </div>
  </div>
</template>

<script>
  import FriendDisplay from "@/components/Multipurpose/FriendDisplay";
  import Post from "@/vuex-orm_models/PostModel.js";
  // import Post from "@/mixins/classes/Post.js";
  // import PostTags from "@/mixins/classes/PostTags.js";
  export default {
    // mixins: {
    //   Post,
    //   PostTags,
    // },
    data() {
      return {
        postBeingCreated: {
          text: "",
          friend: this.user,
        },
        isMajorEvent: false,
        isPostViewOnly: false,
        viewOnlyButtonStyles:
          "background-color: rgb(221, 221, 221) !important; color: rgb(10, 10, 10);",
        majorEventButtonStyles:
          "background-color: rgb(221, 221, 221) !important; color: rgb(10, 10, 10);",
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
      // Below are some really annoying hacks to get to styles to update. For some reason, it was being extremely uncooperative with other methods.
      toggleViewOnly() {
        this.isViewOnly = !this.isViewOnly;
        this.viewOnlyButtonStyles = this.isViewOnly
          ? "background-color: #1b74e4 !important;"
          : "background-color: rgb(221, 221, 221) !important; color: rgb(10, 10, 10);";
      },
      toggleMajorEvent() {
        this.isMajorEvent = !this.isMajorEvent;
        this.majorEventButtonStyles = this.isMajorEvent
          ? "background-color: #1b74e4 !important;"
          : "background-color: rgb(221, 221, 221) !important; color: rgb(10, 10, 10);";
      },
      closeDialog() {
        this.$root.$emit("closeCreatePostDialog");
      },
      resetFields() {
        this.postBeingCreated.text = "";
        this.isMajorEvent = false;
        this.isPostViewOnly = false;
      },
      post() {
        let post = {
          imageSource: "", // No image (yet)
          friend: this.user,
          text: this.postBeingCreated.text,
          date: new Date().toString(),
          numComments: 0,
          numShares: 0,
          numLikes: 0,
          filter: {
            isMajorEvent: this.isMajorEvent,
            isPostViewOnly: this.isPostViewOnly,
          },
        };
        this.resetFields();
        Post.insert({ data: post });
        this.closeDialog();
      },
    },
    computed: {
      ableToPost() {
        return this.postBeingCreated.text.length > 0;
      },
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
  .header {
    padding: 15px;
    flex-direction: column;
  }
  .buttons {
    font-size: 0.8em;
    font-weight: bold;
    color: rgb(78, 78, 78);
    width: 20vw;
  }
  .checkboxButton {
    background-color: black;
    margin: 0% 1% 0% 1%;
    outline: 0 !important;
    border-width: 0px;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 0.8125em;
    line-height: 10%;
    padding: -5% 3% -5% 3% !important;
    width: fit-content;
    height: 2vh;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  button {
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
    font-weight: bold;
  }
  .btn-secondary {
    background-color: rgb(228, 230, 235) !important;
    border: none !important;
    color: grey !important;
  }
</style>
