<template>
  <div class="home">
    <!-- <section class="hero is-success is-medium">
      <div class="hero-body">
        <div class="container has-text-centered"></div>
      </div>
    </section> -->
    <hero>
      <h1 class="title">ADCMusic</h1>
      <h2 class="subtitle">Canciones que estan Vue-nisimas!!</h2>
      <Player />
    </hero>
    <Search />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Hero: () => import("@/components/Hero"),
    Search: () => import("@/components/Search"),
    Player: () => import("@/components/Player")
  }
};
</script>
