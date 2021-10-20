<template>
    <div class="tabs">
        <!-- Using a slot is fine, but the problem will come when you have padding and stuff and content inside the tab, because then it offsets the other tabs -->
        <AttendanceTab v-on:setSelected="setSelected" title="Going (1)" :selectedTitle="this.selectedTitle">
            <AttendanceTabInvitedListItem :friend="user"></AttendanceTabInvitedListItem>
        </AttendanceTab>
        <AttendanceTab v-on:setSelected="setSelected" title="Maybe (0)" :selectedTitle="this.selectedTitle">

        </AttendanceTab>
        <AttendanceTab v-on:setSelected="setSelected" v-bind:title="'Invited (' + this.numInvited + ')'" :selectedTitle="this.selectedTitle">

        </AttendanceTab>
        <AttendanceTab v-on:setSelected="setSelected" title="Can't Go (0)" :selectedTitle="this.selectedTitle">

        </AttendanceTab>
    </div>
</template>

<script>
import NonFacebookFriend from "@/classes/nonFacebookFriend.js";
import Friend from "@/classes/friend.js";
import AttendanceTab from "./AttendanceTab.vue";
import AttendanceTabInvitedListItem from "./AttendanceTabInvitedListItem.vue";

const user = {
    name: "Anson Savage",
    imgSrc: "anson.jpg",
}

    export default {
        data() {
            return {
                selectedTitle: "Going (1)",
                user: user,
            }
        },
        components: {
            AttendanceTab,
            AttendanceTabInvitedListItem
        },
        computed: {
            numInvited() {
                return NonFacebookFriend.all().length + Friend.query().where('selected', true).get().length;
            }
        },
        methods: {
            setSelected(title) {
                this.selectedTitle = title;
            }
        }
    }
</script>

<style scoped>
.tabs {
    display: flex;
    padding: 4px;
}

</style>