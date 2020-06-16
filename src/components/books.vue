<template>
  <div id="books">
    <div class="borderbox">
      <div class="pic-holder">
        <img id="images" src="@/assets/book/richVspoor.jpg" />
      </div>
      <div class="info-holder">
        <h7>{{ name }}</h7> <br />
        <h7>Authors: {{ author }}</h7> <br />
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
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki, Sharon Lechter",
      type: "Book",
      discription:
        "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets,",
      price: "19,99 euro"
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
