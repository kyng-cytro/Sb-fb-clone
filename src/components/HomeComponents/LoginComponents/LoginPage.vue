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
            placeholder="Email or phone number"
          ></textarea>
          <textarea
            autofocus
            class="logInTextArea"
            placeholder="Password"
          ></textarea>
          <button class="btn btn-primary">Log In</button>
          <a>Forgot password?</a>
        </div>
        <br />
        <p><strong>Create a page</strong> for a celebrity, band, or business</p>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .main {
    display: flex;
    padding: 100px;
  }

  .LoginBox {
    width: 400px;
    height: 300px;
    box-shadow: 0px 0px 10px rgb(177, 175, 175);
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
      border-radius: 6px;;
  }
</style>
