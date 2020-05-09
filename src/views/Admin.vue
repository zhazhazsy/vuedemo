<template>
	<div>
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value" title="选择年月" ref="item" >
			  <van-datetime-picker
			    v-model="currentDate"
			    type="year-month"
			    :min-date="minDate"
			    :max-date="maxDate"
			    :formatter="formatter" 
				@cancel="cancle"
				@confirm="confirm"
			  />
		  </van-dropdown-item>
		</van-dropdown-menu>
		<van-collapse v-model="activeNames" v-for="item in clist" v-bind:key="item.id">
			<van-swipe-cell>
			  <template #left>
				<van-button square type="primary" text="安排" @click="gourl(item.user)" />
			  </template>
			  
			  <van-collapse-item :title="item.name" :name="item.id" :value="'本月签到'+item.mnum+'天'" >
				<van-cell-group v-for="tim in item.clocks" v-bind:key="tim.id">
					
					<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
							{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
					</van-divider>
				
					<van-cell :title="tim.user" :value="tim.remarks"/>
					<van-field left-icon="location-o" :value="tim.addr" disabled />
						
				</van-cell-group>
			  </van-collapse-item>
			</van-swipe-cell>
		</van-collapse>
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
		  minDate: new Date(2020, 0, 1),
		  maxDate: new Date(),
		  currentDate: new Date(),
	      value: 0,
		  activeNames: ['1','2','3','4','5','6'],
		  clist: [],
	    };
	  },
	  methods: {
	    onConfirm() {
	          this.$refs.item.toggle();
	        },
		formatter(type, val) {
			  if (type === 'year') {
				return `${val}年`;
			  } else if (type === 'month') {
				return `${val}月`;
			  }
			  return val;
			},
		cancle(){
			//取消按钮
			this.$refs.item.toggle();
		},
		gourl(user){
			this.$router.push({path: '/Arrange',query:{name:user}});
		},
		confirm(value){
			//确定按钮
			//获取了当前日期
			//将当前this赋值给ths
			const ths = this;
			var month = value.getMonth()+1;
			//请求后端数据
			this.axios.get('http://47.113.112.177:8081/user/admin?mon='+month).then(function (res){
				console.log(res)
				ths.clist = res.data
			})
			this.$refs.item.toggle();
		},
	  },
	  created() {
	  		//将当前this赋值给ths
	  		const ths = this;
			var month = this.maxDate.getMonth()+1;
	  		//请求后端数据
	  		this.axios.get('http://47.113.112.177:8081/user/admin?mon='+month).then(function (res){
				console.log(res)
	  			ths.clist = res.data
	  		})
	  },
	};
</script>

<style>
</style>
