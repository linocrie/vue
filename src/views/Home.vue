<template>
  <div class="home">
        <div class="h-100">
            <hello-world msg="YOUR FEET ARE" move-msg="GOING TO" love-msg="LOVE YOU"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped >

.home {
  height: 500px;
  background-image: url("../assets/images/socks.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>