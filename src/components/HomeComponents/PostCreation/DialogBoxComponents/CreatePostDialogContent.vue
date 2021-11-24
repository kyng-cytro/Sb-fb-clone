<template>
    <div>
        <FriendDisplay :friend="this.user" :bold="true"></FriendDisplay>
        <textarea></textarea>

    </div>
</template>

<script>
import FriendDisplay from "@/components/Multipurpose/FriendDisplay"
    export default {
        props: ['user'],
        components: {
            FriendDisplay
        }
    }
</script>

<style scoped>

</style>