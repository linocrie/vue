<template>
<div class="info">
  <h2>{{ title }}</h2>
  <p>Shipping: {{ shipping }}</p>
  <ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "ProductDescription",
  props:{
    title: String,
    shipping: String,
    description: String,
  },
  data () {
    return {
      details:["80% Cotton" , "20% Polyester" , "Gender-neutral"],
    }
  },

}
</script>
