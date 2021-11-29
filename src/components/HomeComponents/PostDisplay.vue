<template>
  <div>
    <div class="postDisplay">
      <p>I'm the post display</p>
      <div
        class="square"
        v-for="post in filterPosts(posts, filters)"
        :key="post.id"
      >
        <PostSquare v-bind:post="post" />
      </div>
    </div>
  </div>
</template>

<script>
  import PostSquare from "./PostSquare.vue";
  import Post from "@/vuex-orm_models/PostModel.js";
  import { PostFiltering } from "@/mixins/PostFiltering.js";
  import Filter from "@/vuex-orm_models/FilterModel.js";

  const localPosts = [
    {
      imgSrc: "",
      friend: {
        imgSrc: "anson.jpg",
        name: "Anson Savage",
        isFamily: false,
      },
      text: "The stars from three weeks ago were very beautiful",
      date: "11/1/2021",
      numComments: 87,
      numShares: 34,
      numLikes: 1231,
      filter: {
        isMajorEvent: false,
        isPostViewOnly: false,
      },
    },
    {
      imgSrc: "stars.jpg",
      friend: {
        imgSrc: "anson.jpg",
        name: "Anson Savage",
        isFamily: false,
      },
      text: "The stars from three weeks ago were very beautiful",
      date: "11/1/2021",
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
      date: "11/12/2021",
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
      date: "11/16/2021",
      numComments: 87,
      numShares: 34,
      numLikes: 1231,
      filter: {
        isMajorEvent: false,
        isPostViewOnly: true,
      },
    },
  ];

  export default {
    name: "PostDisplay",
    created() {
      for (let i = 0; i < localPosts.length; i++) {
        Post.insert({ data: localPosts[i] });
      }
    },
    mixins: [PostFiltering],
    components: {
      PostSquare,
    },
    computed: {
      filters() {
        return Filter.find(1);
      },
      posts() {
        return Post.all();
      }
    },
    data() {
      return {};
    },
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
