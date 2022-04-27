import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import VuePithyProgress from 'vue-pithy-progress'
import 'vue-pithy-progress/dist/vue-pithy-progress.css'
import VueCarousel from 'vue-carousel';

/* import specific icons */
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faPhoneAlt, faPersonChalkboard, faTwitter, faFacebookF, faInstagram)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VuePithyProgress)
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

