<template>
  <div class="container">
    <!-- HEADER -->
    <div class="header">
      <FriendDisplay
        :friend="this.user"
        :size="getFacebookLite ? 'large' : ''"
        :bold="true"
        :slotBelowText="true"
      >
        <div class="dropdown" :class="getFacebookLite ? 'w-50' : ''">
          <button
            class="btn btn-outline-secondary btn-sm dropdown-toggle m-0"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bi mr-1" :class="privacyIcon"></i>
            {{ privacy }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button class="dropdown-item" @click="togglePublicVisibility">
              <i class="bi bi-globe mr-1"></i> Public
            </button>
            <button class="dropdown-item" @click="toggleFriendOnlyVisibility">
              <i class="bi bi-people-fill mr-1"></i> Friends
            </button>
            <button class="dropdown-item" @click="togglePrivateVisibility">
              <i class="bi bi-lock-fill mr-1"></i> Only Me
            </button>
          </div>
        </div>
        <!-- Facebook Lite Toggles -->
        <div v-if="getFacebookLite" class="custom-toggles d-flex">
          <!-- View Only -->
          <div
            class="form-check form-check-inline d-flex justify-content-center"
          >
            <input type="checkbox" v-model="isPostViewOnly" id="view-only" />
            <label
              class="mb-0 ml-1"
              :class="
                isPostViewOnly ? 'text-dark font-weight-bold' : 'text-secondary'
              "
              for="view-only"
            >
              View Only
            </label>
          </div>
          <!-- Major Event -->
          <div
            class="form-check form-check-inline d-flex justify-content-center"
          >
            <input type="checkbox" v-model="isMajorEvent" id="major-event" />
            <label
              class="mb-0 ml-1"
              :class="
                isMajorEvent ? 'text-dark font-weight-bold' : 'text-secondary'
              "
              for="major-event"
            >
              Major Event
            </label>
          </div>
        </div>
      </FriendDisplay>
    </div>
    <!-- TEXT ENTRY -->
    <div class="textarea">
      <textarea
        :ref="'postText'"
        :placeholder="
          'What\'s on your mind, ' + this.user.name.split(' ')[0] + '?'
        "
        :style="textAreaStyles"
        v-model="postBeingCreated.text"
      ></textarea>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <button v-if="ableToPost" @click="post()" class="btn btn-primary">
        Post
      </button>
      <button v-else id="bootstrap-override" class="btn btn-secondary" disabled>
        Post
      </button>
    </div>
  </div>
</template>

<script>
import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
import FriendDisplay from '@/components/Multipurpose/FriendDisplay'
import Post from '@/vuex-orm_models/PostModel.js'

export default {
  data() {
    return {
      postBeingCreated: {
        text: '',
        friend: this.user,
      },
      privacy: 'Public',
      isMajorEvent: false,
      isPostViewOnly: false,
    }
  },
  mounted() {
    this.focusInput()
  },
  updated() {
    this.focusInput()
  },
  props: ['user'],
  components: {
    FriendDisplay,
  },
  methods: {
    focusInput() {
      this.$refs.postText.focus()
    },
    togglePublicVisibility() {
      this.privacy = 'Public'
    },
    toggleFriendOnlyVisibility() {
      this.privacy = 'Friends'
    },
    togglePrivateVisibility() {
      this.privacy = 'Only Me'
    },
    toggleViewOnlyPost() {
      this.isPostViewOnly = !this.isPostViewOnly
    },
    toggleMajorEvent() {
      this.isMajorEvent = !this.isMajorEvent
    },
    closeDialog() {
      this.$root.$emit('closeCreatePostDialog')
    },
    resetFields() {
      this.postBeingCreated.text = ''
      this.isMajorEvent = false
      this.isPostViewOnly = false
    },
    post() {
      let post = {
        imageSource: '', // No image (yet)
        friend: this.user,
        text: this.postBeingCreated.text,
        date: new Date().toString(),
        numComments: 0,
        numShares: 0,
        numLikes: 0,
        filter: {
          isMajorEvent: this.isMajorEvent,
          isPostViewOnly: this.isPostViewOnly,
        },
      }
      this.resetFields()
      Post.insert({ data: post })
      this.closeDialog()
    },
  },
  computed: {
    privacyIcon() {
      if (this.privacy === 'Public') {
        return 'bi-globe'
      } else if (this.privacy === 'Friends') {
        return 'bi-people-fill'
      } else if (this.privacy === 'Only Me') {
        return 'bi-lock-fill'
      } else return ''
    },
    viewOnlyIcon() {
      if (this.isPostViewOnly) {
        return 'bi-eye'
      } else {
        return 'bi-globe'
      }
    },
    majorEventIcon() {
      if (this.isMajorEvent) {
        return 'bi-gift-fill'
      } else {
        return 'bi-gift'
      }
    },
    ableToPost() {
      return this.postBeingCreated.text.length > 0
    },
    textAreaStyles() {
      let styles = `
                    width: 100%;
                    border: none;
                    resize: none;
                    outline: none;
                    overflow: hidden;
                `
      styles +=
        this.postBeingCreated.text.length < 61
          ? 'font-size: 1.7em;'
          : 'font-size: 1em;'
      return styles
    },
    getFacebookLite() {
      return FacebookLite.find(1).enabled
    },
    viewOnlyButtonStyles() {
      return this.isPostViewOnly
        ? 'background-color: #1b74e4 !important;'
        : 'background-color: gray !important; color: white;'
    },
    majorEventButtonStyles() {
      return this.isMajorEvent
        ? 'background-color: #1b74e4 !important;'
        : 'background-color: gray !important; color: white;'
    },
  },
}
</script>

<style scoped>
.header {
  padding: 15px;
  flex-direction: column;
}
.buttons {
  font-size: 0.8em;
  font-weight: bold;
  color: rgb(78, 78, 78);
  width: 20vw;
}
.checkboxButton {
  margin-top: 5px;
  outline: 0 !important;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 0.8125em;
  line-height: 10%;
  width: fit-content;
  height: 2vh;
  padding: 10px;
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
button {
  width: 100%;
  margin-top: 3%;
  margin-bottom: 3%;
  font-weight: bold;
  line-height: normal;
}
.btn-secondary {
  background-color: rgb(228, 230, 235) !important;
  border: none !important;
  color: grey !important;
}

.lineHeight {
  line-height: normal;
}
</style>
