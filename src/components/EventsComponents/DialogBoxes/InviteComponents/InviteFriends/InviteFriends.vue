<template>
  <div class="container p-0" id="nonFacebookFriends">
    <div id="friendSelectionContainer">
      
      <InviteFriendsList :friendsList="friendsList" />
    </div>
  </div>
</template>

<script>
import InviteFriendsList from "../InviteFriends/InviteFriendsList.vue";
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
/* 
#placeholderText {
  position: absolute;
  margin-left: 50px;
  margin-top: 8px;
  color: rgb(77, 72, 72);
}

#searchBoxContainer {
  border-radius: 30px;
  width: 100%;
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
} */
/* TODO: adjust the placeholder text such that it looks right */

/* #searchBox::placeholder {
    padding-left: 30px;
}

#searchBox::placeholder:hover {
    color: white;
    padding-left: 30px;
} */
</style>
