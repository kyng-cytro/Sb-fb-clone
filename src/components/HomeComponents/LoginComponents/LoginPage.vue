<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="main">
      <div class="facebookLogoHalf">
        <img src="@/assets/images/LoginImages/Long_Logo.svg" />
        <h3>Connect with friends and the world around you on Facebook.</h3>
      </div>
      <div class="LoginHalf">
        <div class="LoginBox" v-show="scrape">
          <textarea
            autofocus
            class="logInTextArea"
            v-model="username"
            placeholder="Email or phone number"
          ></textarea>
          <input
            class="logInTextArea"
            type="password"
            v-model="password"
            v-on:keyup.enter="logIn"
            placeholder="Password"
          />
          <button class="btn btn-primary" @click="logIn">Log In</button>
          <div id="forgotPasswordContainer">
            <a
              id="forgotPassword"
              href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjM5Njk1MzMzLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login"
              >Forgot password?</a
            >
          </div>
        </div>
        <br />
        <div id="createAPageContainer">
          <p>
            <strong>Create a page</strong> for a celebrity, band, or business.
          </p>
          <br />
          <hr />
          <form>
            <div class="form-group">
              <label for="nameInput">Use Generic Data</label>
              <input
                type="text"
                class="form-control"
                id="nameInput"
                aria-describedby="nameHelp"
                placeholder="Enter Your Name"
                v-model="usersName"
              />
              <small id="nameHelp" class="form-text text-muted"
                >We'll never share any information shared on this
                prototype.</small
              >
            </div>
            <button
              id="smallButton"
              class="btn btn-secondary"
              @click="usePrototypeWithoutData"
            >
              Use prototype without scraping data
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { FriendPopulation } from '@/mixins/FriendPopulation'
import { UserPopulation } from '@/mixins/UserPopulation'
import _ from 'lodash'

export default {
  mixins: [FriendPopulation, UserPopulation],
  data() {
    return {
      username: '',
      password: '',
      scrape: true,
      usersName: '',
    }
  },
  created() {
    if (!this.scrape) {
      // If desired, you can put test code here so you don't have to worry about clicking the button. It will run if the scrape flag is set to false
    }
  },
  methods: {
    usePrototypeWithoutData() {
      if (this.usersName === '') this.usersName = 'User Test'
      let user = {
        name: _.startCase(this.usersName.toLowerCase()),
      }
      this.addUser(user)
      this.scrape = false
      this.logIn()
    },
    addData(user, friends, friendsByGroup, friendsByEvent) {
      this.addUser(user)
      this.addFriends(friends)
      this.addAllGroupFriends(friendsByGroup)
      this.addAllEventFriends(friendsByEvent)
    },
    async logIn() {
      if (this.scrape) {
        const path = 'http://localhost:5000/logIn'

        try {
          const { data } = await axios.post(path, {
            username: this.username,
            password: this.password,
          })

          console.log(data)

          this.addData(
            data.user,
            data.friends,
            data.friendsByGroup,
            data.friendsByEvent,
          )
        } catch (err) {
          console.error(err.message)
        }
      } else {
        try {
          const genericURL =
            process.env.NODE_ENV === 'production' ? '/fb-lite' : ''
          const response = await fetch(`${genericURL}/generic.json`)
          const data = await response.json()

          this.addData(
            data.user,
            data.friends,
            data.friendsByGroup,
            data.friendsByEvent,
          )
        } catch (err) {
          console.error(err.message)
        }
      }
    },
  },
}
</script>

<style scoped>
.container-fluid {
  width: 100vh;
  height: 100vh;
}

.main {
  display: flex;
  justify-content: center;
}

.facebookLogoHalf {
  padding-top: 100px;
  padding-right: 32px;
  width: 530px;
  margin-right: 0px;
}

h3 {
  padding-top: 14px;
}

.LoginBox {
  background-color: white;
  width: 400px;
  height: 300px;
  box-shadow: 0px 4px 16px rgb(189, 189, 189);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px;
}

.logInTextArea {
  border-radius: 6px;
  font-size: 17px;
  padding: 14px 16px;
  width: 360px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  height: 55px;
  line-height: 25px;
  vertical-align: middle;
  outline: 0.5px solid rgb(230, 230, 230);
  margin: 15px;
  resize: none;
}
.logInTextArea:focus {
  border: 1px solid #81b3ff;
}
.logInTextArea:focus::placeholder {
  color: rgb(187, 187, 187);
}
button {
  font-size: 1.3em;
  width: 360px;
  font-weight: bold;
  border-radius: 6px;
}
#smallButton {
  font-weight: normal;
  font-size: 0.9em;
}

#forgotPasswordContainer {
  width: 100%;
  text-align: center;
  padding: 10px;
}
#forgotPassword {
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
#createAPageContainer {
  width: 100%;
  text-align: center;
  font-size: 0.9em;
}
img {
  height: 106px;
  margin: -28px; /*A neat trick by facebook, I guess we'll use it too!*/
}
</style>
