<template>
  <div class="about">
	<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
	<div>
    <van-index-bar :index-list="indexList" highlight-color="#000000">
      <van-index-anchor index="12" v-if="timing.december !==undefined && timing.december.length > 0 " style="background-color: #FFFAFA;">12月份</van-index-anchor> 
	  <van-cell-group v-for="tim in timing.december" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="11" v-if="timing.november !==undefined && timing.november.length > 0 " style="background-color: #FFFAFA;">11月份</van-index-anchor> 
	  <van-cell-group v-for="tim in timing.november" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="10" v-if="timing.october !==undefined && timing.october.length > 0 " style="background-color: #FFFAFA;">10月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.october" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="9" v-if="timing.september !==undefined && timing.september.length > 0 " style="background-color: #FFFAFA;">9月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.september" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="8" v-if="timing.august !==undefined && timing.august.length > 0 " style="background-color: #FFFAFA;">8月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.august" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="7" v-if="timing.july !==undefined && timing.july.length > 0 " style="background-color: #FFFAFA;">7月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.july" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="6" v-if="timing.june !==undefined && timing.june.length > 0 " style="background-color: #FFFAFA;">6月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.june" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="5" v-if="timing.may !==undefined && timing.may.length > 0 " style="background-color: #FFFAFA;">5月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.may" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="4" v-if="timing.april !==undefined && timing.april.length > 0 " style="background-color: #FFFAFA;">4月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.april" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
		<van-cell :title="tim.user" :value="tim.remarks" />
		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="3" v-if="timing.march !==undefined && timing.march.length > 0 " style="background-color: #FFFAFA;">3月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.march" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="2" v-if="timing.february !==undefined && timing.february.length > 0 " style="background-color: #FFFAFA;">2月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.february" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="1" v-if="timing.january !==undefined && timing.january.length > 0 " style="background-color: #FFFAFA;">1月份</van-index-anchor>
	  <van-cell-group v-for="tim in timing.january" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="2019" v-if="timing.lastyear !==undefined && timing.lastyear.length > 0 " style="background-color: #FFFAFA;">2019年</van-index-anchor>
	  <van-cell-group v-for="tim in timing.lastyear" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="2018" v-if="timing.fortwoyears !==undefined && timing.fortwoyears.length > 0 " style="background-color: #FFFAFA;">2018年</van-index-anchor>
	  <van-cell-group v-for="tim in timing.fortwoyears" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
	  
      <van-index-anchor index="2017" v-if="timing.threeyearsago !==undefined && timing.threeyearsago.length > 0 " style="background-color: #FFFAFA;">2017年</van-index-anchor>
	  <van-cell-group v-for="tim in timing.threeyearsago" v-bind:key="tim.id">
	  <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" style="margin-top: 0.3125rem;">
	  		{{$moment(tim.time).format('YYYY-MM-DD HH:mm')}}
	  </van-divider>
	  		<van-cell :title="tim.user" :value="tim.remarks"/>
	  		<van-field left-icon="location-o" :value="tim.addr" disabled />
	  </van-cell-group>
    </van-index-bar>
	</div>
	</van-pull-refresh>
	<br />
	<br />
	<br />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "About",
  data() {
      return {
		    indexList: [12,11,10,9,8,7,6,5,4,3,2,1,2019,2018,2017],
			isLoading: false,
			userid:null,
			test:[],
			timing: {
				december: [],
				november: [],
				october: [],
				september: [],
				august: [],
				july: [],
				june: [],
				may: [],
				april: [],
				march: [],
				february: [],
				january: [],
				lastyear: [],
				fortwoyears :[],
				threeyearsago: []
			},
          };
    },
	methods: {
		onRefresh() {
		  setTimeout(() => {
			//获取用户id
			this.userid = sessionStorage.getItem("user");
			//将当前this赋值给ths
			const ths = this;
			//请求后端数据
			this.axios.get('http://47.113.112.177:8081/clock/timing?user='+this.userid).then(function (res){
				console.log(res)
				ths.timing = res.data
			})
			Toast('刷新成功');
			this.isLoading = false;
		  }, 1000);
		},
	  },
	  created() {
		//获取用户id
		this.userid = sessionStorage.getItem("user");
		//将当前this赋值给ths
		const ths = this;
		//请求后端数据
		this.axios.get('http://47.113.112.177:8081/clock/timing?user='+this.userid).then(function (res){
			console.log(res)
			ths.timing = res.data
		})
	  },
	  
};
</script>

<style>
</style>
