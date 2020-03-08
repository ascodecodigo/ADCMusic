<template>
  <section class="section">
    <!-- importar banner -->
    <track-detail :track="track"></track-detail>
  </section>
</template>

<script>
export default {
  components: {
    TrackDetail: () => import("@/components/TrackDetail")
  },
  created() {
    console.log(this.$route.params.id);
  },
  computed: {
    track() {
      return this.$store.state.currentTrack;
    }
  }
};
</script>
