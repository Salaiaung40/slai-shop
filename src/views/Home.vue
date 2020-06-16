<template>
  <div class="home">
    <img id="shopLogo" alt="shop logo" src="../assets/shop.png" />
    <h1>{{ msg }}</h1>
    <Electronic />
    <div class="itemholder">
      <h3>Food</h3>
      <foods v-on:click:="detail()" />
    </div>

    <Books />
    <clothes />
  </div>
</template>

<script>
// @ is an alias to /src
import Electronic from "@/components/electronic.vue";
import Books from "@/components/books.vue";
import Foods from "@/components/food.vue";
import Clothes from "@/components/clothes.vue";

export default {
  name: "Home",
  components: {
    Electronic,
    Books,
    Foods,
    Clothes
  },
  data() {
    return {
      msg: "Welcome to Salai Shop vue App"
    };
  },
  methods: {
    detail() {
      this.image = <img id="images" src="@/assets/electronic/samsung65.jpg" />;
    }
  }
};
</script>

<style lang="scss" scoped>
#shopLogo {
  width: 200px;
  height: 150px;
}
/*
.itemholder {
  width: 400px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
} */
#images {
  width: 100px;
  height: 100px;
}
.pic-holder {
  width: 200px;
}
</style>
