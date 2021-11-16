<template>
    <div class="container">
        <div v-for="n in this.total" :key="n">
            <div v-if="n" class="empty">{{n}}</div>
            <div v-else class="progress">{{this.current}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            current: {
                default: 1,
            },
            total: {
                default: 3
            }
        },
        created() {

            console.log(this.current);
        }
    }
</script>

<style scoped>
.container {
    display: flex;
}

.empty {
    height: 10px;
    background-color: rgb(240,242,245);
    border-radius: 8px;
}
</style>