<template>
  <div class="container" id="nonFacebookFriends">
    <!-- The following div is the search bar -->
    <div>
      <div class="input-icons">
        <!-- I use the following two divs/classes as described here: https://stackoverflow.com/questions/17656623/position-absolute-scrolling-->
        <!-- For the purpose of having an absolutely positioned search icon that still scrolls in the dialog box -->
        <div class="inner mb-3">
          <div class="full-height">
            <i class="bi bi-search icon"></i>
            <div v-if="!this.$root.$data.fbLiteEnabled" id="searchBoxContainer">
              <label>
                <span id="placeholderText">
                  Search for people by name, email address or phone number
                </span>
                <input
                  type="text"
                  id="searchBox2"
                  @input="updateQuery"
                  v-model="searchQuery"
                />
              </label>
            </div>
            <div v-else id="searchBoxContainer">
              <b-tooltip
                ref="tooltip"
                target="searchBoxContainer"
                placement="top"
              >
                You can add friends who don't use facebook by entering their
                email or phone number.
              </b-tooltip>
              <label>
                <span id="placeholderText">
                  Search for people by name, <strong>email address</strong> or
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
          </div>
        </div>
        <div v-show="this.$root.$data.fbLiteEnabled">
          <button
            v-show="buttonText"
            id="nonFacebookButton"
            class="btn btn-primary mb-2"
            @click="this.emitToggleNonFacebookVisibility"
          >
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
    <div id="friendSelectionContainer">
      <InviteFriendsSidebar
        v-on:selected="applySelectedList"
        v-on:event="applySelectedEvent"
        v-on:group="applySelectedGroup"
      />
      <InviteFriendsList :friendsList="friendsList" />
    </div>
  </div>
</template>

<script>
import InviteFriendsList from "../InviteFriends/InviteFriendsList.vue";
import InviteFriendsSidebar from "../InviteFriends/InviteFriendsSidebar.vue";
import Friend from "@/vuex-orm_models/FriendModel.js";
import GroupFriend from "@/vuex-orm_models/GroupFriendModel.js";
import EventFriend from "@/vuex-orm_models/EventFriendModel.js";

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
      showToolTip: false,
      friendsList: Friend.all().slice(0, 100),
    };
  },
  components: {
    InviteFriendsList,
    InviteFriendsSidebar,
  },
  mounted() {
    if (this.$root.$data.fbLiteEnabled) {
      this.$root.$on("triggerInviteFriendsTooltip", () => {
        // Sleep for 700 miliseconds before opening popup
        setTimeout(() => {
          // Note that a fat-arrow function is used here to preserve the scope of 'this' (see https://forum.vuejs.org/t/is-not-a-function/12444)
          this.onOpen();
        }, 700);
      });
    }
  },
  methods: {
    applySelectedList(list) {
      if (list === "all") {
        this.friendsList = Friend.all();
      } else {
        this.friendsList = Friend.all().slice(0, 100);
      }
    },
    applySelectedGroup(group) {
      const groupFriends = GroupFriend.all().find(
        (friend) => friend.groupName === group
      ).friends;
      this.friendsList = Friend.findIn(groupFriends);
    },
    applySelectedEvent(event) {
      const eventFriends = EventFriend.all().find(
        (friend) => friend.eventName === event
      ).friends;
      this.friendsList = Friend.findIn(eventFriends);
    },
    onOpen() {
      this.$refs.tooltip.$emit("open");
    },
    addFriend() {
      Friend.insert({ data: this.form });
    },
    emitToggleNonFacebookVisibility() {
      this.$emit("toggleNonFacebookVisibility");
    },
    updateQuery() {
      if (this.searchQuery) {
        // Make the placeholder appear or disappear depending on whether the searchQuery has text
        document.getElementById("placeholderText").style.display = "none";
        this.showToolTip = false;
      } else {
        // Placeholder is empty
        this.showToolTip = true;
        document.getElementById("placeholderText").style.display =
          "inline-block";
      }
      if (this.searchQuery.includes("@")) {
        console.log("They're entering an email!");
        this.buttonText = "Invite friends off Facebook through email";
      } else if (
        //eslint-disable-next-line
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          this.searchQuery
        )
      ) {
        // If phone number (see https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript)
        this.buttonText = "Invite friends off Facebook by phone number";
        console.log("They're entering a phone number!");
      } else {
        this.buttonText = "";
        console.log("They're still entering data.");
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
/* TODO: adjust the placeholder text such that it looks right */

/* #searchBox::placeholder {
    padding-left: 30px;
}

#searchBox::placeholder:hover {
    color: white;
    padding-left: 30px;
} */
</style>
