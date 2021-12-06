<template>
  <div>
    <div class="postDisplay">
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


  export default {
    name: "PostDisplay",
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
