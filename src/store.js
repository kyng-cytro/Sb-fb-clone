import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core'
import Friend from "@/classes/friend.js"
import NonFacebookFriend from "@/classes/nonFacebookFriend.js"
import faceLight from "@/classes/faceLight.js"
import Filters from "@/classes/filters.js"


Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Friend);
database.register(NonFacebookFriend);
database.register(faceLight);
database.register(Filters);

export default new Vuex.Store({
    plugins: [VuexORM.install(database)]

});