<template>
    <div class="container" @click="select">
        <div class="verticalAlign">
            <FriendDisplay :friend="this.friend"/>
        </div>
        <div class="verticalAlign">
            <i v-if="!isSelected(this.friend.id)" class="bi bi-circle"></i>    
            <i v-else class="bi bi-check-circle-fill selectedCheck"></i>
        </div>
    </div>
</template>

<script>
import Friend from "@/vuex-orm_models/FriendModel.js";
import FriendDisplay from "@/components/Multipurpose/FriendDisplay";

    export default {
        props: ['friend'],
        components: {
            FriendDisplay
        },
        methods: {
            select() {
                Friend.update({
                    where: this.friend.id,
                    data: {
                        selected: !this.isSelected(this.friend.id),
                    }
                });
            },
            isSelected(userID) {
                return Friend.find(userID).selected;
            }
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