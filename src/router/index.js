import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:groupId(\\d+)_:postId(\\d+)',
    name: 'PostComments',
    component: Comments,
    props: true
  },
  {
    path: '/:groupId',
    name: 'Posts',
    component: Home,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
