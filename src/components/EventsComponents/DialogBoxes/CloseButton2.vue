<template>
  <div class="popUpBox">
    <div class="header">
      <strong>Email Invitation</strong>
      <div class="close">
        <button @click="closeModal">×</button>
      </div>
    </div>
    <div class="content">
      <p>Email to</p>
      <textarea></textarea>
      <EmailAutoComplete ref="EmailAutoComplete" :onCompletion='(val) => emailAddress = val'>
        <input type='text' v-model='emailAddress' @keydown.native='$refs.EmailAutoComplete.check($event)' />
      </EmailAutoComplete>
    </div>
  </div>
</template>

<script>
import EmailAutoComplete from "vue-email-autocomplete";
import "vue-email-autocomplete/dist/vue-email-autocomplete.css";

export default {
  methods: {
    closeModal: function () {
      this.$FModal.hide();
    },
    components: {
      EmailAutoComplete
    },
    data() {
      return {
        emailAddress: '',
        customDomains: [
          "domain1.com",
          "domain2.com",
          "domain3.com",
          "domain4.com"
        ]
      }
    }
  },
};
</script>

<style scoped>
.popUpBox {
  /* box-shadow: 0px 0px 3px rgb(140, 140, 140); */
  /* bo */
  border-radius: 10px;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  height: 55px;
  box-shadow: 0px 1px 3px #d8d5d5;
  padding: 8px 5px 5px 14px;
  position: relative;
  z-index: 12;
}

.content {
  padding: 50px 50px 50px 50px;
  background-color: rgb(240,242,245);
}
.close {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.close button {
  width: 40px;
  height: 40px;
  font-size: 2rem;
  border-radius: 50%;
  border-width: 0px;
  background-color: rgb(228,230,235);
}

* {
  font-size: 1.5rem;
}
</style>
