<template>
    <div>
        <slot />
    </div>
</template>

<script>
import { inject } from 'vue';
    export default {
        props: ['title'],
        data() {
            return {
                selectedTitle = inject("selectedTitle"),
            }
        }
    }
</script>

<style scoped>

</style>