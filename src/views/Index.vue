<!-- 主页 -->
<template>
  <div class="index-page" ref="index">
    <header class="header">
      <div class="header__wrapper">
        <a href="https://www.notion.so/willen/Dev-bf2f217106e445c99e604964a348b8fe" target="blank">
          <div class="header__item">
            <div class="image-wrapper">
              <img src="@/assets/logo-notion.png" alt="" />
            </div>
            <span>我的开发笔记</span>
          </div>
        </a>
        <recent-listen></recent-listen>
      </div>
    </header>
    <sunset-slider></sunset-slider>
  </div>
</template>

<script>
import RecentListen from '@/components/RecentListen.vue';
import sunsetSlider from '@/components/SunsetSlider.vue';

export default {
  name: 'IndexPage',

  components: {
    RecentListen,
    sunsetSlider,
  },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.index-page {
  width: 100%;
  min-height: 100%;
  .header {
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.3);
    &__wrapper {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      color: #333;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        background: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
        color: #000;
        transition: all 0.1s ease-in-out;
      }
      .image-wrapper {
        margin-right: 4px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
