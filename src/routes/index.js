import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Course from '../components/Course.vue'
import Laravel from '../components/Laravel.vue'
import Php from '../components/Php.vue'
import Javascript from '../components/Javascript.vue'
import Vuejs from '../components/Vuejs.vue'

function myGaurd(to,from,next)
{
    if(localStorage.getItem('uid')!=undefined)
    {
        next();
    }
    else
    {
        alert("LOGIN FIRST");
    }
}

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/about',
            name:'About',
            component:About
        },
        {
            path:'/course',
            name:'course',
            beforeEnter:myGaurd,
            component:Course,
            children:[
                {path:'php',name:'php',component:Php},
                {path:'vuejs',component:Vuejs},
                {path:'laravel',component:Laravel},
                {path:'js',component:Javascript},
            ]
            
        },
        {
            path:'/reset',
            redirect:'/course'
        },
        {
            path:'/phpcourse',
            redirect:{
                name:'php'
            }
        },
        {
            path:'/aliass',
            component:Vuejs,
            alias:'/Vuejs'
        },

    ]
})