<template>
  <div class="home">
     <!-- <NavigationSidebar /> -->
      <div class = "content">
        <p>This is where the posts will go!</p>
      </div>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {

  },
};
</script>


<style scoped>
.home {
  /* position: fixed;
    top:0.1;
    right: 0.1;
    bottom: 0.1;
    left: 0.1; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  background: rgb(244, 246, 247);
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}


</style>
