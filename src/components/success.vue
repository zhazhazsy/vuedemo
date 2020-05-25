<template>
	<div>
		<van-nav-bar
		  left-text="返回"
		  right-text="完成"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<van-image
		  style="margin-top: 3rem;"
		  width="10rem"
		  :src="require('../assets/test/success.png')" />
		  <br />
		<font style="font-weight: bolder;font-size: large;">
			反馈成功
		</font>
		<br />
		<div style="margin: 1rem;">
			<font>
				感谢您的支持和关注，我们会认真查看并处理您的反馈，尽快完善相应功能。
			</font>
		</div>
		<div style="margin-top: 2rem;">
			<van-button type="info" style="width: 10rem;" to="/Setting">关闭</van-button>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/Setting");
    },
    onClickRight() {
      this.$router.push("/Setting");
    },
  },
};
</script>

<style>
</style>
