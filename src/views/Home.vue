<template>
  <div class="home">
    <Main />
	<van-tabbar v-model="active" class="active">
	<van-tabbar-item icon="home-o" to="/"></van-tabbar-item>
	<van-tabbar-item icon="underway-o" to="/about"></van-tabbar-item>
	<van-tabbar-item icon="friends-o"></van-tabbar-item>
	<van-tabbar-item icon="setting-o"></van-tabbar-item>
	</van-tabbar>
  </div>
</template>

<script>
import Main from "@/components/main.vue";

export default {
  name: "Home",
  data() {
      return {
        active: 0,
      };
    },
  components: {
    Main
  }
};
</script>

<style>
	.active{
		background-image: linear-gradient(#87CEFA, #1E90FF);
	}
</style>