<template>
  <div class="inviteBox">
    <p><strong>{{this.userName}} </strong>invited you</p>
    <div class="buttonsContainer">
      <button class="btn btn-secondary">
        <i class="bi bi-check-circle"></i>
        Going
      </button>
      <button class="btn btn-secondary">
        <i class="bi bi-question-circle"></i>
        Maybe
      </button>
      <button class="btn btn-secondary">
        <i class="bi bi-x-circle"></i>
        Can't Go
      </button>
      <button class="btn btn-secondary">
        <i class="bi bi-envelope-fill"></i>
        Invite
      </button>
    </div>
  </div>
</template>

<script>
  import { UserPopulation } from "@/mixins/UserPopulation";
  export default {
    mixins: [UserPopulation]
  };
</script>

<style scoped>
  .inviteBox {
    margin: 20px;
    padding: 20px;
    background-color: rgb(245, 245, 245);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    border-color: rgb(235, 235, 235);
    color: black;
    margin: 3px;
  }
  .buttonsContainer {
    width: 450px;
  }
  .btn-secondary {
    color: black;
    padding: 10px;
    background-color: rgb(235, 235, 235);
    border: 0px;
    border-radius: 6px;
    margin: 2%;
    font-weight: bold;
    font-size: 0.9em;
  }
  .btn-secondary:hover {
    color: black;
    background-color: hsl(0, 0%, 82%);
    transition: 0.3s;
  }

  .btn-secondary:focus {
    outline: none;
    border: none;
  }

  hr {
  }
</style>
