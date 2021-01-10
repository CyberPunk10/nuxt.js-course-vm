import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'

import DateFilter from '@/common/date.filter'
import SideBar from '@/components/SidebarPlugin'

Vue.use(Element, { locale })
Vue.use(SideBar)
Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DateFilter)
