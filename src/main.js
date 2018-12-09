// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import Toast from 'muse-ui-toast'
import VueClipboard from 'vue-clipboard2'
import infiniteScroll from 'vue-infinite-scroll'
import { HappyScroll } from 'vue-happy-scroll'
import Message from 'muse-ui-message';

import ElementUI from 'element-ui'
import 'muse-ui/dist/muse-ui.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-happy-scroll/docs/happy-scroll.css'
import 'muse-ui-message/dist/muse-ui-message.css';

Vue.config.productionTip = false;
Vue.component('happy-scroll', HappyScroll);
Vue.use(ElementUI);
Vue.use(MuseUI);
Vue.use(VueClipboard);
Vue.use(infiniteScroll);
Vue.use(Toast);
Vue.use(Message);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
