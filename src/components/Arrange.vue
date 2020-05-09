<template>
	<div>
		<van-nav-bar
		  title="工作安排"
		  left-text=""
		  left-arrow
		  @click-left="onClickLeft"
		/>
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
		<van-button @click="clock" size="large" color="linear-gradient(to right, #7FFF00, #7CCD7C)" >安排</van-button>
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
	clock(){
		alert(this.message);
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
