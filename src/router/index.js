import VueRouter from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home';
import Detail from '../components/Detail.vue';

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/home/detail',
            component: Detail
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/home/detail') {
        document.querySelector("html").style.overflow = 'hidden';
        next();
    } else if (to.path !== '/home/detail') {
        document.querySelector("html").style.overflow = "auto";
        next();
    }
})

export default router;