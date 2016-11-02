<template>
    <div :class="dialog" v-show="show" @touchmove="!this.scroll && $event.preventDefault()">
        <v-mask v-if="hasMask"></v-mask>
        <div :class="type" :transition="dialogTransition">
            <div class="dialog-title" v-if="hasTitle">
                {{title}}
                <i class="dialig-close" v-if="hasClose"></i>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hasMask: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: ''
        },
        show: {
            type: Boolean,
            default: false
        },
        maskTransition: {
            type: String,
            default: 'vux-fade'
        },
        dialogTransition: {
            type: String,
            default: 'vux-dialog'
        },
        hideOnBlur: Boolean,
        scroll: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        show (val) {
            this.$emit(val ? 'on-show' : 'on-hide')
        }
    }
}
</script>
