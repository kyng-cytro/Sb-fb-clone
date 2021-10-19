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
import { ref } from 'vue';
    export default {
        setup(props, { slots }) {
            const tabTitles = ref(slots.default().map((tab) => tab.props.title)); //slots.default gives us an array of everything in the slot
            const selectedTitle = ref(tabTitles.value[0]);

            provide("selectedTitle", selectedTitle) {
                return {
                    selectedTitle,
                    tabTitles,
                }
            }
        }
    }
</script>

<style scoped>

</style>