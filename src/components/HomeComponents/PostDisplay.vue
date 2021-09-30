<template>
  <div>
    <div>
        <p>Posts</p>
      </div>
      <div class="postDisplay">
        <div class="square" v-for="post in posts" :key="post.name">
           <PostSquare v-bind:post="post"/> 
        </div>
    </div>
  </div>
</template>

<script>
import PostSquare from './PostSquare.vue';

const posts = [
  {
    imgSrc: "basket.jpg",
    name: "Basket Weaving",
    text: "Come join our Basket Weaving on firday",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: 21,
    numGoing: 52
  },
  {
    imgSrc: "chiliCookOff.jpg",
    name: "Chili Cookoff",
    text: " Come try our chili",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: "9.3K",
    numGoing: 523
  },
  {
    imgSrc: "library.jpg",
    name: "Reading Club",
    text: " Read your book in our nook",
    date: "FRI, DEC 24 AT 5PM MST",
    numInterested: 23,
    numGoing: 7
  },
];



export default {
  name: "postDisplay",
  components: {
    PostSquare

  },
  data(){
    return {posts}
  },
}

</script>


<style scoped>
.postDisplay {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.square {
  padding: 5px;
}

</style>
