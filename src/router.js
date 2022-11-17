import { createRouter, createWebHistory } from 'vue-router'
import i18n from './locales/i18n';

const Client = {
    Root: () => import('./layout/Client.vue'),
    Home: () => import('./view/client/Home.vue'),
}


const routes = [
    {
        path: '/:locale',
        component: Client.Root,
        children: [
            { path: '', component: Client.Home },
        ],
        beforeEnter: (to, from, next) => {
            i18n.global.locale.value = to.params.locale;
            if (["uz", "cl", "ru", "en"].includes(to.params.locale)) return next();
            else return next('uz');
        },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/uz",
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router