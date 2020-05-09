<template>
	<div>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<van-loading size="24px" vertical>定位中...</van-loading>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				count:"",//倒计时
			}
		},
		created() {
			const timejump = 1;
			if(!this.timer){
				this.count = timejump ;
				this.show = false;
				this.timer = setInterval(()=>{
				if(this.count > 0 && this.count <= timejump ){
					this.count--;
				}else{
					this.show = true;
					clearInterval(this.timer);
					//获取用户名
					let aCode = [];
					let acode = this.$utils.getUrlKey("user");
					this.timer = null;
					//跳转的页面写在此处
					this.$router.push({path: '/location',query:{name:acode}});
				}
			  },2000)
			}
		},
	};
</script>
	
<style>
</style>
