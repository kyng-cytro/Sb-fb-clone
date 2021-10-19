<template>
<!-- This component was created by following this tutorial: https://learnvue.co/2019/12/building-reusable-components-in-vuejs-tabs/ -->
    <div class="tabs">
        <ul class="tabs_header">
            <li 
                v-for="title in this.tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot /> 
    </div>
</template>

<script>
import Vue from 'vue'

    export default {
        data() {
            return {
                tabTitles,
                selectedTitle,
            }
        }
    }
</script>

<style scoped>

</style>