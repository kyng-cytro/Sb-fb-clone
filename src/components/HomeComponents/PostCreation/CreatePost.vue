<template>
  <div>
    <!-- POST PROMPT -->
    <div class="createPostSquare">
      <div class="header justify-content-center">
        <div class="profilePic d-flex">
          <FriendDisplay :friend="user" slotBelowText="false"></FriendDisplay>
        </div>
        <div @click="clickTextBox" class="roundTextBox">
          <p id="whatOnMind">What's on your mind, {{ this.userFirstname }}?</p>
        </div>
      </div>
    </div>

    <!-- POPUP -->
    <PopupDialog
      minWidth="30vw"
      minHeight="30vh"
      maxHeight="50vh"
      v-show="popupEnabled"
      :togglePopup="() => togglePopup()"
      header="Create post"
    >
      <template v-slot:content>
        <CreatePostDialogContent :user="user" />
      </template>

      <!-- We have a manual footer in the Dialog Content for the sake of code simplicity and formatting -->
      <!-- <template v-slot:footer>
        <CreatePostDialogFooter />
      </template> -->
    </PopupDialog>
  </div>
</template>

<script>
import FriendDisplay from '@/components/Multipurpose/FriendDisplay'
import PopupDialog from '@/components/Multipurpose/PopupDialog'
import CreatePostDialogContent from './DialogBoxComponents/CreatePostDialogContent'
import { UserPopulation } from '@/mixins/UserPopulation'
// import CreatePostDialogFooter from "./DialogBoxComponents/CreatePostDialogFooter"

export default {
  mixins: [UserPopulation],
  mounted() {
    this.$root.$on('closeCreatePostDialog', () => {
      this.togglePopup()
    })
  },
  components: {
    FriendDisplay,
    PopupDialog,
    CreatePostDialogContent,
    // CreatePostDialogFooter,
  },
  data() {
    return {
      popupEnabled: false,
    }
  },
  methods: {
    clickTextBox() {
      this.togglePopup()
    },
    togglePopup() {
      this.popupEnabled = !this.popupEnabled
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
}
.createPostSquare {
  background-color: white;
  width: 40vw;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 3%;
  padding: 15px;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
}

.roundTextBox {
  margin: 5px;
  border-radius: 30px;
  width: 95%;
  height: 40px;
  line-height: 2vh;
  display: flex;
  align-items: center;
  border: 0px solid #ccc;
  box-sizing: border-box;
  background-color: rgb(240, 242, 245);
  cursor: pointer;
  transition: 0.3s;
}

#whatOnMind {
  /* This is done to avoid the text moving to weird places dependent on the screen size */
  position: absolute;
  margin: 0;
  padding: 0;
  padding-left: 18px;
}

.roundTextBox:hover {
  background-color: rgb(230, 230, 230);
  transition: 0.3s;
}

p {
  margin: 1.5%;
  padding-left: 1.5%;
  color: rgb(102, 102, 102);
}
</style>
