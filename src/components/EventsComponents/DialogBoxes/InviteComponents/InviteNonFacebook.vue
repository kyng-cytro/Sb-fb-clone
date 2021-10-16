<template>
    <div class="container">
        <h3>Invite non Facebook users</h3>
        <md-field>
            <label>Enter name</label>
            <md-input v-model="name"></md-input>
            <span class="md-helper-text">Helper text</span>
        </md-field>
        <ul>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

    export default {
        data() {
            return {
                name: '',
                email: '',
                phoneNumber: '',
            }
        }
    }
</script>

<style scoped>
.container {
    padding: 15px;
}
</style>