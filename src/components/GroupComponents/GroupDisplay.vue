<template>
  <div>
    <div>
        <p>Posts</p>
      </div>
      <div class="postDisplay">
        <div class="square" v-for="post in posts" :key="post.name">
          <!-- <PostSquare v-bind:post="post"/> -->
        </div>
    </div>
  </div>
</template>

<script>
//import PostSquare from '@/components/HomeComponents/PostSquare.vue';

const posts = [
  {
    imageSource: "basket.jpg",
    name: "John Smith",
    //name: "Basket Waaving",
    text: "I've been Weaving Basket",
    date: "FRI, DEC 24 AT 5PM MST",
    numComments: 21,
    numShares: 2,
    numLikes: 52
  },
  {
    imageSource: "chiliCookOff.jpg",
    name: "Jane Smith",
   // name: "Chili Cookoff",
    text: " Come get warm by our chili",
    date: "FRI, DEC 24 AT 5PM MST",
    numComments: 20,
    numShares: 5,
    numLikes: 523
  },
  {
    imageSource: "library.jpg",
    name: "Reading Club",
    text: " Read your book in our nook",
    date: "FRI, DEC 24 AT 5PM MST",
    numComments: 23,
    numShares: 7,
    numLikes: "9.3k"
  },
];



export default {
  name: "postDisplay",
  components: {
    //PostSquare

  },
  data(){
    return {posts}
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
