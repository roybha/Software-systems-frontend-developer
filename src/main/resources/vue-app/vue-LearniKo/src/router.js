import { createRouter, createWebHistory } from "vue-router"
import MainPage from "./pages/MainPage.vue";
import Feedback from "./pages/Feedback.vue";
import Themes from "./pages/Themes.vue"

const routes = [
    { path: '/', component: MainPage, name: "Main"},
    { path: '/feedback', component: Feedback, name: "Feedback" },
    { path: '/themes', component: Themes, name: "Themes" },
]

export const router =  createRouter({
    routes,
    history: createWebHistory()
});
