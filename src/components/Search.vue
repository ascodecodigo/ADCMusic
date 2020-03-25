<template>
  <section class="section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input is-large"
          v-model="searchQuery"
          @keyup.enter="search"
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
    <p>
      <!-- <small>{{ searchMessage }}</small><br> -->
      <small>{{ results | toLocaleString }}</small>
    </p>
    <div class="columns is-multiline">
      <!-- usar v-for -->
      <div
        v-for="track in tracks"
        :key="track.id"
        class="column is-one-quarters"
      >
        <!-- Componente TrackDetail -->
        <track-detail v-blur="track.preview_url" :track="track"></track-detail>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      searchQuery: "rock",
      results: 0
    };
  },
  computed: {
    ...mapState("tracks", ["tracks", "currentTrack"]),
    searchMessage() {
      return `Found: ${this.results.toLocaleString()} results`;
    }
  },
  filters: {
    toLocaleString(results) {
      return `Found: ${results.toLocaleString()} results`;
    }
  },
  components: {
    TrackDetail: () => import("./TrackDetail")
  },
  created() {
    this.search();
  },
  methods: {
    async search() {
      await this.$store.dispatch("tracks/getTracks", this.searchQuery);
    }
  }
};
</script>
