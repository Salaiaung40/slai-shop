<template>
  <div class="navigation">
    <nav>
      <label class="logo"
        ><img id="pics" alt="shop logo" src="@/assets/shop.png" />

        Salai Shop
      </label>

      <router-link to="/">Home</router-link>
      <!-- <router-link to="/about">About</router-link>| |-->
      <!-- <router-link to="/register">Register</router-link>| -->

      <ul>
        <li>
          <div v-if="loggedIn">
            You are Logging as <router-link to="/user">User</router-link>
          </div>
          <div v-else>Please Login</div>
        </li>
        <li>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <i class="fa fa-shopping-cart" style="font-size:30px"></i>
        </li>
        <li>
          <button><router-link to="/login">Log In</router-link></button>
        </li>
        <li>
          <button class="but" @click="signOut" style="color: red">
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  </div>
  <!--end of main div-->
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "nevbar",
  data() {
    return {
      loggedIn: false,
      email: this.email
    };
  },
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  padding: 5px;
  background-color: #5f5fdd;
  color: white;
  height: 80px;
  //display: flex;
  //justify-content: space-between;
  //row-gap: 80em;
  margin-bottom: 1em;
  text-align: left;
  //position: center;
  //text-align: justify;
  //line-height: 0px;
}
a {
  font-weight: bold;
  color: #2c3e50;
  padding: 7px 13px;
  border-radius: 3px;

  &.router-link-exact-active {
    color: red;
  }
}
a.active,
a:hover {
  background: #1b9bff;
  transition: 0.5s;
}

nav {
  height: 80px;
  width: 100%;
}
.navigation #pics {
  width: 60px;
  height: 60px;
}

label.logo {
  //color: #f2f2f2;
  font-size: 1.5em;
  //line-height: 80px;
  //padding: 5px;
  //font-weight: 50;
  //font-family: "Poppins", sans-serif;
  //text-align: left;
}
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
nav ul {
  float: right;
  // margin-right: 60px;
}
nav ul li {
  display: inline-block;
  //line-height: 80px;
  margin: 0 2px;
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #67c492;
  color: #fff;
  //width: 1em;
  font-weight: bold;
  padding: 5px 20px;
  margin: 0.5em;
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
}</style
>> /* .container { display: flex; flex-direction: row; justify-content:
space-between; } .menus { align-self: center; } .cart-holder { justify-content:
space-between; } */
