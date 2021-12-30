import Friend from "@/vuex-orm_models/FriendModel.js";

export const DataPopulation = {
  data() {
    return {
      friendExampleList: [
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
      ],
      form: {
        name: "",
        imgSrc: "",
        numOfMutualFriends: null,
      },
    };
  },
  created() {
    //On creation of this component, populate the Vuex store
    for (let i = 0; i < friendExampleList.length; i++) {
      Friend.insert({ data: friendExampleList[i] });
    }
    //Todo: should be able to replace this with:
    // Friend.insert({data: friendExampleList});
  },
  methods: {
    addFriend() {
      Friend.insert({ data: this.form });
    },
  },
  computed: {
    friends() {
      return Friend.all();
    },
  },
};
