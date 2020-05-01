<template>
	<div>
		<van-notice-bar mode="closeable">
		  创新是引领发展的第一动力，是建设现代化经济体系的战略支撑。我国经济
		  已由高速增长阶段转向高质量发展阶段，对推动大众创业万众创新提出了新的更
		  高要求。而在疫情攻坚战尚未结束之时，大学生应充分发挥积极作用，提升专业
		  技能素养，积累动力。
		</van-notice-bar>
		<van-cell-group>
		  <van-cell title="姓名:" :value="userinfo.name" />
		  <van-cell title="职位:" :value="userinfo.position" />
		  <van-cell title="电话:" is-link :value="userinfo.phone" />
		</van-cell-group>
		<br />
		<van-cell-group>
		  <van-cell title="关于我们" is-link />
		  <van-cell title="使用须知" is-link />
		  <van-cell title="反馈建议" is-link />
		</van-cell-group>
	</div>
</template>

<script>
	export default {
	  name: "Location",
	  data() {
		  return{
			  userid: '',
			  userinfo: {
				  name:null,
				  position:null,
				  phone:null,
				  sex:null
			  },
		  }
	    },
	  created() {
		  this.userid = sessionStorage.getItem("user");
		  const ths = this;
		  //请求后端数据
		  this.axios.get('http://47.113.112.177:8081/user/user?user='+this.userid).then(function (res){
		  	console.log(res)
		  	ths.userinfo = res.data
		  })
		},
	}
</script>

<style>
</style>
