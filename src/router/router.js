import Vue from 'vue'
import Router from 'vue-router'
import LayoutContainer from "@/pages/layoutContainer/LayoutContainer";

Vue.use(Router)
const myRouter = new Router({
    routes: [
        {
        path: '',
        redirected: '/login',
        component: () => import("../pages/login/login"),
    },
        {
            path: '/login',
            component: () => import("../pages/login/login"),
            meta: {
                title: 'login'
            }
        },
        {
            path: '/mainPage',
            name:'LayoutContainer',
            meta: {
                title: 'mainPage'
            },
            component:LayoutContainer,
            children:[
                {
                    path: "",
                    redirect:"subject"
                },
                {
                    name:'subject',
                    path:'subject',
                    component:()=>import("../components/subject"),
                    meta:{
                        title:"选择科目",
                        keepAlive:true
                    }
                },
                {
                    name:'questionBank',
                    path:'questionBank',
                    component:()=>import("../components/questionBank"),
                    meta:{
                        title:"题库",
                        keepAlive:true
                    }
                },
                {
                    name:'formExam',
                    path:'formExam',
                    component:()=>import("../components/formExam"),
                    meta:{
                        title:"组卷"
                    }
                },
                {
                    name:'personalInfo',
                    path:'personalInfo',
                    component:()=>import("../components/personalInfo"),
                    meta:{
                        title:"个人中心"
                    }
                },
            ]
        }
    ]
})

myRouter.beforeEach((to, from, next) =>{
    next()
})
export default myRouter