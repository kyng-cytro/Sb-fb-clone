import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core'
import Friend from "@/classes/friend.js"
import NonFacebookFriend from "@/classes/nonFacebookFriend.js"

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Friend);
database.register(NonFacebookFriend);

export default new Vuex.Store( {
    plugins: [VuexORM.install(database)]

});