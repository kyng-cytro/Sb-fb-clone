<template>
    <div class="content">
        <InviteFriends :invitedFriends="this.inviteList.friends"/>
        <InviteNonFacebook :invitedByEmail="this.inviteList.emails" :invitedByText="this.inviteList.texts"/>
        <input v-model="currentInvite" @keypress.enter="newInvite()">
    </div>
</template>

<script>
import InviteFriends from "./InviteFriends.vue"
import InviteNonFacebook from "./InviteNonFacebook.vue"
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
            InviteFriends,
            InviteNonFacebook,
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