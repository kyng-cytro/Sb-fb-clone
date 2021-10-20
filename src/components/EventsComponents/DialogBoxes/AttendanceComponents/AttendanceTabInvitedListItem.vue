<template>
    <div class="container" v-on:click="select">
        <div class="verticalAlign">
            <img :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)"/>
            <p v-bind:class="{bold: this.selected}">{{friend.name}}</p>
        </div>
        <div class="verticalAlign">
        </div>
    </div>
</template>

<script>
// import Friend from "@/classes/friend.js";

    export default {
        props: ['friend'],
        methods: {
            // select() {
            //     Friend.update({
            //         where: this.friend.id,
            //         data: {
            //             selected: !this.selected
            //         }
            //     });
            // }
        },
    }
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    padding: 0px;
}
.verticalAlign {
    display: flex;
    padding: 0px;
    height: 40px;
    line-height: 45px;
    text-align: center;
}

img {
    width: 37px;
    height: 37px;
    object-fit: cover; /*This makes it so the image is cropped instead of squished */
    border-radius: 50%;
    margin-top: 5px;
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