<template>
  <div>
    <div>
        <p>Posts</p>
      </div>
      <div class="postDisplay">
        <div class="square" v-for="post in filteredPosts" :key="post.id">
           <PostSquare v-bind:post="post"/> 
        </div>
    </div>
  </div>
</template>

<script>
import PostSquare from './PostSquare.vue';
import Post from "@/mixins/Post.js";
import Filter from "@/mixins/Filter.js";
import filterPosts from "@/mixins/filterPosts.js";
import FilterValues from "@/classes/filterValues.js";
  // {
  //   imgSrc: "basket.jpg",
  //   friend: {

  //   },
  //   text: "I've been Weaving Basket",
  //   date: new Date(),
  //   numComments: 21,
  //   numShares: 2,
  //   numLikes: 52
  // },
  // {
  //   imgSrc: "chiliCookOff.jpg",
  //   name: "Jane Smith",
  //  // name: "Chili Cookoff",
  //   text: " Come get warm by our chili",
  //   date: "FRI, DEC 24 AT 5PM MST",
  //   numComments: 20,
  //   numShares: 5,
  //   numLikes: 523
  // },
  // {
  //   imgSrc: "library.jpg",
  //   name: "Reading Club",
  //   text: " Read your book in our nook",
  //   date: "FRI, DEC 24 AT 5PM MST",
  //   numComments: 23,
  //   numShares: 7,
  //   numLikes: "9.3k"
  // },



export default {
  name: "postDisplay",
  onCreated() {
  },
  mixins: {
    Post,
    Filter,
    filterPosts
  },
  components: {
    PostSquare
  },
  computed: {
    getFilters() {
      return FilterValues.find(1); 
    },
    filteredPosts() {
      return filterPosts(this.posts, this.getFilters);
    },
  },
  data(){
    return {
      posts: [
        new Post(
          "stars.jpg",
          {
            imgSrc: "anson.jpg",
            name: "Anson",
            isFamily: false,
          },
          "The stars from three weeks ago were very beautiful",
          new Date("11/1/2021"),
          87,
          2,
          21334,
          new Filter(false)
        ),
        new Post(
          "birthday.jpg",
          {
            imgSrc: "xinru.jpg",
            name: "Xinru",
            isFamily: false,
          },
          "My friend is having a birthday party this week!",
          new Date("11/12/2021"),
          87,
          2,
          21334,
          new Filter(true)
        ),
        new Post(
          "breakfast.jpg",
          {
            imgSrc: "businessMan.jpg",
            name: "Miles",
            isFamily: true,
          },
          "I just ate some good breakfast this morning",
          new Date("11/16/2021"),
          87,
          2,
          21334,
          new Filter(false)
        ),
      ]
    }
  },
}

</script>


<style scoped>
.postDisplay {
  justify-content: left;
  align-items: left;
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.square {

  float: left;
  padding: 5px;
}

</style>
