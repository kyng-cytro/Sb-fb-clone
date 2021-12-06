import Post from "@/vuex-orm_models/PostModel.js";
import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";

export const DataPopulation = {
  data() {
    return {
      localPosts: [
        {
          imgSrc: "stars.jpg",
          friend: {
            imgSrc: "anson.jpg",
            name: "Anson Savage",
            isFamily: false,
          },
          text: "The stars from three weeks ago were very beautiful",
          date: "11/1/2021",
          numComments: 87,
          numShares: 34,
          numLikes: 1231,
          filter: {
            isMajorEvent: false,
            isPostViewOnly: false,
          },
        },
        {
          imgSrc: "birthday.jpg",
          friend: {
            imgSrc: "xinru.jpg",
            name: "Xinru",
            isFamily: false,
          },
          text: "We are going to have a birthday party! It is a major event.",
          date: "11/12/2021",
          numComments: 87,
          numShares: 34,
          numLikes: 1231,
          filter: {
            isMajorEvent: true,
            isPostViewOnly: false,
          },
        },
        {
          imgSrc: "breakfast.jpg",
          friend: {
            imgSrc: "businessMan.jpg",
            name: "Miles",
            isFamily: true,
          },
          text: "I ate some breakfast this morning, but I don't care what you think, so I'm going to set my post to View Only.",
          date: "11/15/2021",
          numComments: 87,
          numShares: 34,
          numLikes: 1231,
          filter: {
            isMajorEvent: false,
            isPostViewOnly: true,
          },
        },
        {
          imgSrc: "",
          friend: {
            imgSrc: "businessMan.jpg",
            name: "Miles",
            isFamily: true,
          },
          text: "I am a big fan of doing my homework.",
          date: "11/16/2021",
          numComments: 87,
          numShares: 34,
          numLikes: 1231,
          filter: {
            isMajorEvent: false,
            isPostViewOnly: false,
          },
        },
      ],
    };
  },
  methods: {
    populatePosts() {
      console.log("I'm populating the posts!");
      for (let i = 0; i < this.localPosts.length; i++) {
        Post.insert({ data: this.localPosts[i] });
      }
    },
    setFaceookLite() {
      FacebookLite.insert({
        data: { enabled: false },
      });
    }
  },
};
