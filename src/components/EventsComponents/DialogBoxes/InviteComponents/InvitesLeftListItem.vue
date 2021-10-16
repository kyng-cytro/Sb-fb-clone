<template>
    <div class="container">
        <div class="verticalAlign">
            <!-- If the user is a facebook user: -->
            <img v-if="this.isFacebookUser" :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)"/>

            <!-- If they are an email user -->
            <img v-else-if="this.friend.email" :src="require('@/assets/images/ListIcons/at.png')"/>

            <!-- If they are a phone user -->
            <img v-else :src="require('@/assets/images/ListIcons/text.png')"/>
            <p>{{friend.name}}</p>
        </div>
        <div class="verticalAlign">
            <i @click="remove" class="bi bi-x-lg"></i>
        </div>
    </div>
</template>

<script>
import Friend from "@/classes/friend.js";
import NonFacebookFriend from "@/classes/nonFacebookFriend.js";

    export default {
        props: ['friend', 'isFacebookUser'],
        methods: {
            remove() {
                //If this is a facebook friend, remove it the normal way
                if(this.isFacebookUser) {
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
}
.verticalAlign {
    display: flex;
    padding: 0px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}

img {
    width: 25px;
    height: 25px;
    object-fit: cover; /*This makes it so the image is cropped instead of squished */
    border-radius: 50%;
    margin-top: 5px;
}

p i {
    padding-left: -15px;
}

p {
    margin-left: 10px;
}

.emptyCircle {
    border-radius: 50%;
    border-width: 3px;
    border-color: black;
    width: 10px;
    height: 10px;
}
i {
    padding-right: 60px;
    color: rgb(137,142,149);
    font-weight: bold;
}
.selectedCheck {
    color: rgb(5,113,237);
}

.bold {
    font-weight: bold;
}
</style>