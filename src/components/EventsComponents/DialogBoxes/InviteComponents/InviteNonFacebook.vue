<template>
    <div>
        <ul>
            <li v-for="invite in this.inviteList" :key="invite">
                {{invite}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['invitedByEmail', 'invitedByTest'],
        
    }
</script>

<style lang="scss" scoped>

</style>