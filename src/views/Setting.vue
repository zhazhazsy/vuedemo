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
		  <van-cell title="电话:" is-link @click="showPopup()" :value="userinfo.phone" />
		  <van-popup v-model="show" position="bottom" closeable @close="onClose"
		  close-icon-position="top-right" :style="{ height: '70%' }">
		  <br>修改手机号码
			<van-steps :active="active" active-icon="success" active-color="#38f">
			  <van-step>新手机号</van-step>
			  <van-step>短信验证</van-step>
			  <van-step>完成</van-step>
			</van-steps>
			<br />
			<van-form validate-first @failed="onFailed" @submit="onSubmit" v-if="active == 0">
			  <van-field
			    v-model="value1"
			    name="pattern"
				label="新手机号"
			    placeholder="请输入手机号码"
			    :rules="[{ pattern, message: '请输入正确手机号码' }]"
			  />
			  <div style="margin-top: 10%;">
			      <van-button round block type="info" native-type="submit">
			        <van-loading v-if="loading" />
					<font v-if="!loading">获取验证码</font>
			      </van-button>
			  </div>
			</van-form>
			<div v-if="active == 1">
				<!-- 密码输入框 -->
				<van-password-input
				  :value="value2"
				  :length="4"
				  :mask="false"
				  :error-info="errorInfo"
				  :focused="showKeyboard"
				  @focus="showKeyboard = true"
				/>
				<!-- 数字键盘 -->
				<van-number-keyboard
				  :show="showKeyboard"
				  @input="onInput"
				  @delete="onDelete"
				  @blur="showKeyboard = false"
				/>
			</div>
			<div v-if="active == -1">
				<br />
				<van-icon name="clear" />
				最近请求次数过多<br />请稍后再试
			</div>
			<div v-if="active == 2">
				<br />
				<van-icon name="checked" />
				修改成功
			</div>
		  </van-popup>
		</van-cell-group>
		<br />
		<van-cell-group>
		  <van-overlay :show="show2">
		    <div class="wrapper" @click="show2 = false" >
				<div class="block" @click.stop style="text-align: left;" >
					<van-icon name="close" style="margin-top: 0.625rem;float: right;margin-right: 0.9375rem;width: 0.9375rem;" @click="show2 = false" />
					<br />
					<h2 style="margin-left: 0.9375rem;">关于作者</h2>
					<p> 再牛逼的梦想也抵不住傻逼似的坚持！</p>
					<p> 本APP是作者第一次用混合开发的方式开发的APP，存在很多不足是一定的，但每一次开发都是学习都过程，慢慢改善自己那蹩脚的代码，一次次跨过那一个个坑，这不都是令人开心的事吗。</p>
					<h2 style="margin-left: 0.9375rem;">联系方式</h2>
					<p>欢迎指出我的不足，也可以谈谈诗和远方，同时也可以聊聊眼前苟且...</p>
					<p>邮箱：
						 <span style="color: #0570DB;" @click="onCopy">1006942332@qq.com</span>
					</p>
				</div>
		    </div>
		  </van-overlay>
		  <van-cell title="关于我们" is-link @click="show2 = true" />
		  <van-cell title="使用须知" is-link to="/Privacy" />
		  <van-cell title="反馈建议" is-link to="/Proposal" />
		</van-cell-group>
	</div>
</template>

<script>
	export default {
	  name: "Location",
	  data() {
		  return{
			  userid: '',
			  value1: '',
			  value2: '',
			  pattern: /^1[3456789]\d{9}$/,
			  active: 0,
			  show: false,
			  userinfo: {
				  name:null,
				  position:null,
				  phone:null,
				  sex:null
			  },
			  loading:false,
			  showKeyboard: true,
			  errorInfo: '',
			  show2: false,
		  }
	    },
	  methods: {
		  onCopy () {
		    let message = '1006942332@qq.com';
		    this.$copyText(message).then(res => {
			  this.$notify({ type: 'success', message: '复制到剪切板' });
		    }).catch(err => {
			  this.$notify({ type: 'danger', message: '不允许操作' });
		    })
		  },
	  	  //点击任务显示详情
	      showPopup() {
	        this.show = true;
	      },
		  validator(val) {
		    return /1\d{10}/.test(val);
		  },
		      // 异步校验函数返回 Promise
		  onFailed(errorInfo) {
			console.log('failed', errorInfo);
		  },
		  onSubmit(){
			  this.loading = true;
			  this.userid = sessionStorage.getItem("user");
			  const ths = this;
			  //请求后端数据,保证同一个session
			  this.axios.defaults.withCredentials = true;
			  this.axios.get('http://47.113.112.177:8081/user/Sms?newphone='+this.value1+'&user='+this.userid).then(function (res){
			  	ths.active = res.data;
				ths.value1 = "";
			  });
		  },
		  onClose(){
			  this.active = 0;
			  this.loading = false;
		  },
		  onInput(key) {
			this.value2 = (this.value2 + key).slice(0, 4);
			if (this.value2.length === 4) {
			  this.userid = sessionStorage.getItem("user");
			  const ths = this;
			  //请求后端数据,保证同一个session
			  this.axios.defaults.withCredentials = true;
			  this.axios.get('http://47.113.112.177:8081/user/Verification?ver='+this.value2+'&user='+this.userid).then(function (res){
				  if(res.data == 2){
					  ths.value2 = '';
					  ths.active = res.data;
				  }else{
					  ths.errorInfo = '验证码错误';
					  ths.value2 = '';
				  }
			  })
			  
		   } else {
			  this.errorInfo = '';
		    }
		  },
		  onDelete() {
			this.value2 = this.value2.slice(0, this.value2.length - 1);
		  },
	    },
	  created() {
		  this.userid = sessionStorage.getItem("user");
		  const ths = this;
		  //请求后端数据
		  this.axios.get('http://47.113.112.177:8081/user/user?user='+this.userid).then(function (res){
		  	console.log(res)
		  	ths.userinfo = res.data
		  });
		},
	}
</script>

<style>
	.content {
	  padding: 16px 16px 160px;
	}
	.wrapper {
	   display: flex;
	   align-items: center;
	   justify-content: center;
	   height: 100%;
	}
	
	.block {
	  width: 90%;
	  height: 80%;
	  background-color: #fff;
	}
</style>
