import {createRouter, createWebHistory} from "vue-router";

import Home from '../view/Home.vue';
import About from '../view/About.vue';
import NotFound from '../view/404.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: 'About'
        }
    },
    {
        path: '/:catchAll(.*)',
        component: NotFound,
        meta: {
            title: 'Not Found'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
