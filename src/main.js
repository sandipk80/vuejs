// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
import VueYouTubeEmbed from 'vue-youtube-embed'
import VModal from 'vue-js-modal'
var jwplayer =  require('expose-loader?LibraryName!./jwplayer.js');


Vue.config.productionTip = false

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

Vue.use(VueResource);
Vue.use(VueYouTubeEmbed);
Vue.use(VModal);

Vue.use(jwplayer);

/* eslint-disable no-new */
new Vue(
	{
		el: '#app',
		router,
		template: '<App/>',
		components: { App }
	}
)


/*var channels = new Vue({
  el: '#channels-list',
  data: {
    items: [
      { id: '1', url: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8' },
      { id: '2', url: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' }
    ]
  }
})*/