<template>
    <div>
        <h3>Invite non Facebook users</h3>
        <ul>
        </ul>
    </div>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)
    export default {
        props: ['invitedByEmail', 'invitedByTest'],
        
    }
</script>

<style scoped>

</style>