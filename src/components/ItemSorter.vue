<!-- 排序组件 -->
<template>
  <div class="item-sorter">
    <div
      v-for="(item, index) in dataWithSeq"
      :key="index"
      class="item-wrapper"
      @click="setItemCheck(item)"
    >
      <input v-model="item.originData[check]" type="checkbox" class="checkbox" @click.stop="emitSortedData" />
      <div class="">{{ item.originData[show] }}</div>
      <div class="button-wrapper">
        <button v-if="index !== 0" @click.stop="moveTop(index)">上移</button>
        <button v-if="index !== data.length - 1" @click.stop="moveBottom(index)">下移</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    // 原始数组
    data: {
      type: Array,
      require: true,
    },
    // 要展示的字段
    show: {
      type: String,
    },
    // 勾选的字段
    check: {
      type: String,
    },
  },

  data() {
    return {
      dataWithSeq: [],
    };
  },

  computed: {},

  watch: {},

  created() {
    this.setDataWithSeq();
  },

  mounted() {},

  methods: {
    setDataWithSeq() {
      this.data.forEach((item, index) => {
        let obj = {
          originData: item,
          seq: index,
        };
        this.dataWithSeq.push(obj);
      });
    },

    moveTop(index) {
      this.dataWithSeq[index].seq -= 1;
      this.dataWithSeq[index - 1].seq += 1;
      this.sortDataWithSeq();
    },

    moveBottom(index) {
      this.dataWithSeq[index].seq += 1;
      this.dataWithSeq[index + 1].seq -= 1;
      this.sortDataWithSeq();
    },

    sortDataWithSeq() {
      this.dataWithSeq.sort((a, b) => a.seq - b.seq);
      this.emitSortedData();
    },

    setItemCheck(item) {
      item.originData[this.check] = !item.originData[this.check];
      this.emitSortedData();
    },

    emitSortedData() {
      let data = [];
      this.dataWithSeq.forEach(item => {
        data.push(item.originData);
      });
      this.$emit('change', data);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-sorter {
  .item-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.5em 3em 0.5em 0;
    cursor: pointer;
    .button-wrapper {
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      opacity: 0;
      button {
        font-size: 0.5em;
        background: #fff;
        border: 1px solid #eee;
        color: #333;
        cursor: pointer;
      }
      button:hover {
        background: #ddd;
      }
    }
    
  }
  .item-wrapper:hover .button-wrapper {
      opacity: 1;
      transition: opacity 1s;
    }
}
</style>
