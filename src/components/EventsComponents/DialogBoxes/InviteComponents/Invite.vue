<template>
    <div id="invite">
        <div>
            <InviteFriends />
            <InviteNonFacebook />
            <input v-model="currentInvite" @keypress.enter="newInvite()">
        </div>
        <div>
            <InvitesLeft />
        </div>
    </div>
</template>

<script>
import InviteFriends from "./InviteFriends/InviteFriends.vue";
import InviteNonFacebook from "./InviteNonFacebook.vue";
import InvitesLeft from "./InvitesLeft.vue";
export default {
    methods: {
        newInvite() {
            console.log("You just entered the email: " + this.currentEmail);
                // this.inviteList.push(this.currentInvite);
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