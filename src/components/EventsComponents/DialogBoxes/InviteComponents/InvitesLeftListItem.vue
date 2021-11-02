<template>
    <div class="container">
        <div class="verticalAlign">
            <FriendDisplay :friend="friend" :userType="userType" :size="'small'"></FriendDisplay>
        </div>
        <div class="verticalAlign">
            <i @click="remove" class="bi bi-x-lg delete"></i>
        </div>
    </div>
</template>

<script>
import Friend from "@/classes/friend.js";
import NonFacebookFriend from "@/classes/nonFacebookFriend.js";
import FriendDisplay from "@/components/Multipurpose/FriendDisplay.vue";

    export default {
        props: ['friend', 'userType'],
        components: {
            FriendDisplay
        },
        methods: {
            remove() {
                //If this is a facebook friend, remove it the normal way
                if(this.userType === "facebook") {
                    Friend.update({
                        where: this.friend.id,
                        data: {
                            selected: false,
                        }
                    });
                }
                else { //Otherwise
                    NonFacebookFriend.delete(this.friend.id);
                }
            }
        },
    }
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: 0px;
    height: 20px;
    margin-top: 20px;
    width: 210px;
}
.verticalAlign {
    display: flex;
    padding: 0px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}


.selectedCheck {
    color: rgb(5,113,237);
}


.delete {
    font-size: .9em;
}
</style>