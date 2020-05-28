<template>
	<div style="background-color: #ffffff;">
		<van-nav-bar
		  left-text="返回"
		  left-arrow
		  title="使用须知"
		  fixed
		  @click-left="onClickLeft"
		/>
		<br />
		<br />
		<br />
		<van-skeleton title :row="30" :loading="loading" style="background-color: #ffffff;">
		  <div style="text-align: left;background-color: #ffffff;">
			  <h2 style="margin: 1.5rem;">用户须知</h2>
			  <p>
				  本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、
				  更有个性化的服务，本应用会按照隐私权政策的规定使用和披露您的个人信息。
				  但本应用将以高度的勤勉、审慎义务对待这些信息。
				  在未征得您事先许可的情况下，本应用不会将这些信息对外披露或向第三方提供。
			  </p>
			  
			  <h4 style="margin-left: 1.5rem;">1. 须知</h4>
			  <p>(a) 本软件并未开放注册，并无要求提供任何个人信息；</p>
			  <p>(b) 在您使用本应用网络服务，本应用会自动接收您的设备信息，但不会上传任何您的数据，所有数据只是暂时引用。</p>
			  
			  <h4 style="margin-left: 1.5rem;">2. 信息使用</h4>
			  <p>(a) 本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息;</p>
			  <p>(b) 本应用亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。</p>
			  
			  <h4 style="margin-left: 1.5rem;">3. 信息披露</h4>
			  <p> (a)如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；</p>
			  <p> (b)经您事先同意，向第三方披露。</p>
			  
			  <h4 style="margin-left: 1.5rem;">4. 信息存储和交换</h4>
			  <p>本应用收集的有关您的信息和资料将保存在本应用的服务器上，这些信息和资料可能传送至您所在国家、地区或本应用收集信息和资料所在地的境外并在境外被访问、存储和展示。</p>
			  
			  <h4 style="margin-left: 1.5rem;">5. Cookie的使用</h4>
			  <p>(a) 在您未拒绝接受cookies的情况下，本应用会在您的设备上设定或取用cookies ，以便您能登录或使用依赖于cookies的本应用平台服务或功能。本应用使用cookies可为您提供更加周到的个性化服务。</p>
			  <p>(b) 您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的本应用网络服务或功能。</p>
			  
			  <h4 style="margin-left: 1.5rem;">6. 信息安全</h4>
			  <p>(a) 请您注意在信息网络上不存在“完善的安全措施”。</p>
			  <p>(b) 如您发现自己的个人信息泄密，尤其是本应用键入的信息发生泄露，请您立即联络本作者，以便本应用采取相应措施。</p>
			  
		  </div>
		</van-skeleton>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			  loading: true,
			};
		},
		methods: {
			onClickLeft() {
			  this.$router.push("/Setting");
			},
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
					this.loading = false;
				}
			  },2000)
			}
		},
	}
</script>

<style>
	p{
		text-indent:2em;
	}
</style>
