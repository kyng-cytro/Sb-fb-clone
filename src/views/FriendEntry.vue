<template>
  <div class="container">
    <div v-if="!this.submitted">
      <form @submit.prevent="enter">
        <div class="form-group">
          <label for="nameInput">{{ currentQuestion }}</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="nameInput"
            placeholder="Name"
            required
          />
        </div>
      </form>

      <button class="btn btn-secondary btn-lg mx-2" @click="previous">
        Back
      </button>
      <button
        class="btn btn-primary btn-lg mx-2"
        v-show="!finished"
        @click="enter"
        :disabled="isNameEmpty"
      >
        Next
      </button>
      <button
        class="btn btn-success btn-lg mx-2"
        v-show="finished"
        @click="enter"
        :disabled="isNameEmpty"
      >
        Submit
      </button>
    </div>
    <div v-else>
      <p>Thank you.</p>
    </div>
  </div>
</template>

<script>
import FriendRequest from '@/vuex-orm_models/FriendRequestModel.js'
import _ from 'lodash'

const questionFriendList = [
  {
    question: 'would not want to connect with',
    friendData: null,
  },
  {
    question: 'would like to connect with',
    friendData: null,
  },
  {
    question: 'would feel pressured to connect with',
    friendData: null,
  },
  {
    question: 'would like to connect with, but you have some sort of concern',
    friendData: null,
  },
  {
    question: "have already connected with, but you didn't want to",
    friendData: null,
  },
]
export default {
  data() {
    return {
      name: '',
      numOfMutualFriends: '',
      daysUntilExpiration: 30,
      index: 0,
      submitted: false,
    }
  },
  created() {
    // Reset Friend Request entry array to empty (start with a fresh set of friend requests)
    FriendRequest.delete((friend) => {
      return friend.id
    })
  },
  methods: {
    enter() {
      if (this.finished) this.submit()
      else this.next()
    },
    submit() {
      this.setQuestion(this.index) // Basically do what the next function does for the last item
      for (let i = 0; i < questionFriendList.length; i++) {
        FriendRequest.insert({
          data: {
            name: _.startCase(
              questionFriendList.at(i).friendData.name.toLowerCase(),
            ),
            imageSource: '',
            daysUntilExpiration: this.daysUntilExpiration,
            numOfMutualFriends: this.numOfMutualFriends,
            friendQuestion: questionFriendList.at(i).question,
          },
        })
      }
      this.submitted = true
      this.goHome()
    },
    goHome() {
      this.$router.push('/')
    },
    resetFields() {
      this.name = ''
    },
    setQuestion(index) {
      questionFriendList.at(index).friendData = {
        name: this.name,
        numOfMutualFriends: this.numOfMutualFriends,
        daysUntilExpiration: this.daysUntilExpiration,
      }
      this.resetFields()
    },
    next() {
      if (this.index < questionFriendList.length - 1) {
        this.setQuestion(this.index)
        this.index++
      }
    },
    previous() {
      if (this.index > 0) {
        this.setQuestion(this.index)
        this.index--
      } else {
        this.goHome()
      }
    },
  },
  computed: {
    currentQuestion() {
      return (
        'Please enter the name of a friend you ' +
        questionFriendList.at(this.index).question +
        ':'
      )
    },
    finished() {
      return this.index == questionFriendList.length - 1
    },
    isNameEmpty() {
      return this.name === ''
    },
  },
}
</script>

<style scoped>
.container {
  padding: 50px;
}

.friendRequestDisplay {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
