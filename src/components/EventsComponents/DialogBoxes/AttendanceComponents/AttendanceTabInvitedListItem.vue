<template>
    <div class="container">
        <div class="verticalAlign">
            <img :src="require('@/assets/images/FriendProfilePics/' + friend.imgSrc)"/>
            <p>{{friend.name}}</p>
        </div>
        <div class="verticalAlign">
        </div>
    </div>
</template>

<script>

    export default {
        props: ['friend'],
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


.bold {
    font-weight: bold;
}
</style>