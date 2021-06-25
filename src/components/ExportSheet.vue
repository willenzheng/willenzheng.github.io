<!-- 表格导出组件 -->
<template>
  <div class="export-sheet">
    <button class="neumorphism" @click="exportSheet">导出为 Excel</button>
  </div>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'ExportSheet',

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    exportSheet() {
      const filename = 'file.xlsx'; // 文件名称
      const data = [
        [1, 2, 3],
        [true, false, null, 'sheetjs'],
        ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
        ['baz', null, 'qux'],
      ]; // 数据，一定注意需要时二维数组
      const wsName = 'Sheet1'; // Excel第一个sheet的名称
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, wsName); // 将数据添加到工作薄
      XLSX.writeFile(wb, filename); // 导出Excel
    },
  },
};
</script>

<style lang="scss" scoped></style>
