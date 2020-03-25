export const trackMixin = {
  methods: {
    toTrack (track) {
      this.$router.push({ name: 'TrackDetail', params: { id: track.id } })
      if (!track.preview_url) { return }
      this.$store.commit('tracks/SET_TRACK', track)
    },
    selectTrack (track) {
      if (!track.preview_url) { return }
      this.$store.commit('tracks/SET_TRACK', track)
    }
  }
}
