<template>
  <div class="home">
     <HomeSidebar />
      <div class = "content">
        <!-- <p>This is where the posts will go!</p> -->
        <PostDisplay />
        <!-- <div v-if="facebookLight">
          HelloWorld
        </div> -->
               

        <!-- <FacebookLiteFilters /> -->
      </div>

      <div class = "filter">
        <p>filters</p>

        <FacebookLiteFilters />
      
      </div>

      
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import HomeSidebar from "@/components/HomeComponents/Sidebar/HomeSidebar.vue";
import PostDisplay from "@/components/HomeComponents/PostDisplay.vue";
import faceLight from "@/classes/faceLight.js";
import FacebookLiteFilters from "@/components/HomeComponents/facebookLiteFilters.vue";

export default {
  name: "Home",
   data() {
  //   return { deleted: false, accepted: false }
    return {
      facebookLight: HomeSidebar.facebookLight,FacebookLiteFilters, //''
    }
   },
  components: {
    HomeSidebar,
    PostDisplay,
    FacebookLiteFilters
  },

    computed:  {
      getFaceLight(){
        return faceLight.find(1).enabled;
      }
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
  /*justify-content: space-between; */
  flex-flow: row;
  background: rgb(244, 246, 247);
}

.content {
  /*position: absolute;
  left: 300px;*/
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: 100px;
}

.filter {

  margin-left: 100px;
  
}


</style>
