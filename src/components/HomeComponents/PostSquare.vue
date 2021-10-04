<template>
        <div class="postSquare">
          <div class= "header">
            <span class="dot"> </span>
            
            <strong id="nameHeader">{{post.name}}</strong>    
            </div> 

            <p  id="text">{{post.text}}</p>
          

          <img class="eventPic" :src="require('@/assets/images/EventImages/' + post.imgSrc)" />
          <div class="info">
         <!-- <strong id="date">{{post.date}}</strong>
          <br /> -->
         <!-- <strong id="name">{{post.name}}</strong>
          <br /> -->

          <em> so many Likes</em>
          <em style="float: right;">{{post.numInterested + " comments " + post.numGoing + " shares"}}</em>
          <div class="line"><br/></div>
            <div class ="Buttons">
              <button type="button" v-on:click="handleInterestedClick" class="btn btn-secondary">Interested</button>
              <button type="button" class="btn btn-secondary"> Comment</button>
              <button type="button" class="btn btn-secondary">Share</button>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: "post-square",
  props: ["post"],
  // data() {
  //   return { deleted: false, accepted: false }
  // },
  methods: {
    handleInterestedClick() {
      console.log("You're intererested!");
    },
  }
}
</script>


<style scoped>
.postSquare {
  /* box-shadow: 0px 0px 3px; */
  width: 400px;
  border-radius: 10px;
  margin: 10%;
  /* padding: 10%; */
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}

.eventPic {
  width: 400px;;
  height: 180px;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  /*border-radius: 10px 10px 0px 0px;*/
}

.info {
  margin:10px;
}

#name:hover {
  text-decoration: underline;
}

.Buttons{
   flex-direction: row;
}

button {
  width: 110px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
  flex: row;
}

.btn-secondary {
  color: black;
  background-color: hsl(0, 0%, 92%);
  border: 0px
}

.invisible {
  color: white;
  background-color: white;
}

#data {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

#date {
  font-size: 0.9em;
}

em {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

.header {
  /*background-color: yellow;*/
  flex-direction: column;
}

#nameHeader {
  text-align: center;
  /*background-color: green;*/
  margin: 10px;
  
  
  
}

#personPic {
  flex-direction: inherit;
  margin: 10px;
  height: 25px;
  width: 25px;
  
  background-color: #bbb;
}

.dot {
  margin-left:10px;
  margin-top: 10px;
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%; 
  display: inline-block;

  float: left;
}

.line {
  background-color: #bbb;
  margin: 1px;

}

p#text {
  /*margin:10px;*/
  margin-top: 10px;
  margin-left: 15px; 
  

}

</style>
