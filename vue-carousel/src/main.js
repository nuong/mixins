import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

import App from './App.vue'

Vue.use(Vue2TouchEvents)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
