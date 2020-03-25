<template>
  <div v-if="currentTrack && currentTrack.preview_url" class="content">
    <p class="is-128x128">
      <img :src="currentTrack.album.images[0].url" alt="" />
      <p>
          <strong>{{ currentTrack.name }} - {{ currentTrack.artists[0].name }}</strong>
          <br>
          <strong>{{ currentTrack.duration_ms | msToMm }}</strong>
      </p>
      <figure>
          <audio :src="currentTrack.preview_url" autoplay controls></audio>
      </figure>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("tracks", ["currentTrack"])
  }
};
</script>

<style scoped>
img {
    width: 200px;
    border-radius: 50%;
}
</style>
