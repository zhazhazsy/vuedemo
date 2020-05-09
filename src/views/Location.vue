<template>
	<div class="location">
		<van-cell-group>
		  <van-cell title="打开定位" label="若想使用定位功能,请确保已经打开位置服务并允许软件位置服务以及连接互联网" />
		  <van-cell title="怎么打开权限?" value="" is-link @click="show = true" />
		</van-cell-group>
		<van-overlay :show="show" @click="show = false">
		  <div class="wrapper" @click.stop >
		    <div class="exit" @click="show = false"><img src="../assets/test/exit.png" width="30px" height="30px"/></div>
			<div class="main">
				<van-divider content-position="left" style="color: #ffffff;">打开软件权限设置</van-divider>
				<img src="../assets/test/test01.png" height="60%" width="60%"/>
				<van-divider content-position="left" style="color: #ffffff;">同理将存储权限也打开</van-divider>
			</div>
		  </div>
		</van-overlay>
		<br /><br />
		<van-cell-group>
		  <van-field label="姓名" v-model="name" disabled />
		</van-cell-group>
		<br />
		<van-cell-group>
		  <van-field
		    v-model="message"
		    rows="3"
		    autosize
		    label="备注"
		    type="textarea"
		    placeholder="请输入备注信息..."
		  />
		</van-cell-group>
		<br />
		<van-cell-group>
		  <van-field
		    readonly
		    v-model="value1"
		    left-icon="location-o"
		  />
		</van-cell-group>
		<br />
		<br />
		<van-button @click="clock" size="large" color="linear-gradient(to right, #7FFF00, #7CCD7C)" >打卡</van-button>
		<font color="red">{{info}}</font>
	</div>
</template>

<script>
export default {
  name: "Location",
  data() {
	return {
		active: 5,
		show: false,
		message: "",
		user: "",
		name: "",
		value1: "定位失败，请重新定位",
		info: "",
		pinfo: {
			user: null,
			addr: null,
			remarks: null
		},
	  };
    },
	created() {
		//将当前this赋值给ths
		const ths = this;
		let acode = this.$route.query.name;
		//请求后端数据
		this.axios.get('http://47.113.112.177:8081/user/user?user='+acode).then(function (res){
			console.log(res)
			ths.name = res.data.name
			ths.user = res.data.user
			if(res.data.temp != null && res.data.temp != ""){
				ths.value1 = res.data.temp
			}
		});
	},
	methods: {
	    clock() {
		  this.pinfo.user = this.user;
		  this.pinfo.addr = this.value1;
		  this.pinfo.remarks = this.message;
		  //将当前this赋值给ths
		  const ths = this;
		  //请求后端数据
		  this.axios.post('http://47.113.112.177:8081/clock/clock',this.pinfo).then(function (res){
			  if (res.data==0) {
			  	ths.info = "打卡失败";
			  }else{
				  ths.$router.push("/Clockcomplete");
			  }
	    })
	  },
	},
  }
</script>

<style>
	.wrapper {
	    display: flex;
	    height: 100%;
	  }
	  .main{
		  margin-top: 5.25rem;
		  align-items: center;
		  justify-content: center;
		  height: 100%;
	  }
	  .exit {
		position: absolute;
		top: 10px;
		right: 10px;
	    width: 30px;
	    height: 30px;
	  }
</style>
