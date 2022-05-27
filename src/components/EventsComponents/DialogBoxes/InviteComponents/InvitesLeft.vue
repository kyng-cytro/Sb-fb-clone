<template>
    <div class="list">
        <div>
            <p>{{remainingInvites}} INVITES LEFT</p>
            <div v-for="friend in selectedFriends" :key="friend.key">
                <InvitesLeftListItem :friend="friend"/>
            </div>
            <div v-for="emailFriend in onlyEmailFriends" :key="emailFriend.key">
                <InvitesLeftListItem :friend="emailFriend"/>
            </div>
            <div v-for="phoneFriend in onlyPhoneFriends" :key="phoneFriend.key">
                <InvitesLeftListItem :friend="phoneFriend"/>
            </div>
            <div v-for="bothFriend in emailAndPhoneFriends" :key="bothFriend.key">
                <InvitesLeftListItem :friend="bothFriend"/>
            </div>
        </div>
    </div>
</template>

<script>
import { friendSorting } from "@/mixins/FriendSorting.js";
import InvitesLeftListItem from "./InvitesLeftListItem.vue";

    export default {
       components: {
           InvitesLeftListItem
       },
       data() {
           return {
               maxInvites: 500,
           }
       },
       mixins: [friendSorting],
    }
</script>

<style scoped>
.list {
    background-color: rgb(240,242,245);
    height: 100%;
    max-height: 70vh;
    width: 210px;
    padding: 15px;
    overflow-y: auto;
}

p {
    color: rgb(101,103,107);
    font-weight: bold;
    font-size: 0.9em;
}
</style>