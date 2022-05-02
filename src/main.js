import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import {Button,Radio,RadioGroup,Container,Main,Header,Aside,Menu,Submenu
  ,MenuItemGroup,MenuItem,Dropdown,DropdownItem,DropdownMenu
  ,Row,Card,Col,Form,FormItem,Input,Select,Option,Switch,DatePicker
  ,Dialog,Table,TableColumn,Pagination,MessageBox,Message,Descriptions,
  DescriptionsItem,Tag
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../router'
import store from '../store'


axios.get('/',function(){});
axios.post('/',function(){});

Vue.prototype.$http = axios;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false


Vue.use(Button)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tag)

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')