import Vue from 'vue'
import App from './App.vue'
import '../../assets/css/main.css';
import mapdata from "../../plugin/mapPlugin";

Vue.config.productionTip = false;
Vue.use(mapdata);

new Vue({
  render: h => h(App),
}).$mount('#app')
