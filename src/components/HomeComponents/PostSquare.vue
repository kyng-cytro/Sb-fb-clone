<template>
  <div class="postSquare">
    <div class="header">
      <FriendDisplay
        :friend="post.friend"
        :bold="true"
        :slotBelowText="true"
        :addDate="formatDateNoYear(post.date)"
      />
    </div>

    <p id="text">{{ post.text }}</p>

    <!-- Only show if it has an image source. If it has one, pull it from the PostImages folder -->
    <div v-show="this.post.imageSource.length > 0">
      <img
        :class="{
          postPic: isViewOnly,
          postPicNoButtons: !isViewOnly,
        }"
        :src="
          this.post.imageSource.length > 0
            ? require('@/assets/images/PostImages/' + post.imageSource)
            : require('@/assets/images/PostImages/' + 'birthday.jpg')
        "
      />
      <!-- Above is a weird bug. Even though the image will be hidden if the imageSource doesn't have a length, the :src component must still point to a valid image. So, we point to the birthday one.-->
    </div>

    <div class="info" v-if="isViewOnly">
      <em> {{ post.numLikes + ' Likes' }}</em>
      <em style="float: right">{{
        post.numComments + ' comments ' + post.numShares + ' shares'
      }}</em>
      <div class="line"></div>
      <div class="Buttons">
        <div>
          <button
            type="button"
            class="btn shadow-none"
            @click="toggleLike"
            :style="{
              color: userLiked ? '#2078f4' : 'black',
            }"
          >
            <i
              class="bi"
              :class="[
                userLiked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up',
              ]"
            />
            Like
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary d-flex align-items-center"
          >
            <i class="bi bi-chat"></i>
            <span class="pl-2">Comment</span>
          </button>
        </div>
        <div>
          <button type="button" class="btn btn-secondary">
            <i id="share" class="bi bi-reply icon-flipped"></i>
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
import FriendDisplay from '@/components/Multipurpose/FriendDisplay'
import { dateProcessing } from '@/mixins/DateProcessing.js'
import FiltersValues from '@/vuex-orm_models/FilterModel.js'
import Post from '@/vuex-orm_models/PostModel.js'

export default {
  name: 'post-square',
  components: {
    FriendDisplay,
  },
  props: ['post'],
  mixins: [dateProcessing],
  data() {
    return {
      userLiked: false,
    }
  },
  methods: {
    toggleLike() {
      this.userLiked = !this.userLiked

      if (this.userLiked) {
        Post.update({
          where: this.post.id,
          data: {
            numLikes: this.post.numLikes + 1,
          },
        })
      } else {
        Post.update({
          where: this.post.id,
          data: {
            numLikes: this.post.numLikes - 1,
          },
        })
      }
    },
  },
  computed: {
    isFacebookLite() {
      return FacebookLite.find(1).enabled
    },
    isUserViewOnly() {
      return FiltersValues.find(1).isUserViewOnly
    },
    isViewOnly() {
      // it's view only if it's not facebook light and the post is view only, or it's not UserViewonly and it is postViewOnly
      // In the boolean logic below, putting isFacebookLite first prevents a null access exception due to short circuit evaluation
      return (
        (!this.isFacebookLite || !this.isUserViewOnly) &&
        !this.post.filter.isPostViewOnly
      )
    },
  },
}
</script>

<style scoped>
.postSquare {
  background-color: white;
  width: 40vw;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  margin-top: 2%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: column;
}

.postPic {
  width: 40vw;
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
}
.postPicNoButtons {
  width: 40vw;
  /* height: 40vh; */
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  border-radius: 0px 0px 10px 10px;
}

.info {
  margin: 10px;
}

#name:hover {
  text-decoration: underline;
}

.Buttons {
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
  font-size: 0.9em;
}

.btn-secondary {
  color: rgb(78, 78, 78);
  background-color: transparent;
  border: 0px;
  border-radius: 6px;
  margin: 2%;
  font-weight: bold;
  font-size: 0.9em;
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
  font-size: 0.9em;
}

em {
  color: rgb(111, 111, 111);
  font-size: 0.9em;
}

.header {
  padding: 15px;
  flex-direction: column;
}

#nameHeader {
  text-align: center;
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
  margin-left: 10px;
  margin-right: 10px;
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

.shadow-none:hover {
  background-color: #f0f2f5;
}
</style>
