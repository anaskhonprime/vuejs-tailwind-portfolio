import { createWebHistory, createRouter } from 'vue-router';

import Home from '../components/Home.vue';
import About from '../discover/AboutPage.vue';
import Projects from '../discover/ProjectPage.vue';
import Blog from '../discover/BlogPage.vue';
import Contact from '../components/Contact.vue';
import Allblogs from '../components/Allblogs.vue';
import SingleProject from "../components/SingleProject.vue";

import PageNotFound from "../components/PageNotFound.vue";


import Login from '../firebase/Login.vue';
import Signup from '../firebase/Signup.vue';
import Dashboard from '../firebase/Dashboard.vue';
import Upload from "../firebase/Upload.vue";



const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/projects",
        component: Projects,
    },
    {
        path: "/blog",
        component: Blog,
    },
    {
        path: "/contact",
        component: Contact,
    },
    {
        path: "/blogs",
        component: Allblogs,
    },
    {
        path: "/singleproject/:id",
        component: SingleProject,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/dashboard",
        component: Dashboard,
    },
    {
        path: "/upload",
        component: Upload,
    },

    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
];





const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    linkActiveClass: 'vue-school-active-link',

});

export default router;