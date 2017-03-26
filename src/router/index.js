import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Player from '@/components/Player'
import News from '@/components/News'
import Video from '@/components/Video'
import ChampionList from '@/components/ChampionList'
import PlayerDetail from '@/components/PlayerDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/',
    	name: 'index',
    	component: Index,
    	children:[{
    		path:'news/:id',
    		name:'news',
    		component:News
    	},
	    {
	    	path: 'player/:id',
	    	name: 'player',
	    	component: Player
	    }
	    ,
	    {
	    	path: 'championList/:id',
	    	name: 'championList',
	    	component: ChampionList
	    },
	    {
	    	path: 'video/:id',
	    	name: 'video',
	    	component: Video
	    }
    	]
    },
    {
    	path: '/playerDetail/:qquin/:vaid',
    	name: 'playerDetail',
    	component: PlayerDetail
    }
  ]
})
