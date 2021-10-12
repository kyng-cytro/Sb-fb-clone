<template>
    <div>
        <input id="searchBox">
        <ul>
            <li v-for="invite in this.inviteList" :key="invite">
                {{invite}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['invitedFriends']
    }
</script>

<style>
#searchBox {
    border-radius: 30px;
    /* border-color: white; */
    /* outline: none; */
    /* box-sizing: border-box; */
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

</style>