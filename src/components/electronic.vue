<template>
  <div id="electronic">
    <div class="borderbox">
      <!-- v-for="items in item"> -->
      <div class="pic-holder">
        <img id="images" src="@/assets/electronic/samsung65.jpg" />
      </div>
      <div class="info-holder">
        <h7>{{ name }}</h7>
        <h7>{{ discription }}</h7>
        <h5>{{ price }}</h5>
        <div class="cart-section">
          <p v-if="inVentory > 10">In stock ({{ inVentory }})</p>
          <p style="color:red;" v-else-if="inVentory <= 3 && inVentory > 0">
            Only ({{ inVentory }}) Left
          </p>
          <p
            style="color:darkblue;"
            v-else-if="inVentory <= 10 && inVentory > 0"
          >
            Almost Sold Out! ({{ inVentory }})
          </p>

          <p v-else style="color:red;">Out of stock</p>

          <p>
            <button @click="addToCart" :disabled="!inStock">
              Add to Cart
            </button>
          </p>
          <p>
            <button
              @click="removeCart"
              :disabled="!inStock"
              style="background-color:pink;"
            >
              Remove Cart
            </button>
          </p>
          <div class="cart">
            <p>Cart ({{ cart }})</p>
          </div>
        </div>
      </div>
      <!--end of main App 'info-holder'-->
    </div>
    <!--end of main App 'borderbox'-->
    <hr />
  </div>
  <!--end of main App 'electronic'-->
</template>

<script>
export default {
  data() {
    // need to ad array of items for the list of item//
    return {
      cart: 0,
      cover: require("@/assets/electronic/samsung65.jpg"),
      name: 'Samsung TV, 65" 120cm, flat LCD TV',
      discription: "220V, 4K, A++, NETFLIX, YouTube,",
      price: "650,00 euro",
      inStock: true,
      inVentory: 30 // need to add function or change the numbers to view the inventory properties//
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeCart() {
      this.cart -= 1;
    }
  }
};
</script>

<style scoped>
#electronic {
}
.borderbox {
  display: flex;
  flex-direction: row;
  text-align: left;
  border: 20px;
  color: #333;
}
#images {
  width: 200px;
  height: 100px;
}
.pic-holder {
  width: 30%;
}
.info-holder {
  width: 70%;
}
.cart-section {
  display: flex;
  flex-flow: row wrap;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
}
.cart-section button {
  height: 2.5em;
  border-radius: 0.5em;
  background-color: rgb(100, 100, 236);
  transform: scale(0.9);
}
.cart {
  width: 70px;
  margin: 0em;
}
</style>
