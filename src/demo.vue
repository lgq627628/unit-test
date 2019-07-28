<template>
    <div class="demo" :class="isError ? 'demo--error' : ''" @click="$emit('click')">
        <span class="text" :style="`opacity: ${opacity}`" :data-msg="msg">哈哈哈</span>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Demo',
    props: {
        msg: {
            type: String,
            default: ''
        },
        isError: {
            type: Boolean,
            default: false
        },
        opacity: {
            type: [String, Number],
            default: 1
        }
    }
}
</script>