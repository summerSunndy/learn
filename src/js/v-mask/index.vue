<template>
	<div class="mask"  @click="hideOnBlur && (show = false)" :transition="maskTransition">
	</div>
</template>

<script>
export default {
	name: 'v-mask',
	props: {
		maskTransition: {
			type: String,
			default: 'vux-fade'
		},
	},
	watch: {
		show (val) {
			this.$emit(val ? 'on-show' : 'on-hide')
		}
	},
	method:{
		hideOnBlur(){
			this.show = false;
		}
	}
}
</script>
