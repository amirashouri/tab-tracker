import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/Register'
import login from '@/components/login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'edit-song',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
