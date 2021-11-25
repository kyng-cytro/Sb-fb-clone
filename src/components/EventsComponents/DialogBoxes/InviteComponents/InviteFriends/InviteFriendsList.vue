<template>
    <div class="container">
        <div>
            <button id="selectAll" class="selectRectangle">
                Select All
            </button>
            <div v-for="friend in friends" :key="friend.id" class="selectRectangle">
                <InviteFriendsListItem v-bind:friend="friend"/>
            </div>
        </div>

    </div>
</template>

<script>
import InviteFriendsListItem from './InviteFriendsListItem.vue';
import Friend from "@/vuex-orm_models/FriendModel.js";

    export default {
        components: {
            InviteFriendsListItem
        },
        data() {
            return {
                selectedFriends: [],
            }
        },
        methods: {
        },
        computed: {
            friends() {
                return Friend.all();
            }
        }
    }
</script>

<style scoped>
.container {
    width: 350px;
}
.selectRectangle {
    background-color:transparent;
	border-radius:8px;
    border: 0px;
	display:inline-block;
	cursor:pointer;
	text-decoration:none;   
    width: 100%;
    padding: 8px;
}

#selectAll {
	color: rgb(24,113,230);
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:16px 31px;
}

.selectRectangle:hover {
	background-color: rgb(242,242,242);
}
/* .selectRectangle:active {
	position:relative;
	top:1px;
} */

</style>