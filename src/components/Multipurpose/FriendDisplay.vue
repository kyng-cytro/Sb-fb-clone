<template>
  <!-- NOTE: THIS COMPONENT WILL DISPLAY ACCORDING TO THE OBJECT PASSED IN. IF IT HAS AN EMAIL FIELD, IT WILL SHOW AN EMAIL ICON. ETC. -->
  <div class="horizontalAlign">
    <i v-if="isEmail" class="bi bi-envelope" :style="iconStyles"></i>

    <!-- If they are a phone user -->
    <i v-else-if="isPhone" class="bi bi-chat-dots" :style="iconStyles"></i>

    <img
      v-else
      src="@/assets/images/FriendProfilePics/generic-profile-picture.jpg"
      :style="imgStyles"
    />

    <!-- The name of the person -->
    <p
      v-if="slotBelowText == null || slotBelowText == false"
      :style="textStyles"
    >
      {{ friend.name }}
    </p>
    <!-- Or, if they include another element in this component, it shows up here -->
    <div v-else-if="slotBelowText == true" class="textAndSlot">
      <div class="d-flex flex-column">
        <p v-show="!onlyImage" :style="textStyles" class="m-0">
          {{ friend.name }}
        </p>
        <p v-if="addDate != null" id="date">{{ addDate }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // friend is a friend object
  // size is a value of 'small' or 'normal'
  props: ['friend', 'size', 'onlyImage', 'bold', 'slotBelowText', 'addDate'],
  computed: {
    isFacebookFriend() {
      // Assumed to be a Facebook friend if the friend object has an image source
      return Object.prototype.hasOwnProperty.call(this.friend, 'imageSource')
    },
    isFacebookWithImage() {
      return this.isFacebookFriend && this.friend.imageSource !== ''
    },
    isFacebookWithoutImage() {
      return (
        !this.isFacebookWithImage &&
        !this.isEmail &&
        !this.isPhone &&
        !this.isBoth
      )
    },
    isEmail() {
      return (
        Object.prototype.hasOwnProperty.call(this.friend, 'email') &&
        this.friend.email != null &&
        !(this.friend.phone != null)
      )
    },
    isPhone() {
      return (
        Object.prototype.hasOwnProperty.call(this.friend, 'phone') &&
        this.friend.phone != null &&
        !(this.friend.email != null)
      )
    },
    imgStyles() {
      if (this.size === 'small') {
        return `
                    width: 25px;
                    height: 25px;`
      } else if (this.size === 'large') {
        return `
                    width: 50px;
                    height: 50px;`
      } else {
        return `
                    width: 37px;
                    height: 37px;`
      }
    },

    textStyles() {
      let styles = ''
      if (this.size === 'small') {
        styles += `
                        font-size: 0.9em;;
                        text-align: left;
                        margin: 0;
                        margin-left: 10px;`
        if (this.friend.name.length > 15) {
          // Chances are that it had to wrap around (although not for sure)
          styles += 'padding-top: 2px;'
        }
      } else {
        styles += `
                        margin: 0;
                        margin-left: 10px;
                        font-size: 1em;`
      }
      if (this.bold) {
        styles += `
                        line-height: normal;
                        font-weight: bold;
                        `
      }
      if (this.slotBelowText) {
        // If there's something below the text, we need to move the text up a bit.
        styles += `
                font-size: 0.9em;
                margin-top: 0%;
                margin-bottom: -2%;
            `
      }
      return styles
    },

    iconStyles() {
      let styles = ''
      if (this.size === 'small') {
        styles += `
                        padding-top: 2px;
                        font-size: 1.6em;
                        `
      } else {
        styles += `
                        font-size: 2em;`
      }
      return styles
    },
  },
  methods: {
    setAltImg(event) {
      event.target.src = `https://ui-avatars.com/api/?name=${this.friend.name
        .split(' ')
        .join('+')}`
    },
  },
}
</script>

<style scoped>
.horizontalAlign {
  display: flex;
  align-items: center;
  padding: 0px;
  line-height: 35px;
  text-align: flex-start;
}

img {
  object-fit: cover; /*This makes it so the image is cropped instead of squished */
  border-radius: 50%;
}

p i {
  padding-left: -15px;
}

i {
  /* padding-right: 60px; */
  color: rgb(137, 142, 149);
  font-weight: bold;
}
.textAndSlot {
  margin-left: 10px;
}

#date {
  margin: 0;
  line-height: normal;
  font-size: 0.75em;
  font-weight: bold;
  color: rgb(136, 136, 136);
}
</style>
