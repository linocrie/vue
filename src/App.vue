<template>
  <div id="app">
    <div class="nav-bar"></div>
    <nav-bar/>
    <router-view/>
    <div class="footer">
      <div class="footer-side">
          <h2>Choose Your Color</h2>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
export default {
    components: {NavBar}
}
</script>