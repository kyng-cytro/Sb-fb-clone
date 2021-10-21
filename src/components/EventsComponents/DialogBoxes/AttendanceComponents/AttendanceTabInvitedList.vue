<template>
    <div class="container">
        <div>
            <div v-for="friend in this.friends" :key="friend.id" class="selectRectangle">
                <AttendanceTabInvitedListItem v-bind:friend="friend"/>
            </div>
        </div>

    </div>
</template>

<script>
import AttendanceTabInvitedListItem from './AttendanceTabInvitedListItem.vue';
import Friend from "@/classes/friend.js";
    export default {
        components: {
            AttendanceTabInvitedListItem
        },
        data() {
            return {
                // friends: friendExampleList
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

</style>