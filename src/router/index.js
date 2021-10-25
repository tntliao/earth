import VueRouter from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
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