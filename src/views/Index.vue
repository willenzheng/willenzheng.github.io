<!-- 主页 -->
<template>
  <div class="index-page" ref="index">
    <header class="header">
      <a href="https://www.notion.so/willen/Dev-bf2f217106e445c99e604964a348b8fe" target="blank">
        <div class="header__item">
          <div class="image-wrapper">
            <img src="@/assets/logo-notion.png" alt="" />
          </div>
          <span>我的开发笔记</span>
        </div>
      </a>
      <recent-listen></recent-listen>
    </header>
    <main class="main">
      <div>
        <img src="@/assets/meme/work-hard.jpeg" alt="">
      </div>
      <div>改版中...</div>
    </main>
  </div>
</template>

<script>
import RecentListen from '@/components/RecentListen.vue';

export default {
  name: 'IndexPage',

  components: {
    RecentListen,
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
  width: 100vw;
  height: 100vh;
  .header {
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6px;
      color: #333;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        background: #eee;
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
  .main {
    position: absolute;
    top: 60px;
    bottom: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
