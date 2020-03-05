<template>
  <div class="home">
    <section class="hero is-success is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">ADCMusic</h1>
          <h2 class="subtitle">Canciones que estan Vue-nisimas!!</h2>
        </div>
      </div>
    </section>
    <Search/>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    Search: () => import('@/components/Search')
  }
}
</script>
