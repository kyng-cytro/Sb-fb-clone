<template>
  <div class="container">
    <div v-if="!isUserLoggedIn">
      <div id="loginPageContainer">
        <LoginPage />
      </div>
    </div>
    <div v-else class="home">
      <HomeSidebar id="sidebar"/>
      <div class="content">
        <CreatePost />
        <PostDisplay />
      </div>

      <div class="filter">
        <FacebookLiteFilters />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSidebar from "@/components/HomeComponents/Sidebar/HomeSidebar.vue";
import PostDisplay from "@/components/HomeComponents/PostDisplay.vue";
import CreatePost from "@/components/HomeComponents/PostCreation/CreatePost.vue";
import FacebookLiteFilters from "@/components/HomeComponents/FacebookLiteFilters.vue";
import LoginPage from "@/components/HomeComponents/LoginComponents/LoginPage";
import { UserPopulation } from "@/mixins/UserPopulation";

export default {
  name: "Home",
  mixins: [UserPopulation],
  components: {
    LoginPage,
    HomeSidebar,
    PostDisplay,
    FacebookLiteFilters,
    CreatePost,
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  padding: 0px;
  margin: 0px;
}
#loginPageContainer {
  background-color: rgb(240, 242, 245);
  width: 100vw;
  height: 100vh;
}
#sidebar {
  position: fixed;
  margin: 20px 10px;
}
.home {
  width: 100%;
  display: flex;
  flex-flow: row;
}

.content {
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding-top: 3vh;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 100px;
}

.filter {
  margin-right: 2vw;
}
</style>
