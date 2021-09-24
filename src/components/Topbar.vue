<template>
    <div className="topbar">
      <p> This is the top bar</p>
      <nav>
        <div>
          <img id="logo" src = "@/assets/images/facebook.png"></img>
          <Link class="navbar-brand" to="/">
            Facebook Lite
          </Link>
        </div>
        <div id="icons">
          <!-- <CircularIcon type = "plus"/>
          <CircularIcon type = "messenger"/>
          <CircularIcon type = "notifications"/>
          <CircularIcon type = "triangle"/> -->
        </div>
      </nav>
    </div>
</template>

<script>
//import statments will go here.
export default {
  name: "Topbar",
  components: {

  }
}
</script>


<style scoped>
#bar {
  display: flex;
  justifyContent: space-between;
  height: 55px;
  backgroundColor: white;
  boxShadow: 0px 1px 3px #d8d5d5;
  padding: 5px 5px 5px 14px;
  position: relative; /*This is done so that the shadow will appear above the Home component*/
  zIndex: 10
}

#icons {
  display: flex;
}

#logo {
  margin: 0px 20px 10px 0px;
  width: 40px;
  height: 40px;
}
</style>
