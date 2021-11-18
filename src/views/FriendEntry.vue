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

        <div v-show="!this.submitted">
            <button class="back" @click="previous">Back</button>
            <button v-show="!finished" @click="next">Next</button>
            <button class="submit" v-show="finished" @click="submit">Submit</button>
        </div>

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
                submitted: false,
            }
        },
        methods: {
            submit() {
                this.setQuestion(this.index); // Basically do what the next function does for the last item
                for (let i = 0; i < questionFriendList.length; i++) {
                    FriendRequest.insert(
                        {
                            data: {
                                name: questionFriendList.at(i).friendData.name,
                                imgSrc: "",
                                daysUntilExpiration : this.daysUntilExpiration,
                                numOfMutualFriends: this.numOfMutualFriends
                            }
                        }
                    );
                }
                this.submitted = true;
            },
            resetFields() {
                this.name = "";
            },
            setQuestion(index) {
                questionFriendList.at(index).friendData = {
                    name: this.name,
                    numOfMutualFriends: this.numOfMutualFriends,
                    daysUntilExpiration: this.daysUntilExpiration,
                }
                this.resetFields();
            },
            next() {
                console.log(this.index);
                if (this.index < questionFriendList.length - 1) {
                    this.setQuestion(this.index);
                    this.index++;
                }
            },
            previous() {
                console.log(this.index);
                if (this.index > 0) {
                    this.setQuestion(this.index);
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
            },
            finished() {
                return this.index == questionFriendList.length - 1;
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
    background-color: rgb(167, 167, 167);
    color: rgb(185, 185, 185);
    transition: 0.1s;
}

.back{
    background-color: grey;
}

.submit{
    background-color: rgb(112, 172, 105);
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