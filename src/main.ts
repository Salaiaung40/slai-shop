import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSqZrNfnAoCaX8oot8p36-k7PFWV8ZJDI",
  authDomain: "shop-login-abdc7.firebaseapp.com",
  databaseURL: "https://shop-login-abdc7.firebaseio.com",
  projectId: "shop-login-abdc7",
  storageBucket: "shop-login-abdc7.appspot.com",
  messagingSenderId: "1098745871780",
  appId: "1:1098745871780:web:837c1e0e3c45b7ff2f9531"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app: import("vue/types/vue").CombinedVueInstance<
  Vue,
  object,
  object,
  object,
  Record<never, any>
>;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
