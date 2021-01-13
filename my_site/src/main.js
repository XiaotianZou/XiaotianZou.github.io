import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueCropper from 'vue-cropper'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'animate.css';

Vue.config.productionTip = false
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCropper)

new Vue({
  render: h => h(App),
}).$mount('#app')
