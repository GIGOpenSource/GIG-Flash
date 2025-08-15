<template>
	<view class="comment-page">

		<view class="comment-list">
			<view class="comment-item" v-for="(item,index) in list" :key="index">
				<view class="user-line">
					<view class="user">
						<up-avatar src="3"></up-avatar>
						<view class="info">
							<view class="name">路过人间</view>
							<view class="nums">{{item.name}}</view>
						</view>
					</view>
					<view class="now" @click="give(index)">
					<up-icon  :name="item.flag?'heart-fill':'heart'" :color="item.flag?'#ff0000':'#D9D9D9'" size="22" ></up-icon>
						<text style="margin-left: 10rpx;">{{item.givenum}}</text>
					</view>
				</view>

				<view class="des">
					{{item.con}}
				</view>
			</view>
		</view>

	</view>
</template>

<script setup>
	const props = defineProps({
		list:{
			type:Array,
			default: []
		}
	})
	const give = (index) => {
		let list = props.list
		 list[index].flag = !list[index].flag
		 if(list[index].flag){
		 			 list[index].givenum += 1
		 } else{
		 			 list[index].givenum -= 1
		 }
	}
</script>

<style lang="scss" scoped>
	.comment-page {
		padding: 20rpx;
	}
	
	.comment-item{
		padding-bottom: 40rpx;
		border-bottom: 2rpx solid rgba(255, 255, 255, .1);
		margin-bottom: 40rpx;
	}

	.user-line {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.user {
			display: flex;
			align-items: center;

			.info {
				margin-left: 10rpx;

				.name {
					font-size: 15px;
				}

				.nums {
					font-size: 15px;
					color: rgba(255, 255, 255, 0.6);
				}
			}

		}

		.now {
			font-size: 11px;
			display: flex;
			align-items: center;
		}
	}

	.des {
		font-size: 17px;
		margin-top: 20rpx;
	}
	

</style>