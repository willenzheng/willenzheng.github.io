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
    <export-sheet></export-sheet>
    <div class="my-code">
      <button @click="copyCode">复制</button>
      <pre ref="pre">
        let a = {
          a:1,
          b:2
        }
      </pre>
    </div>
    <p v-highlight>
      <pre>
        <code id="test" ref="test">
function add() {
  return a+b;
}
.css {
  color: red;
}
        </code>
      </pre>
    </p>
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
    return {
      html:'let a = b',
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {
    let code = this.$refs.test.innerText;
    console.log(code)

    console.log(code.match('function'))
    let code1 = code.slice(0,3,'dfdf')
    console.log(code1)
  },

  methods: {
    copyCode() {
      const content = this.$refs.pre.innerText;
      try {
        navigator.clipboard.writeText(content)
        console.log('复制成功')
      } catch (err) {
        console.log(`复制失败${err}`)
      }
    },
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
  .my-code {
    width: 100%;
    background: #272822;
    color: #eee;
    font-size: 12px;
    overflow-y: auto;
    pre {
      font-family: 'fira code', 'Courier New', Courier, monospace;
    }
  }
}
</style>
