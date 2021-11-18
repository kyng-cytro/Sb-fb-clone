<template>
    <div class="container">
        <h2>{{currentQuestion}}</h2>
        <md-field>
            <label>Name</label>
            <md-input v-model="name"></md-input>
            <span class="md-helper-text">Required</span>
        </md-field>
        <!-- <md-field>
            <label>Number of days until expiration (optional)</label>
            <md-input v-model="daysUntilExpiration"></md-input>
        </md-field> -->
        <!-- <md-field>
            <label>Number of mutual friends</label>
            <md-input v-model="numOfMutualFriends"></md-input>
        </md-field> -->
        <button @click="previous">Back</button>
        <button @click="next">Next</button>
        <button @click="addFriendRequest">Add</button>

        <!-- Show which friend requests were accepted/not -->
        <div>
            <strong v-show="confirmedRequests.length">Confirmed Requests</strong>
            <FriendRequestDisplay :friendRequests="confirmedRequests"/>

            <strong v-show="deletedRequests.length">Deleted Requests</strong>
            <FriendRequestDisplay :friendRequests="deletedRequests"/>

            <strong v-show="pendingRequests.length">Pending Requests</strong>
            <FriendRequestDisplay :friendRequests="pendingRequests"/>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

import FriendRequest from "@/classes/friendRequest.js";
import FriendRequestDisplay from "@/components/FriendsComponents/FriendRequestDisplay.vue";

const questionFriendList = [
    {
        question: "you would not want to connect with",
        friendData: null
    },
    {
        question: "you would like to connect with",
        friendData: null
    },
    {
        question: "you would fell pressured to connect with",
        friendData: null
    },
    {
        question: "you would like to connect with, but you have some sort of concern",
        friendData: null
    },
    {
        question: "you have already connected with, but you didn't want to",
        friendData: null
    },
]
    export default {
        components: {
            FriendRequestDisplay
        },
        data() {
            return {
                name: "",
                numOfMutualFriends: "",
                daysUntilExpiration: 30,
                index: 0,
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
                this.daysUntilExpiration = 30;
            },
            next() {
                if (this.index < questionFriendList.length - 1) {
                    this.index++;
                }
            },
            previous() {
                if (this.index > 0) {
                    this.index--;
                }
            }
        },

        computed: {
            pendingRequests() {
                return FriendRequest.query().where('state', 'pending').get();
            },
            confirmedRequests() {
                return FriendRequest.query().where('state', 'confirmed').get();
            },
            deletedRequests() {
                return FriendRequest.query().where('state', 'deleted').get();
            },
            currentQuestion() {
                return "Please enter the name of a friend " + questionFriendList.at(this.index).question + ":";
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

.friendRequestDisplay {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>