<template>
  <div>
    <router-link :to="'/' + capitalizeFirstLetter(type)" class="sidebar-button">
      <table>
        <tr>
          <td>
            <img class="sidebar-button-icon" :src="getImage" />
          </td>
          <td>
            <p>{{ capitalizeFirstLetter(type) }}</p>
          </td>
        </tr>
      </table>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarButton',
  props: ['type'],
  methods: {
    capitalizeFirstLetter(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    },
  },
  computed: {
    getImage() {
      return require('@/assets/images/SidebarIcons/' + this.type + '.png')
    },
  },
}
</script>

<style scoped>
.sidebar-button {
  display: table;
  width: 100%;
  height: 100%;
  padding: 8px;
  transition: 0.3s;
  border-radius: 7px;
}
.sidebar-button:hover {
  background: rgb(225, 225, 225);
  text-decoration: none;
}

.sidebar-button-icon {
  height: 29px;
  width: 29px;
  display: table-cell;
  margin-right: -100px; /*This is a really weird hack to get the text to line up properly*/
}

p {
  display: table-cell;
  font-size: 0.9em;
  vertical-align: top;
  color: black;
  padding: 5px 0px 0px 45px;
}
</style>
