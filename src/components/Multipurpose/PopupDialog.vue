<template>
  <div class="popup">
    <div class="popup-inner">
      <!-- HEADER -->
      <div class="header">
        <div id="headerContainer">
          <h2>{{ header }}</h2>
        </div>
        <div class="close">
          <button @click="togglePopup()">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
      <hr />

      <!-- CONTENT -->
      <div class="content" v-bind:style="contentStyles">
        <slot name="content"> </slot>
      </div>
      <hr />

      <!-- FOOTER -->
      <div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["togglePopup", "header", "minWidth", "maxHeight", "minHeight"],
  computed: {
    contentStyles() {
      //  TODO: figure out how to make it so the scroll bar only appears when necessary
      let styles = "";
      styles +=
        `min-height: ` +
        this.minHeight +
        ";" +
        `min-width: ` +
        this.minWidth +
        ";";

      return styles;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(241, 241, 241, 0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
}
.popup-inner {
  width: 60vw;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 8px #dadada;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

#headerContainer {
  display: flex;
  text-align: center;
  width: 100%;
}

.content {
  max-height: 80vh;
  overflow-y: auto;
}

button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: rgb(82, 82, 82);
  background-color: rgb(228, 230, 235);
  border-width: 0px;
  font-size: 0.8em;
}

h2 {
  margin: auto;
  font-weight: bold;
  font-size: 1.3em;
}

hr {
  margin: 0px;
  height: 1px;
  background-color: rgb(107, 107, 107);
  border: none;
}
</style>