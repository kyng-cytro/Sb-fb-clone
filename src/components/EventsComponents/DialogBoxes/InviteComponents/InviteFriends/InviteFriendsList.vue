<template>
    <div class="container">
        <div>
            <button id="selectAll" class="selectRectangle">
                Select All
            </button>
            <div v-for="friend in friends" :key="friend.name" class="selectRectangle">
                <InviteFriendsListItem v-bind:friend="friend"/>
            </div>
        </div>

    </div>
</template>

<script>
import InviteFriendsListItem from './InviteFriendsListItem.vue';

const friends = [
  {
    imgSrc: "businessMan.jpg",
    name: "Miles",
    daysUntilExpiration: 29,
    numOfMutualFriends: 21,
  },
  {
    imgSrc: "anson.jpg",
    name: "Anson",
    daysUntilExpiration: 29,
    numOfMutualFriends: 21,
  },
  {
    imgSrc: "anson.jpg",
    name: "Anson",
    daysUntilExpiration: 29,
    numOfMutualFriends: 21,
  },
];
    export default {
        components: {
            InviteFriendsListItem
        },
        data() {
            return {
                friends
            }
        }
    }
</script>

<style scoped>
.container {
    width: 400px;
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