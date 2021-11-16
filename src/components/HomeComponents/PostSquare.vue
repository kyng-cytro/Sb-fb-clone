<template>
  <div class="postSquare">
    <div class= "header">
      <FriendDisplay :friend="post.friend" />
    </div> 

    <p id="text">{{post.text}}</p>

    <img v-show="this.post.imgSrc !== ''" class="eventPic" :src="require('@/assets/images/EventImages/' + post.imgSrc)"/>

    <div class="info" v-if="!getFaceLight">  <!--v-show="!getFaceLight">-->
        <!-- <strong id="date">{{post.date}}</strong>
        <br /> -->
        <!-- <strong id="name">{{post.name}}</strong>
        <br /> -->
        <!-- <img src="https://scontent.xx.fbcdn.net/m1/v/t6/An8ODe1zojZFxtkCySvD_PWHUfwwSqPRWxNfZiVRQtoYgVOHHeQxpmcNcbugcbUbDZvtBac7oXZXBUiZytVCug9oYjJureLV-72SKTQ6uZ2bhOnT.png?ccb=10-5&oh=46181cacd09dafe23b296bbd8368ad2d&oe=6161C011&_nc_sid=55e238" style="height: 20px; width: 20px;"> -->
    
        <!--<div v-if="!facebookLight" class= "info"> -->
        <em> {{post.numLikes + " Likes"}}</em>
        <em style="float: right;">{{post.numComments + " comments " + post.numShares + " shares"}}</em>
        <div class="line"></div>
        <div class ="Buttons">
            <div>         
              <button type="button" class="btn btn-secondary">
              <img  style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/z2teZ9fV8q7.png');background-position:0 -320px;background-size:26px 1060px;width:18px;height:18px;background-repeat:no-repeat;display:inline-block">
              Like</button>
            </div>
          <div>
          <button type="button" class="btn btn-secondary">
            <img style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/z2teZ9fV8q7.png');background-position:0 -280px;background-size:26px 1060px;width:18px;height:18px;background-repeat:no-repeat;display:inline-block">
            Comment</button>
          </div>
          <div>
          <button type="button" class="btn btn-secondary">
            <img  style="background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/z2teZ9fV8q7.png'); background-position: 0px -340px; background-size: 26px 1060px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;">
            Share</button>
          </div>
        </div>
    </div>

    <div class= "info" v-if="getFaceLight">
    </div>
  </div>
</template>

<script>

import faceLight from "@/classes/faceLight.js";
import FriendDisplay from "@/components/Multipurpose/FriendDisplay"

export default {
  name: "post-square",
  components: {
    FriendDisplay
  },
  props: ["post"], 
    computed:  {
      getFaceLight(){
        return faceLight.find(1).enabled;
      }
    },

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
  display: flex;
   flex-direction: row;
   flex: 33%;
   justify-content: space-between;
}

button {
  width: 120px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
  
  
}
/*
.btn-secondary {
  color: black;
  background-color: white; /*hsl(0, 0%, 92%);
  border: 0px
}
*/
.btn-secondary {
  color: black;

  background-color: hsl(0, 0%, 92%);
  border: 0px;
  border-radius: 6px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
}
.btn-secondary:hover {
  color: black;
  background-color: hsl(0, 0%, 82%);
  transition: 0.3s;
}
.btn-secondary:focus {
  outline-color: hsl(0, 0%, 92%);
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
  padding: 10px;
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
   border-bottom: 1px solid #bbb;

   padding: 3px;


}

p#text {
  /*margin:10px;*/
  margin-top: 10px;
  margin-left: 15px; 
  

}

</style>
