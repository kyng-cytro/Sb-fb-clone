<template>
  <div>
    <!-- POST PROMPT -->
    <div class="createPostSquare">
      <div class="header">
        <div class="profilePic">
          <FriendDisplay :friend="user" onlyImage="true"></FriendDisplay>
        </div>
        <div @click="clickTextBox" class="roundTextBox">
          <p>What's on your mind, {{ userFirstname }}?</p>
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
  import FriendDisplay from "@/components/Multipurpose/FriendDisplay";
  import PopupDialog from "@/components/Multipurpose/PopupDialog";
  import CreatePostDialogContent from "./DialogBoxComponents/CreatePostDialogContent";
  import { UserPopulation } from "@/mixins/UserPopulation";
  // import CreatePostDialogFooter from "./DialogBoxComponents/CreatePostDialogFooter"

  export default {
    mixins: [UserPopulation],
    mounted() {
      this.$root.$on("closeCreatePostDialog", () => {
        this.togglePopup();
        console.log("Trying to close the post popup");
      });
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
      };
    },
    methods: {
      clickTextBox() {
        this.togglePopup();
      },
      togglePopup() {
        this.popupEnabled = !this.popupEnabled;
      },
    },
  };
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
    display: flex;
    flex-direction: column;
  }

  .roundTextBox {
    margin: 5px;
    border-radius: 30px;
    width: 95%;
    height: 40px;
    line-height: 30px;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    background-color: rgb(240, 242, 245);
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
