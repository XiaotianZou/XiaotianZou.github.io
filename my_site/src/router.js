import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from 'HelloWorld'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: HelloWorld
        },
        {
            path: "/my_site",
            name: "Home",
            component: HelloWorld
        },
        {
            path: "/resume_en",
            name: "resume_en",
            component: resume_en
        },
        {
            path: "/resume_cn",
            name: "resume_en",
            component: resume_cn
        }
    ]
})