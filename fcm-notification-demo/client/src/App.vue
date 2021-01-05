<template>
	<div id="app">
		<div class="app-content">
			<button @click="askForPermissioToReceiveNotifications">
				Click to receive notification
			</button>
		</div>
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import {
	initializeFirebase,
	askForPermissioToReceiveNotifications,
} from "./push-notification";

export default {
	name: "App",
	components: {
		// HelloWorld,
	},
	data() {
		return {};
	},
	methods: {
		askForPermissioToReceiveNotifications() {
			askForPermissioToReceiveNotifications();
		},
	},
	mounted() {
		initializeFirebase();
	},
};
</script>

<style lang="scss">
body {
	margin: 0px;
	background: #f7f7f7;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
h1 {
	margin: 0;
	padding: 20px 0;
}

.app-content {
	width: 1024px;
	height: 400px;
	margin: 0 auto;
}
.actions {
	margin-top: 30px;
	button {
		height: 34px;
		border: none;
		padding: 0 20px;
		background: #4a93e4;
		color: #fff;
	}
}
@media only screen and (max-width: 1024px) {
	.app-content {
		width: 100%;
		height: 300px;
	}
}
</style>
