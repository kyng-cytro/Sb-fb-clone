import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/Friends',
    name: 'Friends',

    component: () =>
      import(/* webpackChunkName: "Friends" */ '../views/FriendsView.vue'),
  },
  {
    path: '/Events',
    name: 'Events',

    component: () =>
      import(/* webpackChunkName: "Events" */ '../views/EventsView.vue'),
  },
  {
    path: '/Groups',
    name: 'Groups',

    component: () =>
      import(/* webpackChunkName: "Groups" */ '../views/GroupsView.vue'),
  },
  {
    path: '/FriendEntry',
    name: 'FriendEntry',

    component: () =>
      import(/* webpackChunkName: "FriendEntry" */ '../views/FriendEntry.vue'),
  },
  {
    path: '/ResearcherReview',
    name: 'ResearcherReview',

    component: () =>
      import(
        /* webpackChunkName: "ResearcherReview" */ '../views/ResearcherReview.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? '/fb-lite/' : '/',
  routes,
})

export default router
