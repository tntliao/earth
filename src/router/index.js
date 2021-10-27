import VueRouter from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home';

export default new VueRouter({
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
            path: '/',
            redirect: '/login'
        }
    ]
})