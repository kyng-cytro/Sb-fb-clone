<template>


  <email-auto-complete ref="EmailAutoComplete" :onCompletion='(val) => emailAddress = val' :domains='customDomains'>
    <input type="text" v-model='emailAddress' @keydown.native='$refs.EmailAutoComplete.check($event)' />
  </email-auto-complete>

</template>

<script>

/* Import Package and Styles */

import EmailAutoComplete from "vue-email-autocomplete";
import "vue-email-autocomplete/dist/vue-email-autocomplete.css";

export default {

  /* Import Component */

  components: {
    EmailAutoComplete
  },

  /* Prime Model as Standard */

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

}
</script>
