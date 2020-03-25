<template>
    <section v-if="track.name" class="section">
      <track-card :track="track"></track-card>
    </section>
</template>

<script>
export default {
  computed: {
    track () {
      return this.$store.state.tracks.currentTrack
    }
  },
  created () {
    if (this.track.name) { return }
    this.$store.dispatch('tracks/getById', this.$route.params.id)
  },
  components: {
    TrackCard: () => import('@/components/TrackDetail')
  }
}
</script>
