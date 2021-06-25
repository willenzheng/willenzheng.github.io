<!-- 主页 -->
<template>
  <div class="index-page">
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
    <export-sheet></export-sheet>
  </div>
</template>

<script>
import recentListen from '@/components/RecentListen.vue';
import exportSheet from '@/components/ExportSheet.vue';

export default {
  name: 'IndexPage',

  components: {
    recentListen,
    exportSheet,
  },

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    print() {},
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  width: 100vw;
  height: 100vh;
  .header {
    width: 100%;
    height: 50px;
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
  .export-sheet {
    margin-top: 100px;
    margin-left: 100px;
  }
}
</style>
