<template>
    <v-mask v-if="hasMask"></v-mask>
	<div class="popover"  @click="hideOnBlur && (show = false)" v-show="show" :transition="maskTransition" @touchmove="!this.scroll && $event.preventDefault()">\
	</div>
</template>

<script>
export default {
	props: {
		hasMask: {
			type: Boolean,
			default: true
		},
		transitonDirection: {
			type: String,
			default: 'Bottom'
		},
		position: {
			type: String,
			default: 'Bottom'
		},
		maskTransition: {
			type: String,
			default: 'vux-fade'
		},
		dialogTransition: {
			type: String,
			default: 'vux-dialog'
		},
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
