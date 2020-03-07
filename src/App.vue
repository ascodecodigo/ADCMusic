<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar/>

    <!-- Dynamic routes based on url -->
    <router-view/>

     <!-- Footer -->
     <Footer/>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('@/layout/Navbar'),
    Footer: () => import('@/layout/Footer')
  }
}
</script>
