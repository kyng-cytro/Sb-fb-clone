<template>

        <div>
          <em>{"Expires in " + this.friends.daysUntilExpiration + " days"}</em>
          <div>
            <button type="button" onClick = {this.handleAcceptClick} class = "btn btn-primary">Confirm</button>
          </div>
          <div>
            <button type="button" onClick = {this.handleDeleteClick} class="btn btn-secondary">Delete</button>
          </div>
        </div>

</template>

<script>
export default {
  name: "friend-request-square",
  props: ["friends"],
  data() {
    return { deleted: false, accepted: false }
  },
  methods: {
    handleDeleteClick() {
      this.deleted = true
    },
    handleAcceptClick() {
      this.accepted = true
    },
  }
}


</script>

<style scoped>
.profilePic {
  width: 100px;
  height: 100px;
}

.friendRequestSquare {
  width: 100%;
  box-shadow: 0px 0px 3px rgb(140, 140, 140);
  border-radius: 10px;
  margin: 10%;
  padding: 10%;
}

button {
  width: 90%;
  margin: 2%;
}

</style>
