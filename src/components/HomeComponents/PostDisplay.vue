<template>
  <div>
    <div class="postDisplay">
      <p>I'm the post display</p>
      <div class="square" v-for="post in filterPosts(posts, getFilters)" :key="post.id">
        <PostSquare v-bind:post="post" />
      </div>
    </div>
  </div>
</template>

<script>
  import PostSquare from "./PostSquare.vue";
  // import Post from "@/mixins/classes/Post.js";
  // import PostTags from "@/mixins/classes/PostTags";
  // import { PostFiltering } from "@/mixins/PostFiltering.js";
  import { PostFiltering } from "@/mixins/PostFiltering.js";
  import Filter from "@/vuex-orm_models/FilterModel.js";

  export default {
    name: "PostDisplay",
    onCreated() {
      console.log(this.posts[0]);
    },
    // mixins: [Post],//, PostTags], //, PostFiltering],
    mixins: [PostFiltering],
    components: {
      PostSquare,
    },
    computed: {
      getFilters() {
        return Filter.find(1);
      },
      // filteredPosts() {
      //   return filterPosts(this.posts, this.getFilters);
      // }
    },
    data() {
      return {
        posts: [
          {
            imgSrc: "stars.jpg",
            friend: {
              imgSrc: "anson.jpg",
              name: "Anson Savage",
              isFamily: false,
            },
            text: "The stars from three weeks ago were very beautiful",
            date: new Date("11/1/2021"),
            numComments: 87,
            numShares: 34,
            numLikes: 1231,
            filter: {
              isMajorEvent: false,
              isPostViewOnly: false,
            },
          },
          {
            imgSrc: "birthday.jpg",
            friend: {
              imgSrc: "xinru.jpg",
              name: "Xinru",
              isFamily: false,
            },
            text: "We are going to have a birthday party! It is a major event.",
            date: new Date("11/12/2021"),
            numComments: 87,
            numShares: 34,
            numLikes: 1231,
            filter: {
              isMajorEvent: true,
              isPostViewOnly: false,
            },
          },
          {
            imgSrc: "breakfast.jpg",
            friend: {
              imgSrc: "businessMan.jpg",
              name: "Miles",
              isFamily: true,
            },
            text: "I ate some breakfast this morning, but I don't care what you think, so I'm going to set my post to View Only.",
            date: new Date("11/16/2021"),
            numComments: 87,
            numShares: 34,
            numLikes: 1231,
            filter: {
              isMajorEvent: false,
              isPostViewOnly: true,
            },
          },
        ],
      };
    },
    // data() {
    //   return {
    //     posts: [
    //       new Post(
    //         "stars.jpg",
    //         {
    //           imgSrc: "anson.jpg",
    //           name: "Anson",
    //           isFamily: false,
    //         },
    //         "The stars from three weeks ago were very beautiful",
    //         new Date("11/1/2021"),
    //         87,
    //         2,
    //         21334,
    //         {
    //           isMajorEvent: false,
    //           isPostViewOnly: false
    //         }
    //       ),
    //       new Post(
    //         "birthday.jpg",
    //         {
    //           imgSrc: "xinru.jpg",
    //           name: "Xinru",
    //           isFamily: false,
    //         },
    //         "My friend is having a birthday party this week!",
    //         new Date("11/12/2021"),
    //         87,
    //         2,
    //         21334,
    //         {
    //           isMajorEvent: true,
    //           isPostViewOnly: false
    //         }
    //       ),
    //       new Post(
    //         "breakfast.jpg",
    //         {
    //           imgSrc: "businessMan.jpg",
    //           name: "Miles",
    //           isFamily: true,
    //         },
    //         "I just ate some good breakfast this morning",
    //         new Date("11/16/2021"),
    //         87,
    //         2,
    //         21334,
    //         {
    //           isMajorEvent: true,
    //           isPostViewOnly: false
    //         }
    //       ),
    //     ],
    //   };
    // },
  };
</script>

<style scoped>
  .postDisplay {
    justify-content: left;
    align-items: left;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .square {
    float: left;
  }
</style>
