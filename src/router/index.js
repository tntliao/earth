import VueRouter from "vue-router";
import Login from '../components/Login.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        }
    ]
})