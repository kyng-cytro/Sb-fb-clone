<template>
<div>
    <!-- <input v-model="form.name">
    <button @click="addFriend">Add friend</button>
    <li v-for="friend in friends" :key="friend.id">
        {{friend.name}}
    </li> -->
</div>
  
</template>

<script>
import Friend from "@/classes/friend.js";

const friendExampleList = [
  {
    imgSrc: "businessMan.jpg",
    name: "Miles",
    numOfMutualFriends: 21,
  },
  {
    imgSrc: "anson.jpg",
    name: "Anson",
    numOfMutualFriends: 21,
  },
  {
    imgSrc: "xinru.jpg",
    name: "Xinru",
    numOfMutualFriends: 21,
  },
];

export default {
    data() {
        return {
            form: {
                name: '',
                imgSrc: '',
                numOfMutualFriends: null,
            }
        }
    },
    created() { //On creation of this component, populate the Vuex store
        for (let i = 0; i < friendExampleList.length; i++) {
            Friend.insert({data: friendExampleList[i]});
        }
    },
    methods: {
        addFriend() {
            Friend.insert({ data: this.form});
        }
    },
    computed: {
        friends() {
            return Friend.all();
        }
    }
}
</script>

<style scoped>

</style>