<template>
    <div class="container">
        <div>
            <p>Please only select people you know would like to attend</p>
        </div>
        <div>
            <button @click= "closeFriendInvites" >Cancel</button>
            <button @click= "sendInvites" :class="{ active : this.invitable, inactive : !this.invitable}">Sent Invites</button>
        </div>
    </div>
</template>

<script>
import Friend from "@/vuex-orm_models/FriendModel.js"
import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js";

    export default {
        computed: {
            invitable() { // The button is only able to be activated when there is at least one selected friend
               return Friend.query().where('selected', true).get().length +
               NonFacebookFriend.all().length > 0;
            }
        },
        methods: {
            sendInvites() {
                this.$root.$emit('sendInvites');
            },
            closeFriendInvites() {
                this.$root.$emit('sendInvites');
            }
        }
    }
</script>

<style scoped>
.container {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

p {
    color: grey;
    font-size: 0.9em;
    margin: 20px;
}

button {
    font-weight: bold;
    color: rgb(24,118,242);
    background-color: transparent;
    border-width: 0px;
    padding: 10px;
    border-radius: 7px;
    margin: 10px;
}
button:hover {
    border-radius: 7px;
    background-color: rgb(240, 240, 240);
}
button:focus {
    outline: 0;
}
.inactive {
    background-color: rgb(228,230,235);
    color: rgb(188,192,196);
    cursor: not-allowed;
}
.inactive:hover {
    /* Same as parent */
    background-color: rgb(228,230,235);
    color: rgb(188,192,196);
}
.active {
    color: white;
    background-color: rgb(24,118,242);
}
.active:hover {
    color: white;
    background-color: rgb(15, 109, 231);
    transition: 0.1s;
}
</style>