<template>
  <div
    class="container m-0 d-flex"
    style="justify-content: space-evenly"
    id="nonFacebookForm"
  >
    <form @submit.prevent="addNonFacebookFriend">
      <p>Want to invite friends not through Facebook? No problem!</p>

      <div class="form-group">
        <input placeholder="Name" v-model="form.name" class="form-control" />
      </div>

      <div class="form-group" v-show="method === 'phone'">
        <input
          placeholder="Phone number"
          v-model="form.phone"
          class="form-control"
        />
      </div>

      <div class="form-group" v-show="method === 'email'">
        <input placeholder="Email" v-model="form.email" class="form-control" />
      </div>
      <button class="btn btn-primary" @click="addNonFacebookFriend">
        Add non-Facebook friend
      </button>
    </form>
  </div>
</template>

<script>
import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js";
export default {
  props: { method: String },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    addNonFacebookFriend() {
      if (this.form.name === "" || (this.form.phone === "" && this.form.email === ""))
        return;
        
      // Insert a new nonFacebookFriend into the Vuex database
      NonFacebookFriend.insert({
        data: this.form,
      });

      //Clear the form
      this.form = {
        name: "",
        phone: "",
        email: "",
      };
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  padding-left: 30px;
}
p {
  color: grey;
  font-style: italic;
}

.info {
  display: flex;
}
button {
  padding-left: 30px;
  padding-right: 30px;
  align-self: flex-end;
  width: 100%;
}

.bi:hover {
  color: red;
}
</style>
