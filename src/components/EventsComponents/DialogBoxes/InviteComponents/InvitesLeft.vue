<template>
    <div class="list">
        <div>
            <p>{{remainingInvites}} INVITES LEFT</p>
            <div v-for="friend in selectedFriends" :key="friend.key">
                <InvitesLeftListItem :friend="friend" :isFacebookUser="true"/>
            </div>
            <div v-for="emailFriend in emailFriends" :key="emailFriend.key">
                <InvitesLeftListItem :friend="emailFriend" :isFacebookUser="false"/>
            </div>
            <div v-for="phoneFriend in phoneFriends" :key="phoneFriend.key">
                <InvitesLeftListItem :friend="phoneFriend" :isFacebookUser="false"/>
            </div>
        </div>
    </div>
</template>

<script>
import Friend from "@/classes/friend.js";
import NonFacebookFriend from "@/classes/nonFacebookFriend.js";
import InvitesLeftListItem from "./InvitesLeftListItem.vue";

    export default {
       props: ['invites'],
       components: {
           InvitesLeftListItem
       },
       data() {
           return {
               maxInvites: 500,
           }
       },
       computed: {
           selectedFriends() {
               return Friend.query().where('selected', true).get();
           },
           remainingInvites() {
               return this.maxInvites - this.selectedFriends.length;
           },
           emailFriends() {
               return NonFacebookFriend.query().where('email', (email) => email !== '').get();
           },
           phoneFriends() {
               return NonFacebookFriend.query().where('phone', (phone) => phone !== '').get();
           },
           onlyEmailFriends() {
               return this.emailFriends.filter(x => !this.phoneFriends.includes(x));
           },
           onlyPhoneFriends() {
               return this.phoneFriends.filter(x => !this.emailFriends.includes(x));
           }
       }
    }
</script>

<style scoped>
.list {
    background-color: rgb(240,242,245);
    height: 500px;
    width: 240px;
    padding: 15px;
}

p {
    color: rgb(101,103,107);
    font-weight: bold;
    font-size: 0.9em;
}
</style>