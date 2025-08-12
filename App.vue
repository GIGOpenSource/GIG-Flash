<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-plus/index.scss";
	/*每个页面公共css */

	page {
		--status-bar-height: 25px;
		--white-op-16: rgba(255,255,255, 0.16);
		/* 默认值兜底 */
		background-color: #1a1921;
		color: #fff;
	}

	/* #ifdef APP */
	.navbar:before {
		display: block;
		content: "";
		height: var(--status-bar-height);
		width: 100%;
	}

	/* #endif */
</style>