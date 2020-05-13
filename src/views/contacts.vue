<template>
	<div>
		<form action="#">
			<van-search
				v-model="svalue"
				show-action
				placeholder="请输入搜索关键词"
				@search="onSearch"
				@cancel="onCancel"
			/>
		</form>
		<van-swipe-cell v-for="con in contacts" v-bind:key="con.id">
		  <van-contact-card type="edit" :name="con.name" :tel="con.phone" :editable="false" />
		  <template #right>
		    <van-button square type="info" class="button1" text="信息" />
		    <van-button square type="primary" class="button2" @click="tel(con.phone)" text="电话" />
		  </template>
		</van-swipe-cell>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: "contacts",
		data() {
			return {
				svalue: '',
				contacts: [],
				userid: "",
			}
		},
		methods: {
			onSearch(val) {
			  const ths = this;
			  if(val.toString() != ""){
				  this.axios.get('http://47.113.112.177:8081/user/search?key='+val).then(function (res){
					console.log(res)
					ths.contacts = res.data
				  })
			  }else{
				  Toast('输入不能为空');
			  }
			},
			tel(te){
				window.location.href = "tel://"+te;
			},
			onCancel() {
			},
		  },
		created() {
			  this.userid = sessionStorage.getItem("user");
			  const ths = this;
			  //请求后端数据
			  this.axios.get('http://47.113.112.177:8081/user/nome?user='+this.userid).then(function (res){
			  	console.log(res)
			  	ths.contacts = res.data
			  })
		},
	
	}
	
</script>

<style>
	  .button1,.button2 {
	    height: 100%;
	  }
</style>
