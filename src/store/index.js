import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN = {
  "DAIWAN-API-TOKEN": "78710-B0810-777C7-C9A85"
}
const VIDEOTOKEN = {
  "DAIWAN-API-TOKEN":"C18BC-4CFC9-1C966-CC490"
}

const API = {
  championList: 'http://lolapi.games-cube.com/champion',
  championDetail: 'http://lolapi.games-cube.com/GetChampionDetail?champion_id=',
  playerSearch: 'http://lolapi.games-cube.com/UserArea?keyword=',
  playerDetail: 'http://lolapi.games-cube.com/UserHotInfo?qquin=',
  getTierQueue: 'http://lolapi.games-cube.com/GetTierQueue?tier=',
  playExtInfo: 'http://lolapi.games-cube.com/UserExtInfo?qquin=',
  combatList: 'http://lolapi.games-cube.com/CombatList?qquin=',
  combatDetail: 'http://lolapi.games-cube.com/GameDetail?qquin=',
  newstVideos: 'http://infoapi.games-cube.com/GetNewstVideos?p=',
  commenterList: 'http://infoapi.games-cube.com/GetAuthors'
}
// playerDetail: http://lolapi.games-cube.com/UserHotInfo?qquin={qquin}&vaid={vaid}
// 段位  http://lolapi.games-cube.com/GetTierQueue?tier={tier}&queue={queue}
// 详细信息  http://lolapi.games-cube.com/UserExtInfo?qquin={qquin}&vaid={vaid}
// 战斗数据  http://lolapi.games-cube.com/CombatList?qquin={qquin}&vaid={vaid}&p={p}
// 单场游戏数据： http://lolapi.games-cube.com/GameDetail?qquin={qquin}&vaid={vaid}&gameid={gameid}
// 最新视频： http://infoapi.games-cube.com/GetNewstVideos?p={p}

const store = new Vuex.Store({
  state: {
    title: '英雄联盟助手',
    championList: [],
    champion: null,
    championDetailBg: '',
    playerSearchResult: [],
    playerDetail: null,
    tierQueue: '',
    tripleKills: 0,
    quadraKills: 0,
    pentaKills: 0,
    godlikeNum: 0,
    killsTotal: 0,
    totalMvps: 0,
    combatList: [],
    combatDetail: null,
    newstVideos: [],
    newstNews: null,
    bannerNews: null
    // showKeybord: false
  },
  mutations: {
    
    set_title(state, val) {
      state.title = val
    }
    // update_show_keybord(state) {
    //   state.showKeybord = !state.showKeybord
    // }
  },
  actions: {
    
  },
  getters: {
    skins (state) {
      var skins = []
      for(var i = 0; i < state.champion.skins.length; i++) {
        let obj = {
          name: state.champion.skins[i].name,
          skinurl: `http://cdn.tgp.qq.com/pallas/images/skins/original/${state.champion.key}-${state.champion.skins[i].id}.jpg`,
          videourl: state.champion.skins[i].displayUrl
        }
        skins.push(obj)
      }
      return skins
    },
    skills (state) {
      var skills = [{
        name: state.champion.passive.name,
        description: state.champion.passive.description,
        imgurl: `http://ossweb-img.qq.com/images/lol/img/passive/${state.champion.passive.image.full}`
      }]
      for(var i = 0; i < state.champion.spells.length; i++) {
        let obj = {
          name: state.champion.spells[i].name,
          description: state.champion.spells[i].tooltip,
          imgurl: `http://ossweb-img.qq.com/images/lol/img/spell/${state.champion.spells[i].id}.png`
        }
        skills.push(obj)
      }
      return skills
    },
    winners (state) {
      return state.combatDetail.gamer_records.slice(0,5)
    },
    losers (state) {
      return state.combatDetail.gamer_records.slice(-5)
    }
  }
})

export default store