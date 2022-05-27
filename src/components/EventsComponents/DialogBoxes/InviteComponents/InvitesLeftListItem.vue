<template>
    <div class="container" :class="{marginx: isLongName(friend)}">
        <div class="verticalAlign">
            <FriendDisplay :friend="friend" :size="'small'"></FriendDisplay>
        </div>
        <div class="verticalAlign">
            <i @click="remove" class="bi bi-x-lg delete"></i>
        </div>
    </div>
</template>

<script>
import Friend from "@/vuex-orm_models/FriendModel.js";
import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js";
import FriendDisplay from "@/components/Multipurpose/FriendDisplay.vue";

    export default {
        props: ['friend'],
        components: {
            FriendDisplay
        },
        methods: {
            remove() {
                //If this is a facebook friend, remove it the normal way
                if(!this.friend.email && !this.friend.phone) {
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
            },
           isLongName(friend) { return friend.name.length > 15}
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
    width: 170px;
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
.marginx { margin: 50px 0px; }

</style>