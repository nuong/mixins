<template>
	<div id="app">
		<div class="top-">
			<button @click="addNew()">
				Add
			</button>
			{{ listItems.length }}
		</div>
		<div v-for="(item, index) in listItems" :key="item">
			<Post :index="index" />
		</div>

		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Post from "./components/Post.vue";

export default {
	name: "App",
	components: {
		// HelloWorld,
		Post,
	},
	data() {
		return {
			listItems: new Array(100).map((item, index) => index),
		};
	},
	methods: {
		addNew() {
			this.listItems.unshift(this.listItems.length + 1);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
}
</style>
