<template>
  <!-- <header>
    <Navbar />
  </header> -->
  <main class="pokemon">
    <router-view />
  </main>
   <!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.pokemon{
  background-image: url(https://cdn-icons-png.flaticon.com/512/1033/1033083.png);
  background-size: 70%;
  background-position: right;
  background-repeat: no-repeat;


}
footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
