import Friend from "@/vuex-orm_models/FriendModel.js";

export const friendPopulation = {
  data() {
    return {
      // friendExampleList: [
      //   {
      //     imageSource: "businessMan.jpg",
      //     name: "Miles",
      //     numOfMutualFriends: 21,
      //   },
      //   {
      //     imageSource: "anson.jpg",
      //     name: "Anson",
      //     numOfMutualFriends: 21,
      //   },
      //   {
      //     imageSource: "xinru.jpg",
      //     name: "Xinru",
      //     numOfMutualFriends: 21,
      //   },
      // ]
    };
  },
  // created() {
    //On creation of this component, populate the Vuex store
    // for (let i = 0; i < this.friendExampleList.length; i++) {
    //   Friend.insert({ data: this.friendExampleList[i] });
    // }
    //Todo: should be able to replace this with:
    // Friend.insert({data: friendExampleList});
  // },
  methods: {
    addFriend(friend) {
      Friend.insert({ data: friend });
    },
    addFriends(friends) {
      Friend.insert({ data: friends});
    }
  },
  computed: {
    friends() {
      return Friend.all();
    },
  },
};
