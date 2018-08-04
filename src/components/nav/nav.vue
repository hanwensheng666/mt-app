<template>
	<div class="nav">
		<router-link class="nav-item" to="/goods">
			商品
			<i class="line"></i>
		</router-link>
		<router-link class="nav-item" to="/ratings">
			评价({{commentNum}})
			<i class="line"></i>
		</router-link>
		<router-link class="nav-item" to="/seller">
			店铺
			<i class="line"></i>
		</router-link>
	</div>
</template>

<script>
	export default{
		props:{
			commentNum:{
				type:Number,
				default:0
			}
		}
	}
</script>

<style>
	.nav{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #e4e4e4;
	}
	.nav-item{
		flex: 1;
		text-align: center;
		font-size: 13px;
		text-decoration: none;
		color: #666;
	}
	/* 选中的样式 */
	.nav .active{
		position: relative;
		color:#ffbb22;
	}
	.nav .active .line{
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 20px;
		height: 2px;
		display:inline-block;
		background: #ffbb22;
	}
</style>