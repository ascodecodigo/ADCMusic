
import { searchTrack, getById } from '@/api/track'

export default {
  namespaced: true,
  state: {
    tracks: [],
    currentTrack: {}
  },
  mutations: {
    SET_TRACKS (state, tracks) {
      state.tracks = tracks
    },
    SET_TRACK (state, track) {
      state.currentTrack = track
    }
  },
  actions: {
    getTracks ({ commit }, q) {
      return new Promise(resolve => {
        searchTrack(q)
          .then(data => data.tracks)
          .then(tracks => {
            commit('SET_TRACKS', tracks.items)
            resolve(tracks.total)
          })
      })
    },
    getById ({ commit }, id) {
      return new Promise(resolve => {
        getById(id)
          // .then(res => res.data)
          .then(res => {
            console.log(res)
            commit('SET_TRACK', res)
            resolve()
          })
      })
    }
  }
}
