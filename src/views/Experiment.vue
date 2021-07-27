<!-- 实验页（实现代码片段） -->
<template>
  <div class="experiment">
    <sunset-slider></sunset-slider>
  </div>
</template>

<script>
import sunsetSlider from '@/components/SunsetSlider.vue';
export default {
  name: 'Exprement',

  components: {
    sunsetSlider,
  },

  data() {
    return {
      
    };
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    
  },
};
</script>

<style scoped>
.experiment {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
