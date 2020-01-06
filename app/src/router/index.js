import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Topic from '../views/Topic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/topic/:id',
    name: 'topic',
    component: Topic
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
