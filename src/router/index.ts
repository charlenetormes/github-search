import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';
import Repository from '../views/Repository.vue';

const url = import.meta.env.BASE_URL;

const routes = [
    {
        path: '/users',
        name: 'Users',
        component: Users,
    },
    {
        path: '/repository',
        name: 'Repository',
        component: Repository,
    },
    {
        path: '/',
        redirect: '/users',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
