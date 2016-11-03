<template>
<div>
    <vMask v-if="hasMask"></vMask>
    <div class="dialog" v-show="show" @touchmove="!this.scroll && $event.preventDefault()">
        <div :class="type" :transition="dialogTransition">
            <div class="dialog-title" v-if="hasTitle">
                {{title}}
                <i class="dialig-close" v-if="hasClose"></i>
            </div>
            <slot></slot>
        </div>
    </div>
</div>
</template>

<script>
import vMask from 'js/v-mask'
export default {
    name:'v-dialog',
    components:{
        vMask
    },
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
            default: true
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
        },
        title:{
            type: String,
            default: 'Title'
        },
        hasClose:{
            type: Boolean,
            default: false
        },
        hasTitle: {
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
