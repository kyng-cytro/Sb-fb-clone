<template>
    <div class="content">
        <ul>
            <li v-for="invite in this.inviteList" :key="invite">
                {{invite}}
            </li>
        </ul>
        <input v-model="currentInvite" @keypress.enter="newInvite()">
    </div>
</template>

<script>
export default {
    props: ['inviteList'],
    methods: {
        newInvite() {
            console.log("You just entered the email: " + this.currentEmail);
                this.inviteList.push(this.currentInvite);
                this.currentInvite = "";
            }
        },
        components: {
        },
        data() {
            return {
            currentInvite: ""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>