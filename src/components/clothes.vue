<template>
  <div id="clothes">
    <div class="borderbox">
      <div class="pic-holder">
        <img id="images" src="@/assets/clothes/h&mtshirt.jpg" />
      </div>
      <div class="info-holder">
        <h7>{{ name }}</h7> <br />
        <h7>Brand: {{ author }}</h7> <br />
        <h7>Type: {{ type }}</h7> <br />
        <h7>{{ discription }}</h7> <br />
        <h5>{{ price }}</h5>
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
      name: "H&M T-shirt",
      author: "H&M",
      type: "T-Shirt",
      discription:
        "A straight T-shirt in soft cotton jersey with a print. The T-shirt has a ribbed at the neck.   Cotton 100%",
      price: "14,99 euro"
    };
  }
};
</script>

<style scoped>
.borderbox {
  display: flex;
  flex-direction: row;
  text-align: left;
  border: 20px;
  color: #333;
}
#images {
  width: 100px;
}
.pic-holder {
  width: 30%;
}
.info-holder {
  width: 70%;
  height: auto;
}
</style>
