<template>
  <div id="app">
    <NavBar />
    <div class="body1">
      <div class="sidenav">
        <h5>Categories</h5>
        <router-link to="/book">Books</router-link> <br />
        <router-link to="/clo">Clothes</router-link> <br />
        <router-link to="/elect">Electronic</router-link> <br />
        <router-link to="/food">Food</router-link>
      </div>
      <div class="shoppage">
        <router-view />
      </div>
    </div>
    <!--end of body1-->
  </div>
  <!--end of main App-->
</template>

<script>
import NavBar from "@/components/nevbar.vue";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.body1 {
  display: flex;
  flex-direction: row;
  row-gap: 30px;
}
.sidenav {
  width: 15%;
  background-color: #f3f1f1;
  margin-right: 10px;
}
.shoppage {
  width: 85%;
  padding: 1em;
}
</style>
