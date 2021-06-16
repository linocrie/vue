<template>
    <div id="nav">
        <img src="../assets/logo.jpg" alt="logo" class="logo">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/product">Products</router-link>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/cart">Cart ({{ cartProductsCount }})</router-link>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    computed: {
        cartProductsCount() {
            return this.$store.getters.cartProducts.length;
        }
    },
}
</script>