<template>
    <div class="container">
        <div>
            <button id="selectAll" class="selectRectangle">
                Select All
            </button>
            <div v-for="friend in friends" :key="friend.name" class="selectRectangle">
                <InviteFriendsListItem @selected="select" @deselected="deselect" v-bind:friend="friend"/>
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
    imgSrc: "xinru.jpg",
    name: "Xinru",
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
                friends,
                selectedFriends: [],
            }
        },
        methods: {
            select(friend) {
                this.selectedFriends.push(friend);
                console.log(this.selectedFriends);
            },
            deselect(friend) {
                let index = this.selectedFriends.indexOf(friend);
                if (index > -1) {
                    this.selectedFriends.splice(index, 1);
                } else {
                    console.log("This item was not found in the list!");
                }
                console.log(this.selectedFriends);
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