<template>
	<div>
		<van-swipe-cell>
		  <van-contact-card type="edit" :name="name" :tel="tel" :editable="false" />
		  <template #right>
		    <van-button square type="danger" class="button1" text="删除" />
		    <van-button square type="primary" class="button2" text="收藏" />
		  </template>
		</van-swipe-cell>
	</div>
</template>

<script>
	export default {
		name: "contacts",
		data() {
			return {
				name: "李四",
				tel: "13200011121"
			}
		},
		created() {
			  this.zhazha.name = this.name;
			}
	}
	
</script>

<style>
	  .button1,.button2 {
	    height: 100%;
	  }
</style>
