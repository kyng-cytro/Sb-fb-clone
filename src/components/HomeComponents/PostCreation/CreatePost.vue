<template>
  <div>
    <!-- POST PROMPT -->
    <div class="createPostSquare">
    <div class="header">
      <FriendDisplay :friend="user" onlyImage=true></FriendDisplay>
      <div @click="clickTextBox" class="roundTextBox">
        <p>What's on your mind, {{user.name}}?</p>
      </div>
    </div>


    <!-- POPUP -->
    <PopupDialog
        minWidth="30vw"
        minHeight="30vh"
        maxHeight="50vh"
        v-show="popupEnabled"
        :togglePopup="() => togglePopup('friendsTrigger')"
        header="Create post">

      <template v-slot:content>
        <CreatePostDialogContent :user="user"/>
      </template>

      <template v-slot:footer>
        <CreatePostDialogFooter />
      </template>

    </PopupDialog>
    </div>
  </div>
</template>

<script>
import FriendDisplay from "@/components/Multipurpose/FriendDisplay"
import PopupDialog from "@/components/Multipurpose/PopupDialog"
import CreatePostDialogContent from "./DialogBoxComponents/CreatePostDialogContent"
import CreatePostDialogFooter from "./DialogBoxComponents/CreatePostDialogFooter"

    export default {
      components: {
        FriendDisplay,
        PopupDialog,
        CreatePostDialogContent,
        CreatePostDialogFooter,
      },
      data() {
        return {
          popupEnabled: false,
        }
      },
      methods: {
        clickTextBox() {
          this.togglePopup();
        },
        togglePopup() {
          this.popupEnabled = !this.popupEnabled;
        }
      },
      computed: {
        user() {
          return {
            name: "Anson",
            imgSrc: "anson.jpg"
          }
        }
      }
    }
</script>

<style scoped>
.header {
  display: flex;
}
.createPostSquare {
  background-color: white;
  width: 40vw;
  border-radius: 10px;
  margin: 1%;
  padding: 2%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  display: flex;
  flex-direction: column;
}

.roundTextBox {
    margin: 1%;
    border-radius: 30px;
    width: 95%;
    height: 90%;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    background-color: rgb(240,242,245);
    cursor: pointer;
    transition: 0.3s;
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