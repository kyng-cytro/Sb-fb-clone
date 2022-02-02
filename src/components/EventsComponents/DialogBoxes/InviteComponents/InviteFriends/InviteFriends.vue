<template>
  <div class="container">
    <!-- The following div is the search bar -->
    <div>
      <div class="input-icons">
        <!-- I use the following two divs/classes as described here: https://stackoverflow.com/questions/17656623/position-absolute-scrolling-->
        <!-- For the purpose of having an absolutely position search icon that still scrolls in the dialog box -->
        <div class="inner">
          <div class="full-height">
            <i class="bi bi-search icon"></i>
          </div>
        </div>
        <div id="searchBoxContainer">
          <label>
            <span id="placeholderText">
              Search for friend by name, <strong>email address</strong> or
              <strong>phone number</strong>
            </span>
            <input
              type="text"
              id="searchBox2"
              @input="updateQuery"
              v-model="searchQuery"
            />
          </label>
        </div>
        <!-- <input
          id="searchBox"
          class="input-field"
          type="text"
          v-model="form.data"
          placeholder="Search for friends by name"
        /> -->
        <button v-show="buttonText"
          id="nonFacebookButton"
          class="btn btn-primary"
          @click="this.emitToggleNonFacebookVisibility"
        >
          {{buttonText}}
        </button>
      </div>
    </div>
    <div id="friendSelectionContainer">
      <InviteFriendsSidebar />
      <InviteFriendsList />
    </div>
  </div>
</template>

<script>
  import InviteFriendsList from "../InviteFriends/InviteFriendsList.vue";
  import InviteFriendsSidebar from "../InviteFriends/InviteFriendsSidebar.vue";
  import Friend from "@/vuex-orm_models/FriendModel.js";
  export default {
    data() {
      return {
        form: {
          name: "",
          imageSource: "",
          numOfMutualFriends: null,
        },
        searchQuery: "",
        buttonText: "",
      };
    },
    components: {
      InviteFriendsList,
      InviteFriendsSidebar,
    },
    methods: {
      addFriend() {
        Friend.insert({ data: this.form });
      },
      emitToggleNonFacebookVisibility() {
        this.$emit("toggleNonFacebookVisibility");
      },
      updateQuery() {
        if (this.searchQuery) { // Make the placeholder appear or disappear depending on whether the searchQuery has text
          document.getElementById("placeholderText").style.display = "none";
        } else {
          document.getElementById("placeholderText").style.display = "inline-block";
        }
        if (this.searchQuery.includes("@")) {
          console.log("They're entering an email!")
          this.buttonText = "Invite friend by email";
        //eslint-disable-next-line
        } else if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(this.searchQuery)) { // If phone number (see https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript)
          this.buttonText = "Invite friend by phone number";
          console.log("They're entering a phone number!")
        } else {
          this.buttonText = "";
          console.log("They're still entering data.")
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    padding: 15px;
    padding-bottom: 0px;
  }

  #placeholderText {
    position: absolute;
    margin-left: 50px;
    margin-top: 8px;
    color: rgb(77, 72, 72);
  }

  #searchBoxContainer {
    border-radius: 30px;
    width: 600px;
    height: 40px;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    background-color: rgb(240, 242, 245);
  }

  #searchBox2 {
    position: relative;
    padding-left: 50px;
    background: none;
    border-radius: 30px;
    width: 600px;
    height: 40px;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    /* background-color: rgb(240, 242, 245); */
  }

  #searchBox2:focus {
    outline: 0px;
  }

  #searchBox {
    border-radius: 30px;
    width: 600px;
    height: 40px;
    display: inline-block;
    border: 0px solid #ccc;
    box-sizing: border-box;
    background-color: rgb(240, 242, 245);
  }

  #searchBox:focus {
    outline: 0px;
  }

  .input-icons i {
    position: absolute;
  }

  .inner {
    position: relative;
    height: auto;
  }

  .full-height {
    height: 100%;
  }

  .input-icons {
    width: 100%;
    margin-bottom: 10px;
  }

  .icon {
    padding: 10px;
    min-width: 50px;
    text-align: center;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    text-align: left;
    /* Below makes it so that there's room for the search bar icon */
    padding-left: 43px;
    font-size: 0.9em;
  }

  #searchBox {
    width: 370px;
  }

  #friendSelectionContainer {
    display: flex;
  }
  button {
    margin-left: 12px;
  }
  #nonFacebookButton {
    margin-left: 20px;
  }
  /* TODO: adjust the placeholder text such that it looks right */

  /* #searchBox::placeholder {
    padding-left: 30px;
}

#searchBox::placeholder:hover {
    color: white;
    padding-left: 30px;
} */
</style>
