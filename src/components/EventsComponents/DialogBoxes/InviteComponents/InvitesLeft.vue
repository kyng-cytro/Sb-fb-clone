<template>
    <div class="list">
        <div>
            <p>{{remainingInvites}} INVITES LEFT</p>
            <div v-for="friend in selectedFriends" :key="friend.key">
                <InvitesLeftListItem :friend="friend"/>
            </div>
        </div>
    </div>
</template>

<script>
import Friend from "@/classes/friend.js";
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