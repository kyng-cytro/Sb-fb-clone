<template>
    <div>
        <div class="container">
            <p>{{remainingInvites}} INVITES LEFT</p>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['invites'],
       data() {
           return {
               maxInvites: 500,
           }
       },
       computed: {
           remainingInvites() {
               return this.maxInvites - this.invites.length;
           }
       }
    }
</script>

<style scoped>
.container {
    background-color: rgb(240,242,245);
    height: 500px;
}

p {
    color: rgb(101,103,107);
    font-weight: bold;
    font-size: 0.9em;
}
</style>