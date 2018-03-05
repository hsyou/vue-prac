import Vue from 'vue'
import Router from 'vue-router'
import BoardList from '@/components/board/BoardList'
import BoardDetail from '@/components/board/BoardDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board',
      name: 'BoardList',
      component: BoardList
    },
    {
      path: '/board/:boardId',
      name: 'BoardDetail',
      component: BoardDetail,
      props: true
    }
  ],
  mode: 'history'
})
