<template>
  <div class="container">
    <div v-if="!userLoggedIn">
      <div id="loginPageContainer">
        <LoginPage />
      </div>
    </div>
    <div v-else class="home">
      <HomeSidebar />
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

  export default {
    name: "Home",
    components: {
      LoginPage,
      HomeSidebar,
      PostDisplay,
      FacebookLiteFilters,
      CreatePost,
    },
    computed: {
      userLoggedIn() {
        return false;
      },
    },
  };
</script>

<style scoped>
  .container {
    width: 100vw;
  }
  #loginPageContainer {
    background-color: rgb(240,242,245);
    height: 100vh;
    width: 99vw;
    margin-left: -9vw;
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
    /* margin-left: 9vw; */
    margin-right: 2vw;
  }
</style>
