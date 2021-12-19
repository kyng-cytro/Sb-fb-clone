<template>
  <div>
    <div class="main">
      <div class="facebookLogoHalf">
        <img src="@/assets/images/LoginImages/Long_Logo.svg" />
        <h3>Connect with friends and the world around you on Facebook.</h3>
      </div>
      <div class="LoginHalf">
        <div class="LoginBox">
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
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      logIn() {
        const path = "http://localhost:5000/logIn";
        axios
          .post(path, {
            username: this.username,
            password: this.password,
          })
          .then(
            (response) => {
              this.username = response.data;
            },
            (error) => {
              console.log(error);
            }
          );
        // this.username = "";
        this.password = "";
      },
    },
  };
</script>

<style scoped>
  .main {
    display: flex;
    padding: 100px;
    width: 100%;
    justify-content: center;
  }

  .facebookLogoHalf {
    padding-top: 100px;
    padding-right: 32px;
    width: 580px;
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
    padding: 10px;
  }

  .logInTextArea {
    border-radius: 6px;
    font-size: 17px;
    padding: 14px 16px;
    width: 330px;
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
    font-weight: bold;
    border-radius: 6px;
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
