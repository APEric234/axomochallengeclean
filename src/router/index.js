import { createWebHistory, createRouter } from "vue-router"



import Home from "@/components/HelloWorld.vue"
import forT from "@/components/4040.vue"

import setUp from "@/components/setup.vue"
import storeItem from "@/components/store-item.vue"

storeItem
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }, {
        path: '/setup',
        name: "setUp",
        component: setUp,
    }, {
        path: '/storeitem',
        name: "storeItem",
        component: storeItem,
    } ,{
        path: '/makestore',
        name: "forT",
        component: forT,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router