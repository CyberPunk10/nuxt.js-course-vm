import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
// import Vuelidate from 'vuelidate'

import DateFilter from '@/common/date.filter'

Vue.use(Element, { locale })
// Vue.use(Vuelidate)
Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DateFilter)


// export const methods = {
//   getDynamicFile(name) {
//     return require(`@/${name}`)
//   },
// }
// Vue.mixin({methods})
