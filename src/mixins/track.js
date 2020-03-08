export const trackMixin = {
  methods: {
    selectTrack (track) {
      if (!track.preview_url) { return }
      this.$store.commit('SET_TRACK', track)
    },
    toTrack (track) {
      this.$store.commit('SET_TRACK', track)
      this.$router.push({ name: 'TrackDetail', params: { id: track.id } })
    }
  }
}
