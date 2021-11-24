<template>
    <div class="createPostSquare">
      <div class="header">
        <FriendDisplay :friend="user" onlyImage=true></FriendDisplay>
        <div @click="clickTextBox" class="roundTextBox">
          <p>What's on your mind, {{user.name}}?</p>
        </div>
      </div>
    </div>
</template>

<script>
import FriendDisplay from "@/components/Multipurpose/FriendDisplay"

    export default {
      components: {
        FriendDisplay
      },

      methods: {
        clickTextBox() {
          console.log("Hi!");
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
}

p {
  margin: 1.5%;
  padding-left: 1.5%;
  color: rgb(102, 102, 102);
}
</style>