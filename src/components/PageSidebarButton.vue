<template>
      <div>
        <router-link :to="getRouterLocation" class="sidebar-button"> 
          <table>
            <tr class="sidebar-button">
              <td>
               <i :class="'bi bi-' + iconName"></i> 
              </td>
              <td>
               <p>{{text}}</p>
              </td>
            </tr>
          </table>
         </router-link> 
      </div>
</template>

<script>
export default {
  name: "PageSidebarButton",
  props: ['iconName', 'text'],

  computed: {
    getRouterLocation: function() {
        if (this.$props.text == "Home"){
        return "/";
      }
      return "\\"
    },

  }


}

</script>


<style scoped>
.sidebar-button {
  display: table;
  width: 100%;
  height: 100%;
  padding: 8px;
  transition: 0.3s;
  border-radius: 10px;
}
.sidebar-button:hover {
  background: rgb(225, 225, 225);
  text-decoration: none;
}


.sidebar-button-icon {
  height: 29px;
  width: 29px;
  display: table-cell;
  /* vertical-align: top; */
  margin-right: -100px; /*This is a really weird hack to get the text to line up properly*/
}

p {
  display: table-cell;
  font-size: 0.9em;
  vertical-align: top;
  color:black;
  padding: 5px 0px 0px 25px;
}

i {
  color: black;
  font-size: 1.3em;
}

</style>
