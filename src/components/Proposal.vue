<template>
	<div style="text-align: left;margin-left: 1.2rem;">
		<van-form @submit="onSubmit">
			<div class="van-hairline--top-bottom" style="text-align: left;margin: 0.725rem;">
				问题和意见：
			</div>
			<van-field
			  v-model="message"
			  rows="4"
			  autosize
			  :rules="[{ required: true, message: '内容不能为空' }]"
			  type="textarea"
			  placeholder="你的反馈是我进步的最大动力"
			  show-word-limit
			  style="margin-left: -0.6rem;"
			/>
			<div class="van-hairline--top-bottom" style="text-align: left;margin: 0.2rem;">
				图片(选填)：
			</div>
			<van-uploader v-model="fileList" :after-read="afterRead" :max-size="2 * 1024 * 1024"
			 multiple :max-count="3" style="margin-left: -0.6rem;" @oversize="overSize" />
			<div class="van-hairline--top-bottom" style="text-align: left;margin: 0.2rem;">
				联系方式：
			</div>
			<van-field v-model="test2" placeholder="手机号/微信/QQ/邮箱" style="margin-left: -0.6rem;" />
			<div class="van-hairline--top-bottom" style="text-align: left;margin: 0.2rem;">
				为我们打个分：<van-rate v-model="value" icon="like" void-icon="like-o" style="margin-left: 1.5rem;" />
			</div>
			<br />
			<van-button round type="info" native-type="submit" style="width: 95%;margin-top: 4rem;">提交反馈</van-button>
		</van-form>
	</div>
</template>

<script>
	
	export default {
	  data() {
	  	  return {
	  		message: '',
			fileList: [],
			test2: '',
			value: 3,
			imglist: '',
			feedback: {
				id: null,
				opinion: null,
				contact: null,
				imag: null,
				date: null
			}
	  	};
	  },
	  methods: {
		overSize(){
			alert('图片最大上传2M');
		},
	    afterRead(file) {
		  //new 一个FormData格式的参数
		  let params = new FormData();
		  params.append('file', file.file);
		  let config = {
		  	headers: { //添加请求头
		  	  'Content-Type': 'multipart/form-data'
		  	}
		  };
	      // 此时可以自行将文件上传至服务器
	      console.log(file);
		  //将当前this赋值给ths
		  const ths = this;
		  //请求后端数据
		  this.axios.post('http://47.113.112.177:8081/Feedback/Uploader',params, config).then(function (res){
		  	if(ths.imglist != ''){
				ths.imglist = ths.imglist + ',' + res.data;
			}else{
				ths.imglist = res.data;
			}
			console.log(ths.imglist);
		  });
	    },
		onSubmit(values) {
		  this.feedback.opinion = this.message;
		  this.feedback.imag = this.imglist;
		  this.feedback.contact = this.test2;
		  //将当前this赋值给ths
		  const ths = this;
		  this.axios.post('http://47.113.112.177:8081/Feedback/Feedback',this.feedback).then(function (res){
			if (res.data == 1) {
				ths.$router.push({path: '/success'});
			}
		  });
	    },
	  },
	};
</script>

<style>
</style>
