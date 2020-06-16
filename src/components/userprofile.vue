<template>
  <div class="user">
    <h3>User Profile</h3>
    <p>Your E-mail is {{ email }}</p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "About" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style></style>
