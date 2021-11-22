<template>
  <div class="postSquare">
    <div class= "header">
      <FriendDisplay :friend="post.friend" />
        <p id="date">{{formatDateNoYear(post.date)}}</p>
    </div> 

    <p id="text">{{post.text}}</p>

    <!-- Only show if it has an image source. If it has one, pull it from the PostImages folder -->
    <img v-show="this.post.imgSrc !== ''" class="postPic" :src="require('@/assets/images/PostImages/' + post.imgSrc)"/>

    <div class="info" v-if="!getFaceLight">
        <em> {{post.numLikes + " Likes"}}</em>
        <em style="float: right;">{{post.numComments + " comments " + post.numShares + " shares"}}</em>
        <div class="line"></div>
        <div class ="Buttons">
            <div>         
              <button type="button" class="btn btn-secondary">
                <i class="bi bi-hand-thumbs-up"></i>
              Like</button>
            </div>
          <div>
          <button type="button" class="btn btn-secondary">
            <i class="bi bi-chat"></i>
            Comment</button>
          </div>
          <div>
          <button type="button" class="btn btn-secondary">
            <i id="share" class="bi bi-reply icon-flipped"></i>
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
import { dateProcessing } from '@/mixins/dateProcessing.js';

export default {
  name: "post-square",
  components: {
    FriendDisplay
  },
  props: ["post"], 
  mixins: [dateProcessing],
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
  background-color: white;
  width: 40vw;
  border-radius: 10px;
  margin: 1%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}

.postPic {
  width: 40vw;
  height: 40vh;
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
  padding-left: 13px;
  padding-right: 13px;
  width: 120px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
}

.btn-secondary {
  color: rgb(78, 78, 78);
  background-color: transparent; 
  border: 0px;
  border-radius: 6px;
  margin: 2%;
  font-weight: bold;
  font-size: .9em;
}

.btn-secondary:hover {
  color: rgb(78, 78, 78);
  background-color: hsl(0, 0%, 92%);
  transition: 0.3s;
}

.btn-secondary:focus {
  outline-color: transparent;
  border: none;
}

#data {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

#date {
  margin-left: 47px;
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(78, 78, 78);
}

em {
  color: rgb(111, 111, 111);
  font-size: .9em;
}

.header {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
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


.line {
   border-bottom: 1px solid #bbb;
   padding: 3px;


}

p#text {
  /*margin:10px;*/
  margin-top: 10px;
  margin-left: 15px; 
}

.icon-flipped {
    transform: scaleX(-1);
    -moz-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    -ms-transform: scaleX(-1);
}

i {
  font-size: 1.3em;
  margin: 2px;
}

</style>
