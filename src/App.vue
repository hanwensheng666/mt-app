<template>
  <div id="app">
    <!--头部-->
    <app-header :poiInfo="poiInfo"></app-header>
    <!--导航-->
    <app-nav :commentNum="commentNum"></app-nav>
    <!--内容-->
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
	import Header from './components/header/header'
	import Nav from './components/nav/nav'
export default {
  name: 'App',
  data(){
  	return {
  		poiInfo:{},
  		commentNum:0
  	}
  },
  components:{
  	'app-header':Header,
  	'app-nav':Nav
  },
  created(){
  	fetch("/api/goods").then(res=>{
  		return res.json();
  	}).then(response=>{
  		if(response.code == 0){
  			this.poiInfo = response.data.poi_info;
  		}
  	})
  	
  	//请求ratings
  	fetch("/api/ratings").then(res=>{
  		return res.json();
  	}).then(response=>{
  		if(response.code == 0){
  			this.commentNum = response.data.comment_num;
  		}
  	})
  }
}
</script>

<style>
	
</style>
