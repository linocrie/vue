<template>
    <button class="btn btn-success" :disabled="disabled" @click="$emit('click')">Add Product</button>
</template>

<script>
export default {
    name: "ProductButton",
    props:{
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        }
    }
}
</script>

<style scoped>

</style>