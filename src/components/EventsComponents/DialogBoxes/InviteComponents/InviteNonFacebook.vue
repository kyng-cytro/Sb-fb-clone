<template>
    <div class="container">
        <p>Want to invite friends not on Facebook? No problem!</p>
        <md-field>
            <label>Name</label>
            <md-input v-model="form.name"></md-input>
            <span class="md-helper-text">Required</span>
        </md-field>
        <div class="info">
            <md-field>
                <label>Phone number</label>
                <md-input v-model="form.phone"></md-input>
            </md-field>
            <p id="orText"> or </p>
            <md-field>
                <label>Email</label>
                <md-input v-model="form.email"></md-input>
            </md-field>
            <button @click="addNonFacebookFriend">Add</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import NonFacebookFriend from "@/classes/nonFacebookFriend.js"

Vue.use(VueMaterial)

    export default {
        data() {
            return {
                form: {
                    name: '',
                    phone: '',
                    email: '',
                }
            }
        },
        methods: {
            addNonFacebookFriend() {
                // Insert a new nonFacebookFriend into the Vuex database
                NonFacebookFriend.insert({
                    data: this.form
                });

                //Clear the form
                this.form = {
                    name: '',
                    phone: '',
                    email: '',
                };
            }
        }
    }
</script>

<style scoped>
.container {
    padding: 20px;
    padding-left: 30px;
}
p {
    color: grey;
    font-style: italic;
}
#orText {
    padding: 20px;
    padding-top: 30px
}

.info {
    padding-left: 30px;
    display: flex;
}
button {
    background-color: rgb(59, 138, 241);
    color: white;
    padding: 12px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
    border-width: 0px;
    outline: none;
    align-self: flex-end;
    margin: 20px;
}

button:hover {
    background-color: rgb(125, 181, 255);
    color: rgb(24,119,242);
    transition: 0.1s;
}

button::selection {
    outline: none;
}
</style>