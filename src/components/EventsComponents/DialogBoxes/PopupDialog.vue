<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
    <div class="header">
    <strong>Email Invitation</strong>
    <div class="close">
        <button @click="togglePopup()">×</button>
    </div>
    </div>
    <div class="content">
    <ul>
        <li v-for="email in emailAddresses" :key="email">
            {{email}}
        </li>
    </ul>
    <p>Email to</p>
    <input v-model="currentEmail" @keypress.enter="newEmail()">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
    props: ['togglePopup'],
    methods: {
        newEmail() {
            console.log("You just entered the email: " + this.currentEmail);
            this.emailAddresses.push(this.currentEmail);
            this.currentEmail = "";
    }
  },
  components: {
  },
  data() {
    return {
      emailAddresses: [],
      currentEmail: ""
    }
  },
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(224, 224, 224, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner {
    background-color: white;
    padding: 32px;
}
</style>