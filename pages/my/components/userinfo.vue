<template>
	<view>
		<!-- 头部个人信息 -->
		<view class="top">
			<up-avatar :src="userinfo.avatar" size="60"></up-avatar>
			<view class="right">
				<view class="name">
					<text>{{userinfo.nickname}}</text>
					<text class="vip">VIP</text>
				</view>
				<view class="phone">{{userinfo.phone}}</view>
				<view class="phone">{{userinfo.bio || '暂无'}}</view>
			</view>
			<view class="" v-if="isFollow">关注</view>
		</view>
		<!-- 数量 -->
		<view class="num">
			<view class="">
				<text>关注 :</text>
				<text>{{userinfo.following_count || 0}}</text>
			</view>
			<view class="">
				<text>粉丝 :</text>
				<text>{{userinfo.follower_count || 0}}</text>
			</view>
			<view class="">
				<text>点赞 :</text>
				<text>{{userinfo.like_count || 0}}</text>
			</view>
		</view>
	</view>
</template>
<script setup>
import { watchEffect ,ref} from 'vue'
import { userinfoStore } from '@/store/userinfos'
import { storeToRefs } from 'pinia'
const store = userinfoStore()
const { userinfo } = storeToRefs(store)
const props = defineProps({
		isFollow: {
			type: Boolean,
			default: false
		},
	})
watchEffect(() => {
	uni.setStorageSync('userinfo',{
		id:1,
		username:'admin'
	})
  if (!userinfo.value?.id) {
    store.getUserinfo({id: uni.getStorageSync('userinfo').id})
  }
})
</script>
<style lang="scss" scoped>
	.top {
		display: flex;
		align-items: center;

		.right {
			margin-left: 20rpx;
			line-height: 50rpx;
			width: 68%;

			.name {
				display: flex;
				align-items: center;
				margin-bottom: 5rpx;

				.vip {
					background: linear-gradient(270deg, #7D7256 0%, #ECE6D5 100%);
					display: block;
					width: 75rpx;
					height: 40rpx;
					text-align: center;
					margin-left: 10rpx;
					border-radius: 60rpx;
					font-size: 26rpx;
					line-height: 40rpx;
				}
			}

			.phone {
				color: rgba(255, 255, 255, .6);
				font-size: 28rpx;
			}

		}
	}

	.num {
		display: flex;
		margin-top: 20rpx;
		justify-content: space-between;

		view {
			text:nth-of-type(1) {
				margin-right: 15rpx;
				color: rgba(255, 255, 255, .8);

			}
		}
	}
</style>