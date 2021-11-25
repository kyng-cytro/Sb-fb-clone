import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core'
import Friend from "@/vuex-orm_models/FriendModel.js"
import FriendRequest from "@/vuex-orm_models/FriendRequestModel.js"
import NonFacebookFriend from "@/vuex-orm_models/NonFacebookFriendModel.js"
import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js"
import Filter from "@/vuex-orm_models/FilterModel.js"


Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Friend);
database.register(FriendRequest);
database.register(NonFacebookFriend);
database.register(FacebookLite);
database.register(Filter);

export default new Vuex.Store({
    plugins: [VuexORM.install(database)]

});