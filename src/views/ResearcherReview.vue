<template>
    <!-- Show which friend requests were accepted/not -->
    <div class="container">
        <strong v-show="confirmedRequests.length">Confirmed Requests</strong>
        <FriendRequestDisplay :friendRequests="confirmedRequests"/>
        <strong v-show="deletedRequests.length">Deleted Requests</strong>
        <FriendRequestDisplay :friendRequests="deletedRequests"/>
        <strong v-show="pendingRequests.length">Pending Requests</strong>
        <FriendRequestDisplay :friendRequests="pendingRequests"/>
    </div>
</template>

<script>
import FriendRequest from "@/vuex-orm_models/FriendRequestModel.js";
import FriendRequestDisplay from "@/components/FriendsComponents/FriendRequestDisplay.vue";
    export default {
        components: {
            FriendRequestDisplay
        },
        computed: {
            pendingRequests() {
                return FriendRequest.query().where('state', 'pending').get();
            },
            confirmedRequests() {
                return FriendRequest.query().where('state', 'confirmed').get();
            },
            deletedRequests() {
                return FriendRequest.query().where('state', 'deleted').get();
            },
        }
    }
</script>

<style scoped>
.container {
    padding: 5%;
}
</style>