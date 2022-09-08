<template>
  <div id="nav">
    <tr class="facebookEnableBox">
      <td>
        <p>Facebook Lite:</p>
      </td>
      <td>
        <toggle-button
          class="toggle"
          :value="this.getFacebookLite"
          @change="updateFacebookLite()"
          :height="27"
          color="#1877F2"
        />
      </td>
    </tr>
    <div v-for="type in this.facebookLightButtons" :key="type">
      <SidebarButton :type="type" />
    </div>

    <div v-for="type in this.facebookButtons" :key="type">
      <SidebarButton :type="type" />
    </div>
  </div>
</template>

<script>
import ToggleButton from 'vue-js-toggle-button'
import SidebarButton from './SidebarButton.vue'
import Vue from 'vue'
import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
import FriendRequest from '@/vuex-orm_models/FriendRequestModel.js'
import Friend from '@/vuex-orm_models/FriendModel.js'
import NonFacebookFriend from '../../../vuex-orm_models/NonFacebookFriendModel'

Vue.use(ToggleButton)

export default {
  name: 'HomeSidebar',
  components: {
    SidebarButton,
  },
  data() {
    return {
      facebookLight: this.getFacebookLite, //eslint-disable-line
      facebookLightButtons: null,
      facebookButtons: null,
      toggleButtonHeight: 27,
    }
  },
  computed: {
    getFacebookLite() {
      return FacebookLite.find(1).enabled
    },
  },
  created() {
    this.$root.$data.fbLiteEnabled = this.getFacebookLite
    this.facebookLightButtons = ['friends', 'groups', 'events', 'favorites']
    this.facebookButtons = [
      'marketplace',
      'watch',
      'memories',
      'saved',
      'pages',
      'news',
    ]
  },
  methods: {
    updateFacebookLite() {
      // Update FB Lite Status (whether on or off)
      FacebookLite.update({
        where: 1,
        data: {
          enabled: !this.getFacebookLite,
        },
      })

      // Reset Friend Requests to pending (so we can reuse our entered friends)
      FriendRequest.update({
        where: (friend) => {
          return friend.id
        },
        data: {
          state: 'pending',
        },
      })

      // Reset Friends to not invited (so we can reuse our event invites from scratch)
      Friend.update({
        where: (friend) => {
          return friend.id
        },
        data: {
          invited: false,
          selected: false,
        },
      })

      NonFacebookFriend.update({
        where: (friend) => {
          return friend.id
        },
        data: {
          selected: false,
          invited: false,
        },
      })

      this.$root.$data.fbLiteEnabled = this.getFacebookLite
    },
  },
}
</script>
<style scoped>
#nav {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 20vw;
}

/* .facebookEnableBox {
    border-color: rgb(212, 212, 212);
    border-width: 1px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px rgb(140, 140, 140);
  } */

.toggle {
  padding-left: 30%;
  padding-top: 10%;
}
input {
  margin: 8px;
}
toggle-button {
  margin-left: 1%;
}
</style>
