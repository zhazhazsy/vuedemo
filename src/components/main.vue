<template>
  <div class="bodysty">
	<div class="top">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
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
	</div>
	<div class="body">
		<van-divider content-position="left">今日任务</van-divider>
		<van-cell is-link @click="showPopup(it.content)" v-for="it in task">{{it.con}}</van-cell>
		<van-popup v-model="show" position="bottom" closeable
		close-icon-position="top-right" :style="{ height: '30%' }">
		<van-divider>任务详情</van-divider>
		<br><br>{{thename}}
		</van-popup>
	</div>
  </div>
</template>

<script>
	export default{
		name:"user",
		data(){
			return{
				task:[],
				show: false,
				thename : null,
			}
		},
		methods: {
			//点击任务显示详情
		    showPopup(name) {
			  this.thename = name;
		      this.show = true;
		    },
		  },
		created() {
			//获取用户名
			let aCode = [];
			let acode = this.$utils.getUrlKey("user");
			//将当前this赋值给ths
			const ths = this;
			//请求后端数据
			this.axios.get('http://localhost:8081/task/task?user='+acode).then(function (res){
				console.log(res)
				ths.task = res.data
			})
		},
	}
</script>

<style>
  .top{
	height: 9.375rem;
  }
  .body{
	height: 6.25rem;
  }
  .my-swipe .van-swipe-item {
	color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .bodysty{
	height: 100%;
  }
  .my-swipe{
	position: absolute;left: 0;top: 50;
	width: 100%;
	height: 150px;
	height: auto;
  }
  .lun2{
	width: 100%;
	background-repeat: no-repeat;
	background-size: contain;
	background-size: 100%;
	height: 150px;
	background-position: 0;
  }
  .lun3{
	width: 100%;
	background-size: 100%;
	background-repeat: no-repeat;
	background-size: contain;
	height: 150px;
	background-position: 0;
  }
  .lun4{
	width: 100%;
	background-size: 100%;
	background-repeat: no-repeat;
	background-size: contain;
	height: 150px;
	background-position: 0;
  }
  .lun1{
	width: 100%;
	background-size: 100%;
	background-repeat: no-repeat;
	background-size: contain;
	height: 150px;
	background-position: 0;
  }
</style>



