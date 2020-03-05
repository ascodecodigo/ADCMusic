<template>
  <section class="section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-large"
          v-model="searchQuery"
          type="text"
          placeholder="Search songs..."
        />
      </div>
      <p class="control">
        <a class="button is-large is-info" @click="search">
          <span class="icon is-large">
            <i class="fas fa-search"></i>
          </span>
        </a>
      </p>
      <p class="control">
        <a class="button is-large is-danger">
          <span class="icon is-large">
            <i class="fas fa-times"></i>
          </span>
        </a>
      </p>
    </div>
    <div class="columns is-multiline">
      <!-- user un v-for -->
      <div class="column is-one-quarters">
        <!-- Componente TrackDetail -->
      </div>
    </div>
  </section>
</template>

<script>
import { searchTrack } from '@/api/track'
export default {
  data() {
    return {
      searchQuery: "",
      tracks: []
    }
  },
  methods: {
    search() {
      searchTrack(this.searchQuery)
      .then(res => res.data.tracks.items) // return ..
      .then(tracks => {
        console.log(tracks)
        this.tracks = tracks
      })
    }
  }
}
</script>
