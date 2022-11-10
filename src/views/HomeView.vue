<template>
  <div class="container-fluid p-0">
    <div v-if="!isUserLoggedIn">
      <div id="loginPageContainer">
        <LoginPage />
      </div>
    </div>
    <div v-else class="home">
      <HomeSidebar class="col-2" id="sidebar" />
      <div class="content" :class="columnSize">
        <CreatePost />
        <PostDisplay />
      </div>

      <div
        v-if="getFacebookLite"
        class="filter col-2 p-0 d-flex justify-center"
      >
        <FacebookLiteFilters />
      </div>
      <div class="contacts col-2">
        <ContactsList :friendsList="friends" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSidebar from '@/components/HomeComponents/Sidebar/HomeSidebar.vue'
import PostDisplay from '@/components/HomeComponents/PostDisplay.vue'
import CreatePost from '@/components/HomeComponents/PostCreation/CreatePost.vue'
import FacebookLiteFilters from '@/components/HomeComponents/FacebookLiteFilters.vue'
import LoginPage from '@/components/HomeComponents/LoginComponents/LoginPage'
import ContactsList from '@/components/HomeComponents/ContactsList/ContactsList.vue'
import FacebookLite from '@/vuex-orm_models/FacebookLiteModel.js'
import { UserPopulation } from '@/mixins/UserPopulation'
import { FriendPopulation } from '@/mixins/FriendPopulation.js'

export default {
  name: 'HomeView',
  mixins: [UserPopulation, FriendPopulation],
  components: {
    LoginPage,
    HomeSidebar,
    PostDisplay,
    FacebookLiteFilters,
    CreatePost,
    ContactsList,
  },
  computed: {
    getFacebookLite() {
      return FacebookLite.find(1).enabled
    },
    columnSize() {
      let fbLiteStatus = this.getFacebookLite
      return {
        'col-6': fbLiteStatus,
        'col-8': !fbLiteStatus,
      }
    },
  },
}
</script>

<style scoped>
#loginPageContainer {
  background-color: rgb(240, 242, 245);
}
#sidebar {
  position: sticky;
  margin: 1.5rem 0;
}
.home {
  width: 100%;
  display: flex;
  flex-flow: row;
}
.content {
  display: flex;
  flex-direction: column;
  padding-top: 3vh;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
