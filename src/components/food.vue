<template>
  <div id="food">
    <div class="borderbox">
      <div class="pic-holder">
        <img id="images" src="@/assets/food/pizza.jpg" />
      </div>
      <div class="info-holder">
        <h7>Name: {{ name }}</h7> <br />
        <h7>INGREDIENTS: {{ discription }}</h7> <br />
        <h7>Weight: {{ weight }}</h7> <br />
        <h5>{{ price }}</h5>
        <br />
      </div>
    </div>
    <hr />
  </div>
  <!--end of main App-->
</template>

<script>
export default {
  data() {
    return {
      //cover: require("@/assets/electronic/samsung65.jpg"),
      name: "Carrefour Bio Pizza Margherita",

      discription:
        "Wheat flour * 46%, water, mozzarella * 20.9%, tomato paste * 15.7%, extra virgin olive oil * 4.3%, salt, yeast, oregano * 0.3%, * Organic., For for the preparation of this pizza, we used 227 g dough and 130 g garnish.",
      weight: "310g",
      price: "2.59 euro"
    };
  }
};
</script>

<style scoped>
#food {
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
  height: auto;
}
.pic-holder {
  width: 30%;
}
.info-holder {
  width: 70%;
}
</style>
