<template>
    <div id="invite">
        <div>
            <InviteFriends :invitedFriends="this.inviteList.friends"/>
            <InviteNonFacebook :invitedByEmail="this.inviteList.emails" :invitedByText="this.inviteList.texts"/>
            <input v-model="currentInvite" @keypress.enter="newInvite()">
        </div>
        <div>
            <InvitesLeft :invites="this.inviteList"/>
        </div>
    </div>
</template>

<script>
import InviteFriends from "./InviteFriends.vue";
import InviteNonFacebook from "./InviteNonFacebook.vue";
import InvitesLeft from "./InvitesLeft.vue";
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
            InvitesLeft,
        },
        data() {
            return {
            currentInvite: ""
            }
        },
    }
</script>

<style scoped>
#invite {
    display: flex;
}
</style>