import Post from "@/vuex-orm_models/PostModel.js";
import FacebookLite from "@/vuex-orm_models/FacebookLiteModel.js";

export const DataPopulation = {
  data() {
    return {};
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    },
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
    },
  },
  computed: {
    localPosts() {
      let posts = [];
      let currentPostDate = new Date();

      posts.push({
        imageSource: "",
        friend: {
          name: "Neighbor",
          isFamily: false,
        },
        text: "Hey, does anyone in Millview Ranch know which days are our watering days this year?",
        date: currentPostDate.toISOString(), // For some reason, dates have to be stored as strings in these objects otherwise the DateProcessing gets mad
        numComments: this.getRandomInt(1, 10),
        numShares: this.getRandomInt(0, 2),
        numLikes: this.getRandomInt(1, 7),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });

      currentPostDate.setDate(currentPostDate.getDate() - 2); // Set the date to two days earlier
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));
      posts.push({
        imageSource: "grandparents_shopping.jpg",
        friend: {
          name: "Grandma",
          isFamily: true,
        },
        text: "Jim and I just picked up from some groceries from the local farmers' market! The prices here are great and the people are beautiful.",
        date: currentPostDate.toISOString(), // For some reason, dates have to be stored as strings in these objects otherwise the DateProcessing gets mad
        numComments: this.getRandomInt(1, 10),
        numShares: this.getRandomInt(0, 5),
        numLikes: this.getRandomInt(5, 30),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });
      
      posts.push({
        imageSource: "rei.png",
        friend: {
          name: "REI"
        },
        text: "Members can now buy a Co-op Cycles kids' bike today and trade it in for a gift card later. Terms apply.",
        date: currentPostDate.toISOString(), // For some reason, dates have to be stored as strings in these objects otherwise the DateProcessing gets mad
        numComments: this.getRandomInt(1, 10),
        numShares: this.getRandomInt(0, 5),
        numLikes: this.getRandomInt(5, 30),
      });

      currentPostDate.setDate(currentPostDate.getDate() - 3);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));

      posts.push({
        imageSource: "",
        friend: {
          name: "Uncle",
          isFamily: true,
        },
        text: "I'm seriously disappointed with the prospects of this election. I thought Provo was better than this.",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(1, 20),
        numShares: this.getRandomInt(0, 1),
        numLikes: this.getRandomInt(1, 4),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });

      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));

      posts.push({
        imageSource: "covid.jpg",
        friend: {
          name: "Family Friend",
          isFamily: false,
        },
        text: "I've been moved temporarily to help with alll the COVID-19 testing going on. I'm so sick of COVID, is this ever going to end?",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(30, 60),
        numShares: this.getRandomInt(2, 16),
        numLikes: this.getRandomInt(30, 70),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });

      currentPostDate.setDate(currentPostDate.getDate() - 1);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));

      posts.push({
        imageSource: "nerd.jpg",
        friend: {
          name: "Aunt",
          isFamily: true,
        },
        text: "I woke up this morning to see Kyle drinking coffee and staring at an empty screen. He wants to be just like Mark, haha :)",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(3, 30),
        numShares: this.getRandomInt(1, 3),
        numLikes: this.getRandomInt(20, 80),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });

      currentPostDate.setDate(currentPostDate.getDate() - 1);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));

      posts.push({
        imageSource: "sax.jpg",
        friend: {
          name: "College Professor",
          isFamily: false,
        },
        text: "Oh my goodness it's so fun to hear Jill playing the Saxophone. Robert's not such a big fan, we'll see what happens first, him losing his patience or her losing interest.... ",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(3, 30),
        numShares: this.getRandomInt(1, 3),
        numLikes: this.getRandomInt(20, 80),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });
      
      posts.push({
      imageSource: "market.png",
      friend: {
        name: "Jasper's Market"
      },
      text: "Out on a grocery run? Make sure to stock up on our fresh, in-season fruits and veggies.",
      date: currentPostDate.toISOString(), // For some reason, dates have to be stored as strings in these objects otherwise the DateProcessing gets mad
      numComments: this.getRandomInt(1, 10),
      numShares: this.getRandomInt(0, 5),
      numLikes: this.getRandomInt(5, 30),
      });

      currentPostDate.setDate(currentPostDate.getDate() - 6);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));

      posts.push({
        imageSource: "birthday.jpg",
        friend: {
          name: "A Mom From Church",
          isFamily: false,
        },
        text: "just celebrated stephen's 4th birthday. how do they grow up so fast?",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(30, 80),
        numShares: this.getRandomInt(1, 3),
        numLikes: this.getRandomInt(50, 130),
        filter: {
          isMajorEvent: true,
          isPostViewOnly: false,
        },
      });

      currentPostDate.setDate(currentPostDate.getDate() - 6);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));
      posts.push({
        imageSource: "new_house.jpg",
        friend: {
          name: "Dad's Cousin",
          isFamily: true,
        },
        text: "We arrived to New Jersey safe and sound! So excited for this new chapter in our life!",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(30, 80),
        numShares: this.getRandomInt(1, 3),
        numLikes: this.getRandomInt(50, 130),
        filter: {
          isMajorEvent: true,
          isPostViewOnly: false,
        },
      });
      
      posts.push({
      imageSource: "ikea.png",
      friend: {
        name: "IKEA"
      },
      text: "Get your sprintime vibes in check with affordable prices to keep you in season.",
      date: currentPostDate.toISOString(), // For some reason, dates have to be stored as strings in these objects otherwise the DateProcessing gets mad
      numComments: this.getRandomInt(1, 10),
      numShares: this.getRandomInt(0, 5),
      numLikes: this.getRandomInt(5, 30),
      });

      currentPostDate.setDate(currentPostDate.getDate() - 6);
      currentPostDate.setHours(this.getRandomInt(7, 24), this.getRandomInt(0, 60));
      posts.push({
        imageSource: "snail.jpg",
        friend: {
          name: "College Friend",
          isFamily: false,
        },
        text: "i am loving my new cannon dslr. check out the epic DOF!",
        date: currentPostDate.toISOString(), 
        numComments: this.getRandomInt(2, 30),
        numShares: this.getRandomInt(1, 3),
        numLikes: this.getRandomInt(50, 130),
        filter: {
          isMajorEvent: false,
          isPostViewOnly: false,
        },
      });

      return posts;
    },
  },
};
