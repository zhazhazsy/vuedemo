<template>
	<div>
		<van-nav-bar
		  title="查看工作安排"
		  left-text=""
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<van-tabs>
		  <van-tab title="进行中">
			<div>
				<van-swipe-cell v-for="it in listing" v-bind:key="it.id">
					<van-cell is-link @click="showPopup(it.content)" :value="getDayandMon(it.time)">
						<template #title>
							{{it.content.slice(0,5)}}..
						</template>
					</van-cell>
					<template #right>
					    <van-button square type="danger" text="删除" @click="deleteTask(it.id)" />
					</template>
				</van-swipe-cell>
				<van-popup v-model="show" position="bottom" closeable
				close-icon-position="top-right" :style="{ height: '30%' }">
				<van-divider>任务详情</van-divider>
				<br><p>{{thename}}</p>
				</van-popup>
			</div>
		  </van-tab>
		  <van-tab title="过期任务">
		    <div>
		    	<van-cell is-link @click="showPopup(it.content)" v-for="it in listed" v-bind:key="it.id" :value="getDayandMon(it.time)">
		    		<template #title>
		    			{{it.content.slice(0,5)}}..
		    		</template>
		    	</van-cell>
		    	<van-popup v-model="show" position="bottom" closeable
		    	close-icon-position="top-right" :style="{ height: '30%' }">
		    	<van-divider>任务详情</van-divider>
		    	<br><p>{{thename}}</p>
		    	</van-popup>
		    </div>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		  return {
			  show: false,
			  listing: [],
			  listed: [],
			  thename : null,
		  };
	  },
	methods:{
		onClickLeft() {
		  this.$router.push({path: '/Admin'});
		},
		//点击任务显示详情
		showPopup(name) {
		  this.thename = name;
		  this.show = true;
		},
		getDayandMon(da){
			let date = new Date(da);
			let mymonth = date.getMonth() + 1;
			let myweekday = date.getDate();
			let d = mymonth +'-' + myweekday;
			return d;
		},
		deleteTask(id){
			this.axios.get('http://127.0.0.1:8081/task/deleteTask?id='+id).then(function (res){
				if(res.data!=0){
					alert("删除成功");
					window.location.reload();
				}
			});
		},
	  },
	created() {
		//将当前this赋值给ths
		const ths = this;
		//请求后端数据
		this.axios.get('http://127.0.0.1:8081/task/selectTasking?user='+this.$route.query.user).then(function (res){
			console.log(res)
			ths.listing = res.data
		});
		this.axios.get('http://127.0.0.1:8081/task/selectTasked?user='+this.$route.query.user).then(function (res){
			console.log(res)
			ths.listed = res.data
		});
	},
}
</script>

<style>
	p{
		  word-wrap: break-word;
		  padding: 0.9375rem;
	}
</style>
