<template>
<!-- NOTE: THIS COMPONENT WILL DISPLAY ACCORDING TO THE OBJECT PASSED IN. IF IT HAS AN EMAIL FIELD, IT WILL SHOW AN EMAIL ICON. ETC. -->
    <div class="horizontalAlign">
        <!-- If the user is a facebook user: -->
        <img v-if="isFacebookWithImage" v-bind:style="imgStyles" :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)"/>

        <!-- If they are an email user -->
        <i v-else-if="isEmail" class="bi bi-envelope" :style="iconStyles"></i>

        <!-- If they are a phone user -->
        <i v-else-if="isPhone" class="bi bi-chat-dots" :style="iconStyles"></i>

        <!-- If they use both email and phone or if they are a facebook user but don't have an image -->
        <i v-else-if="isBoth || isFacebookWithoutImage" class="bi bi-person" :style="iconStyles"></i>


        <p v-show="!onlyImage" :style="textStyles" >{{friend.name}}</p>
    </div>
</template>

<script>
    export default {
        // friend is a friend object
        // size is a value of 'small' or 'normal'
        props: ['friend', 'size', 'onlyImage'],
        computed: {
            isFacebookFriend() {
                return Object.prototype.hasOwnProperty.call(this.friend, 'imgSrc');
            },
            isFacebookWithImage() {
                return this.isFacebookFriend && this.friend.imgSrc !== '';
            },
            isFacebookWithoutImage() {
                return !this.isFacebookWithImage && !this.isEmail && !this.isPhone && !this.isBoth;
            },
            isEmail() {
                return Object.prototype.hasOwnProperty.call(this.friend, 'email') && this.friend.email !=='' && !(this.friend.phone !=='');
            },
            isPhone() {
                return Object.prototype.hasOwnProperty.call(this.friend, 'phone') && this.friend.phone !=='' && !(this.friend.email !=='');
            },
            isBoth() {
                return !this.isFacebookFriend && this.friend.phone !=='' && this.friend.email !=='';
            },
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