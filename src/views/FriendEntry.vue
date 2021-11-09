<template>
    <div class="container">
        <md-field>
            <label>Name</label>
            <md-input v-model="name"></md-input>
            <span class="md-helper-text">Required</span>
        </md-field>
        <md-field>
            <label>Number of days until expiration (optional)</label>
            <md-input v-model="daysUntilExpiration"></md-input>
        </md-field>
        <md-field>
            <label>Number of mutual friends</label>
            <md-input v-model="numOfMutualFriends"></md-input>
        </md-field>
        <button @click="addFriendRequest">Add</button>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

import FriendRequest from "@/classes/friendRequest.js";


    export default {
        data() {
            return {
                name: "",
                numOfMutualFriends: "",
                daysUntilExpiration: null,
            }
        },
        methods: {
            addFriendRequest() {
                FriendRequest.insert(
                    {
                        data: {
                            name: this.name,
                            imgSrc: "",
                            daysUntilExpiration : this.daysUntilExpiration,
                            numOfMutualFriends: this.numOfMutualFriends
                        }
                    }
                );
                this.name = "";
                this.numOfMutualFriends = "";
                this.daysUntilExpiration = null;
            }
        }
    }

</script>

<style scoped>
.container {
    padding: 50px;
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