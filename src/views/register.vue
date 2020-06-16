<template>
  <div id="register" class="container">
    <div class="error" v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <h2>Welcome New Customer!</h2>
      <h3>Create an account</h3>
      <h3>Use your email to Register</h3>
      <div class="name">
        <input type="username" v-model="neame" placeholder="Usermane" />
      </div>
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
    </form>
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
      alert("submitted!");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("user");
          this.$router.replace({ name: "userprofile" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 18px;
}
#register {
  font-family: Tahoma;
  font-size: 1rem;
  //color: #222;
  //background-color: #092525;
  width: 80%;
  height: 75vh;
  left: 10%;
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
</style>
