<template>
  <!-- NOTE: THIS COMPONENT WILL DISPLAY ACCORDING TO THE OBJECT PASSED IN. IF IT HAS AN EMAIL FIELD, IT WILL SHOW AN EMAIL ICON. ETC. -->
  <div class="horizontalAlign">
    <!-- If the user is a facebook user: -->
    <img
      v-if="isFacebookWithImage"
      v-bind:style="imgStyles"
      :src="
        friend.imageSource.slice(friend.imageSource.length - 3) == 'jpg'
          ? require('@/assets/images/FriendProfilePics/' + friend.imageSource)
          : friend.imageSource
      "
      @error="setAltImg"
    />
    <!-- That last line there says that if it ends with jpg, look in the FriendProfilePics folder for the image. Otherwise, assume it's a public URL -->

    <!-- If they are an email user -->
    <i v-else-if="isEmail" class="bi bi-envelope" :style="iconStyles"></i>

    <!-- If they are a phone user -->
    <i v-else-if="isPhone" class="bi bi-chat-dots" :style="iconStyles"></i>

    <!-- If they use both email and phone or if they are a facebook user but don't have an image -->
    <i
      v-else-if="isBoth || isFacebookWithoutImage"
      class="bi bi-person"
      :style="iconStyles"
    ></i>

    <!-- The name of the person -->
    <div v-if="slotBelowText == null || !slotBelowText">
      <p v-show="!onlyImage" :style="textStyles">{{ friend.name }}</p>
    </div>
    <!-- Or, if they include another element in this component, it shows up here -->
    <div v-else-if="slotBelowText" class="textAndSlot">
      <div>
        <p v-show="!onlyImage" :style="textStyles">{{ friend.name }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // friend is a friend object
    // size is a value of 'small' or 'normal'
    props: ["friend", "size", "onlyImage", "bold", "slotBelowText"],
    computed: {
      isFacebookFriend() {
        // Assumed to be a Facebook friend if the friend object has an image source
        return Object.prototype.hasOwnProperty.call(this.friend, "imageSource");
      },
      isFacebookWithImage() {
        return this.isFacebookFriend && this.friend.imageSource !== "";
      },
      isFacebookWithoutImage() {
        return (
          !this.isFacebookWithImage &&
          !this.isEmail &&
          !this.isPhone &&
          !this.isBoth
        );
      },
      isEmail() {
        return (
          Object.prototype.hasOwnProperty.call(this.friend, "email") &&
          this.friend.email !== "" &&
          !(this.friend.phone !== "")
        );
      },
      isPhone() {
        return (
          Object.prototype.hasOwnProperty.call(this.friend, "phone") &&
          this.friend.phone !== "" &&
          !(this.friend.email !== "")
        );
      },
      isBoth() {
        return (
          !this.isFacebookFriend &&
          this.friend.phone !== "" &&
          this.friend.email !== ""
        );
      },

      imgStyles() {
        if (this.size === "small") {
          return `
                    margin-top: 5px;
                    width: 25px;
                    height: 25px;`;
        } else {
          return `
                    margin-top: 5px;
                    width: 37px;
                    height: 37px;`;
        }
      },

      textStyles() {
        let styles = "";
        if (this.size === "small") {
          styles += `
                        margin-left: 3px;
                        font-size: 0.9em;;
                        width: 120px;
                        text-align: left;
                        padding-top: 10px;
                        line-height: 15px;
                        word-wrap:break-word;`;
          if (this.friend.name.length > 15) { // Chances are that it had to wrap around (although not for sure)
            styles += "padding-top: 2px;";
          }
        } else {
          styles += `
                        margin-left: 10px;
                        margin-top: 7px;
                        font-size: 1em;`;
        }
        if (this.bold) {
          styles += `
                        font-weight: bold;
                        `;
        }
        if (this.slotBelowText) {
          // If there's something below the text, we need to move the text up a bit.
          styles += `
                font-size: 0.9em;
                margin-top: 0%;
                margin-bottom: -2%;
            `;
        }
        return styles;
      },

      iconStyles() {
        let styles = "";
        if (this.size === "small") {
          styles += `
                        padding-top: 2px;
                        font-size: 1.6em;
                        `;
        } else {
          styles += `
                        padding-top: 6px;
                        font-size: 2em;`;
        }
        return styles;
      },
    },
    methods: {
      setAltImg(event) {
        event.target.src = `https://ui-avatars.com/api/?name=${this.friend.name.split(' ').join('+')}`;
      }
    }
  };
</script>

<style scoped>
  .horizontalAlign {
    display: flex;
    padding: 0px;
    height: 30px;
    line-height: 35px;
    text-align: center;
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
    /* width: fit-content; */
    /* width: 100%; */
    margin-left: 0px;
    padding-left: 0px;
    margin-right: auto;
    height: fit-content;
    width: 100%;
    text-align: left;
  }
</style>
