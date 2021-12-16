<template>
  <div>
    <div v-if="!userLoggedIn">
      <LoginPage />
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
  .home {
    width: 100%;
    display: flex;
    flex-flow: row;
    background: rgb(244, 246, 247);
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
