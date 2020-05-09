<template>
  <div id="app">
    <router-view/>
	<!-- 如果组件路由为location则不显示 -->
	<div v-show="!(path ==='/location'||path == '/Clockcomplete' || path == '/Admin' || path == '/Arrange' || path == '/Loading' || path == '/AdminError') ">
		<van-tabbar v-model="active" class="active">
		<van-tabbar-item icon="home-o" to="/"></van-tabbar-item>
		<van-tabbar-item icon="underway-o" to="/about"></van-tabbar-item>
		<van-tabbar-item icon="friends-o" to="/contacts"></van-tabbar-item>
		<van-tabbar-item icon="setting-o" to="/Setting"></van-tabbar-item>
		</van-tabbar>
	</div>
  </div>
</template>

<script>
	export default{
		name: "App",
		data() {
		    return {
		      active: 0,
			  path: "",
		    };
		  },
		mounted() {
		    this.path = this.$route.path;
		    // console.log(this.$route.path)
		  },
		watch:{
			$route(to,from){
			this.path = to.path
			}
		  }
	}
</script>

<style>
	.active{
		background-image: linear-gradient(#87CEFA, #1E90FF);
	}
	*{
		margin: 0;
		padding: 0;
	}
	#app {
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  width:100%;
	  height: 100%;
	  background: #F2F2F2;
	  position: absolute; 
	}
</style>
