<template>
	<div>
		<van-nav-bar
		  title="工作安排"
		  left-text=""
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<van-swipe style="height: 150px;" :autoplay="3000" indicator-color="white" vertical>
		  <van-swipe-item class="lun1">
		  	<img src="../assets/lunbo/img001.png" style="width: 100%;" />
		  </van-swipe-item>
		  <van-swipe-item class="lun2">
		  	<img src="../assets/lunbo/img002.png" style="width: 100%;" />
		  </van-swipe-item>
		  <van-swipe-item class="lun3">
		  	<img src="../assets/lunbo/img003.png" style="width: 100%;" />
		  </van-swipe-item>
		  <van-swipe-item class="lun4">
		  	<img src="../assets/lunbo/img004.png" style="width: 100%;" />
		  </van-swipe-item>
		</van-swipe>
		<van-cell-group>
		  <van-field label="姓名:" :value="tack.name" disabled />
		  <van-field
		    v-model="message"
		    rows="3"
		    autosize
		    label="任务内容"
		    type="textarea"
		    placeholder="请输入任务内容"
		    show-word-limit
		  />
		</van-cell-group>
		<van-dropdown-menu>
			<van-dropdown-item v-model="value" :title="'任务执行时间:'+newdate" ref="item" >
				<van-datetime-picker
				  v-model="currentDate"
				  type="date"
				  :min-date="minDate"
				  :max-date="maxDate"
				  @cancel="cancle"
				  @confirm="confirm"
				/>
			</van-dropdown-item>
		</van-dropdown-menu>
		<br />
		<van-button @click="arrange" size="large" color="linear-gradient(to right, #7FFF00, #7CCD7C)" >安排</van-button>
	</div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
	  return {
		minDate: new Date(),
		maxDate: new Date(2022, 10, 1),
		currentDate: new Date(),
		value: 0,
		tack: {},
		message: "",
		newdate: "",
		info: {
			boss: "",
			loser: "",
			content: "",
			time: ""
		},
	  };
    },
  methods: {
    onClickLeft() {
      this.$router.push({path: '/Admin'});
    },
	cancle(){
		//取消按钮
		this.$refs.item.toggle();
	},
	confirm(value){
		//确定按钮
		//获取了当前日期
		let date = new Date(value);
		let y = date.getFullYear();
		let MM = date.getMonth() + 1;
		MM = MM < 10 ? "0" + MM : MM;
		let d = date.getDate();
		d = d < 10 ? "0" + d : d;
		this.newdate = y+"-"+MM+"-"+d;
		this.$refs.item.toggle();
	},
	arrange(){
		this.info.boss = "admin";
		this.info.loser = this.$route.query.name;
		this.info.content = this.message;
		this.info.time = this.newdate;
		
		const ths = this;
		  //请求后端数据
		  this.axios.post('http://47.113.112.177:8081/task/insertTask',this.info).then(function (res){
			  alert("安排任务成功");
			  ths.$router.push({path: '/Viewtasks',query:{user:ths.$route.query.name}});
		})
	},
  },
  created() {
	  let date = new Date();
	  let y = date.getFullYear();
	  let MM = date.getMonth() + 1;
	  MM = MM < 10 ? "0" + MM : MM;
	  let d = date.getDate();
	  d = d < 10 ? "0" + d : d;
	  this.newdate = y+"-"+MM+"-"+d;
	  const ths = this;
	  this.axios.get('http://47.113.112.177:8081/user/user?user='+this.$route.query.name).then(function (res){
	  	console.log(res)
	  	ths.tack = res.data
	  })
  },
};
</script>

<style>
	
</style>
