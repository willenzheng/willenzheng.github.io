import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './style/index.css';

Vue.config.productionTip = false;

// Vue-cli生成的工程文件的src/main.js
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
