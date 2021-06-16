<template>
    <div>
        <div class="input-group mb-3">
            <div class="d-flex flex-column w-50">
                <strong class="text-start">Name</strong>
                <input v-model="review.name" type="text" class="form-control">
            </div>
        </div>
        <div class="input-group mb-3">
            <div class="d-flex flex-column">
                <strong class="text-start">Review</strong>
                <textarea name="text" v-model="review.text" class="form-control"></textarea>
            </div>
        </div>
        <div class="input-group mb-3">
            <div class="d-flex flex-column text-left">
                <strong class="text-start">Rating</strong>
                <select name="rate" id="" v-model="review.rating" class="form-select">
                    <option v-for="i in 5" :value="i">{{ i }}</option>
                </select>
            </div>
        </div>
        <button @click="send" class="btn btn-success">Send</button>
    </div>
</template>

<script>
export default {
    name: "ProductReview",
    data() {
        return {
            review: {
                name: '',
                text: '',
                rating: 5,
            },
        }
    },
    methods: {
        send() {
            console.log(this.review);
        }
    }
}
</script>

<style scoped>

</style>