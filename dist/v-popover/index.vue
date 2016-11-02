<template>
	<div class="poperover"  @click="hideOnBlur && (show = false)" v-show="show" :transition="maskTransition" @touchmove="!this.scroll && $event.preventDefault()">\
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

<style lang="scss">

</style>
