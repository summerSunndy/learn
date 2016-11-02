// import Vmask from './v-mask/index.vue'
// import Vdialog from './v-dialog/index.vue'

import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
var router = new vueRouter();

router.map({
  '/':{
    name:'index',
    component: require('./index.vue')
  },
  '/dialog':{
    name:'button',
    component: require('./v-dialog.vue')
  }
})

router.start(app,'#root')
