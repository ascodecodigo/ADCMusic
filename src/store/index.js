import Vue from 'vue'
import Vuex from 'vuex'
import tracks from './modules/tracks'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    tracks: state => state.tracks.tracks
  },
  modules: {
    tracks,
    users
  }
})
