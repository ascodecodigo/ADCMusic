<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="column is-4 is-offset-4">
        <h3 class="title">Login</h3>
        <p class="subtitle">Please login to proceed.</p>
        <div class="box">
          <main>
            <form @submit.prevent="login">
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    v-model="email"
                    placeholder="Email"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <!-- <button @click.prevent="login()" type="submit" class="button is-info">Login</button> -->
                 <button type="submit" class="button is-info">Login</button>
                  <a href="" class="button is-success">Login with Spotify</a>
                </p>
              </div>
            </form>
          </main>
        </div>
        <p>
          <a href="../">Sign Up</a> &nbsp;·&nbsp;
          <a href="../">Forgot Password</a> &nbsp;·&nbsp;
          <a href="../">Need Help?</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from "@/api/user";
import { setToken } from "@/utils/cookies";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      login(this.email, this.password).then(res => {
        console.log(res)
        setToken(res.access_token)
        this.$router.push("/");
      })
    }
  }
};
</script>
