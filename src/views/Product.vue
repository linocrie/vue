<template>
    <div class="product">
        <h1>Socks</h1>
        <div class="sock-product d-flex justify-content-between">
            <div class="d-flex justify-content-around">
                <product-image :src="productImage"/>
                <div class="product-info">
                    <ProductInfo :title="product.title" :shipping="shipping"/>
                    <ProductVariance existance="In Stock"/>
                    <div>
                        <color-radio v-for="color in colorsList" :key="color" v-model="selected_color" :color="color"/>
                    </div>
                    <p>
                        <span v-if="inStock">In Stock</span>
                        <span v-else>Out Of Stock</span>
                    </p>
                    <div>
                        <product-button :disabled="!inStock" @click="addProduct"/>
                    </div>
                </div>
            </div>
            <div class="review">
                <h3>Write Your Review Here</h3>
                <product-review/>
            </div>
        </div>
    </div>
</template>

<script>

import ProductInfo from '../components/ProductInfo'
import ProductImage from "../components/ProductImage";
import ColorRadio from "../components/ColorRadio";
import ProductButton from "../components/ProductButton";
import ProductReview from "../components/ProductReview";
// import img from '@/assets/images/vmSocks-green.jpg'

export default {
    name: "Product",
    components: {
        ProductReview,
        ProductButton,
        ColorRadio,
        ProductImage,
        ProductInfo,
    },
    created() {
        console.log(this.colorsList);
    },
    data() {
        return {
            product: {
                title: 'Vue Mastery Socks',
                premium: false,
                colors: {
                    green: 10,
                    blue: 0,
                },
                images: [
                    { color: 'green', src: require('../assets/images/vmSocks-green.jpg'), },
                    { color: 'blue', src: require('../assets/images/vmSocks-blue.jpg'), },
                ],
            },
            selected_color: 'green',
            cart: 0,
        }
    },
    methods: {
        addProduct() {
          this.$store.commit('addProductInCart', this.product);
        },
    },
    computed: {
        shipping() {
            if (this.product.premium) {
                return 'Free';
            } else {
                return 2.99 + "$";
            }
        },
        productImage() {
            return this.product.images.find(img => img.color === this.selected_color).src;
        },
        colorsList() {
            return Object.keys(this.product.colors);
        },
        inStock() {
            return this.product.colors[this.selected_color] > 0;
        },
    }
}
</script>

<style scoped>
.sock-product {
    display: flex;
}
</style>