<template>
  <div class="hello h-100">
    <div class="items d-flex justify-content-center align-items-start h-100 position-relative flex-column">
        <h1>{{ msg }}</h1>
        <h1>{{ moveMsg }}</h1>
        <h1 class="text-danger">{{ loveMsg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    moveMsg: String,
    loveMsg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
    font-size: 50px;
}
</style>
