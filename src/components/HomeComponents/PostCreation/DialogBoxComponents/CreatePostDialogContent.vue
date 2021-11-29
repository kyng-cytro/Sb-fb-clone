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
        <p v-b-toggle.collapse-1>
          See posting options <i class="bi bi-box-arrow-in-down-right"></i>
        </p>
      </div>
      <div class="checkboxesContainer">
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
      post() {
        let post = {
          imgSrc: "", // No image (yet)
          friend: this.user,
          text: this.postBeingCreated.text,
          date: new Date().toString(),
          numComments: 0,
          numShares: 0,
          numLikes: 0,
          filter: {
              isMajorEvent: this.postBeingCreated.filter.isMajorEvent,
              isPostViewOnly: this.postBeingCreated.filter.isPostViewOnly
          }
        };
        console.log(post.friend.imgSrc);
        Post.insert({ data: post });
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
  .container {
    padding: 4%;
  }
  .optionsContainer {
    /* border: 1px solid rgb(216, 216, 216); */
    border: none;
    border-radius: 6px;
    padding: 2%;
    display: flex;
    justify-content: center;
  }
  .checkboxesContainer {
    display: flex;
    justify-content: space-around;
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
