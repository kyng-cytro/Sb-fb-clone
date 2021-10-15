<template>
<div>
    <input v-model="form.name">
    <button @click="addFriend">Add friend</button>
    <li>
        
    </li>
</div>
  
</template>

<script>
import Friend from "@/classes/friend.js";

export default {
    data() {
        return {
            form: {
                name: '',
            }
        }
    },
    methods: {
        addFriend() {
            Friend.insert({ data: this.form});
        }
    }
}
</script>

<style scoped>

</style>