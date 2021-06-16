<template>
  <div class="images">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name: "ProductImage",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
  .images img{
    width: 200px;
  }
</style>