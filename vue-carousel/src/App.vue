<template>
  <div id="app">
    <div class="app-content">
      <h1>Carousel Banner Demontration</h1>
      <div class="banner-top">
        <BannerSlider
          ref="bannerSliderComp"
          :imageArr="slideImgs"
          :loop="true"
          :auto="true"
        />
      </div>
      <div class="actions">
        <button @click="addImageToBanner">
          Add Image
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSlider from "./components/Slider.vue";

export default {
  name: "App",
  components: {
    BannerSlider,
  },
  data() {
    return {
      slideImgs: [
        "https://insiston.com/wp-content/uploads/2019/02/adorable-cat.jpg",
        "https://allkindofpets.files.wordpress.com/2011/10/twin-white-cats.jpg",
        "https://i.pinimg.com/originals/bc/78/4f/bc784f866bb59587b2c7364d47735a25.jpg",
      ],
    };
  },
  methods: {
    addImageToBanner() {
      this.slideImgs.push(
        "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"
      );
      this.$refs.bannerSliderComp.$ex_refresh();
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background: #f7f7f7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  margin: 0;
  padding: 20px 0;
}

.banner-top {
  width: 1024px;
  height: 400px;
  margin: 0 auto;
}
.actions {
  margin-top: 30px;
  button {
    height: 34px;
    border: none;
    padding: 0 20px;
    background: #4a93e4;
    color: #fff;
  }
}
@media only screen and (max-width: 1024px) {
  .banner-top {
    width: 100%;
    height: 300px;
  }
}
</style>
