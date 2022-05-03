import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'Main',
        component:() => import('../views/Main.vue'),
        children:[
            {
                path:'/home',
                name:'home',
                component:() => import('../views/home/home.vue')
            },
            {
                path:'/User',
                name:'User',
                component:() => import('../views/User/User.vue')
            },
            {
                path:'/getgame',
                name:'getgame',
                component:() => import('../views/getgame/getgame.vue')
            },
            {
                path:'/mysetgame',
                name:'mysetgame',
                component:() => import('../views/mysetgame/mysetgame.vue')
            },
            {
                path:'/mygetgame',
                name:'mygetgame',
                component:() => import('../views/mygetgame/mygetgame.vue')
            },
            {
                path:'/usermessage',
                name:'usermessage',
                component:() => import('../views/usermessage/usermessage.vue')
            },
            {
                path:'/orderstatus',
                name:'orderstatus',
                component:() => import('../views/orderstatus/orderstatus.vue')
            },
            {
                path:'/mymoney',
                name:'mymoney',
                component:() => import('../views/mymoney/mymoney.vue')
            },
        ],
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/login/login')
    }
]


const router = new VueRouter({
    mode:'history',
    routes
})

export default router