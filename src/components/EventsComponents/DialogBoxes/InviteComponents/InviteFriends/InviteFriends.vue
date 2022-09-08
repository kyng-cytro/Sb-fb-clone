<template>
  <div class="container p-0" id="nonFacebookFriends">
    <div id="friendSelectionContainer">
      <InviteFriendsList
        :friendsList="this.$parent.friendsList"
        v-if="this.$parent.externalInviteMethod === null"
      />
      <InviteNonFacebook
        v-else
        :method="this.$parent.externalInviteMethod"
        @toggleNonFacebookVisibility="
          (n) => $emit('toggleNonFacebookVisibility', n)
        "
      />
    </div>
  </div>
</template>

<script>
import InviteFriendsList from '../InviteFriends/InviteFriendsList.vue'
import InviteNonFacebook from '../InviteNonFacebook.vue'
import Friend from '@/vuex-orm_models/FriendModel.js'

export default {
  data() {
    return {
      form: {
        name: '',
        imageSource: '',
        numOfMutualFriends: null,
      },
      buttonText: '',
      showToolTip: false,
    }
  },
  components: {
    InviteFriendsList,
    InviteNonFacebook,
  },
  methods: {
    addFriend() {
      Friend.insert({ data: this.form })
    },
    emitToggleNonFacebookVisibility() {
      this.$emit('toggleNonFacebookVisibility')
    },
  },
}
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
