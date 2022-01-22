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
        <input
          id="searchBox"
          class="input-field"
          type="text"
          v-model="form.data"
          placeholder="Search for friends by name"
        />
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
      };
    },
    props: ["invitedFriends"],
    components: {
      InviteFriendsList,
      InviteFriendsSidebar,
    },
    methods: {
      addFriend() {
        Friend.insert({ data: this.form });
      },
    },
  };
</script>

<style scoped>
  .container {
    padding: 15px;
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
    font-size: .9em;;
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
