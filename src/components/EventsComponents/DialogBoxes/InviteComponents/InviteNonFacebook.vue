<template>
    <div class="container">
        <p>Want to invite friends not on Facebook? No problem!</p>

        <div class="form-group">
            <input placeholder="Name" v-model="form.name" class="form-control"/>
        </div>


        <div class="info">
            <div class="form-group">
                <input placeholder="Phone number" v-model="form.phone" class="form-control"/>
            </div>

            <p id="orText"> or </p>
            
            <div class="form-group">
                <input placeholder="Email" v-model="form.email" class="form-control"/>
            </div>
            <button class="btn btn-primary" @click="addNonFacebookFriend">Add</button>
        </div>
    </div>
</template>

<script>

import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js"
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
    display: flex;
}
button {
    padding-left: 30px;
    padding-right: 30px;
    align-self: flex-end;
    margin: 15px;
    margin-bottom: 20px;
}
</style>