<template>
    <label>
        <input type="radio" name="product_color" :value="color" :checked="value === color" @change="$emit('change', color)" style="display: none">
        <span class="color-item" :style="itemStyle" @mouseenter="$emit('change', color)"></span>
    </label>
</template>
<style lang="scss">
.color-item {
    width: 40px;
    height: 40px;
    display: inline-flex;
    border: 1px solid #ececec;
    border-radius: 50%;
    margin: 0 2.5px 5px 2.5px;
}
</style>
<script>
export default {
    name: "ColorRadio",
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        value: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        }
    },
    computed: {
        itemStyle() {
            return {
                backgroundColor: this.color === 'green' ? '#11d711' : this.color === 'blue' ? '#0563c8' : '#fff',
            }
        },
    }
}
</script>