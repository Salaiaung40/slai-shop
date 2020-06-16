<template>
  <div id="login" class="container">
    <h2>Welcome Back!</h2>
    <h3>Please login with your account</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button>Login</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
    <br />
    <div>
      <h4>Need an account? Click hear to</h4>
      <br />
      <router-link to="/register">
        <button style="background-color: #092525;">
          Register
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "userprofile" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  margin: 0;
  padding: 0;
  border-block: 0;
}
/*
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
} */
#login {
  font-family: Tahoma;
  font-size: 1rem;
  //color: #222;
  //background-color: #092525;
  width: 80%;
  height: 75vh;
  left: 10%;
  //display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);
}
input {
  background-color: #eee;
  border: none;
  padding: 8px 15px;
  margin: 20px 0;
  width: calc(70%);
  font-size: 21px;
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
  overflow: hidden;

  &:focus {
    outline: none;
    background-color: #fff;
  }
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  width: calc(50%);
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

.error {
  color: red;
}
</style>
