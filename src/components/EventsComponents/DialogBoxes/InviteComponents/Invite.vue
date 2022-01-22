<template>
    <div id="invite">
        <div>
            <InviteFriends />
            <!-- <hr /> -->
            <InviteNonFacebook />
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