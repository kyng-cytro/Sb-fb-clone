<template>
    <div class="horizontalAlign">
        <!-- If the user is a facebook user: -->
        <img v-if="this.userType==='facebook'" v-bind:style="imgStyles" :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)"/>

        <!-- If they are an email user -->
        <i v-else-if="this.userType === 'email'" class="bi bi-envelope" :style="iconStyles"></i>

        <!-- If they are a phone user -->
        <i v-else-if="this.userType === 'phone'" class="bi bi-chat-dots" :style="iconStyles"></i>

        <!-- If they use both email and phone! -->
        <i v-else class="bi bi-person" :style="iconStyles"></i>
        <p :style="textStyles" >{{friend.name}}</p>
    </div>
</template>

<script>
    export default {
        // friend is a friend object
        // userType is either 'facebook' 'email', 'phone', or 'both'
        // size is a value of 'small' or 'normal'
        props: ['friend', 'userType', 'size'],
        computed: {
            imgStyles() {
                if (this.size === 'small') {
                    return `
                    margin-top: 5px;
                    width: 25px;
                    height: 25px;`;
                }
                else {
                    return `
                    margin-top: 5px;
                    width: 37px;
                    height: 37px;`;
                }
            },
            textStyles() {
                if (this.size === 'small') {
                    return `
                    margin-left: 10px;
                    font-size: 0.9em;`;
                }
                else {
                    return `
                    margin-left: 10px;
                    margin-top: 7px;
                    font-size: 1em;`;
                }
            },
            iconStyles() {
                if (this.size === 'small') {
                    return `
                    padding-top: 2px;
                    font-size: 1.6em;
                    `;
                }
                else {
                    return `
                    padding-top: 6px;
                    font-size: 2em;`;
                }
            }
        },
    }
</script>

<style scoped>
.horizontalAlign {
    display: flex;
    padding: 0px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}

img {
    object-fit: cover; /*This makes it so the image is cropped instead of squished */
    border-radius: 50%;
}

p i {
    padding-left: -15px;
}

i {
    /* padding-right: 60px; */
    color: rgb(137,142,149);
    font-weight: bold;
}
</style>