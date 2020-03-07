<template>
  <nav class="navbar is-right is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="https://imagesadc.s3.amazonaws.com/logos/logohor_bco2.png"
          width="auto" height="auto">
        <span class="nav-title"><strong>AscoMusic</strong></span>
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
        <a class="navbar-item">Home</a>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">Logout</a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>