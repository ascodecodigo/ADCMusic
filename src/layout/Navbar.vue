<template>
  <nav class="navbar is-right is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/logos_adc.png"
          width="auto" height="auto">
        <!-- <span class="nav-title"><strong>AscoMusic</strong></span> -->
      </a>
      <a class="navbar-burger burger is-active" role="button" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navbarBasicExample">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <router-link to="/" tag="a" active-class="is-active" class="navbar-item">Home</router-link>
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/login" tag="a" class="button is-danger">Logout</router-link>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>