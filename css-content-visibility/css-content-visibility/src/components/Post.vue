<template>
	<div class="post">
		<div class="post-image">
			<!-- <img
				width="1000"
				:src="'https://picsum.photos/1000/400?random=' + index"
				alt=""
			/> -->
		</div>
		<div class="post-content">
			<div class="post-content-title">
				<h2>{{ index }} | Should I Use Source Maps in Production?</h2>
			</div>
			<div class="post-content-body">
				It’s a valid question. A “source map” is a special file that connects a
				minified/uglified version of an asset (CSS or JavaScript) to the
				original authored version. Say you’ve got a filed called _header.scss
				that gets imported into global.scss which is compiled to global.css.
				That final CSS file is what gets loaded in the browser, so for example,
				when you inspect an element in DevTools, it might tell you that the
				<nav>
					is display: flex; because it says so on line 387 in global.css.
				</nav>
				<p>
					But because that final CSS file is probably minified (all whitespace
					removed), DevTools is likely to tell us that we’ll find the
					declaration we’re looking for on line 1! Unfortunate, and not helpful
					for development. That’s where source maps come in. Like I said up top,
					source maps are special files that connect that final output file the
					browser is actually using with the authored files that you actually
					work with and write code in on your file system.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
	props: {
		index: {
			type: Number,
		},
	},
});
</script>

<style lang="scss" scoped>
.post {
	width: 100%;
	content-visibility: auto;
	contain-intrinsic-size: 500px;
	.post-content {
		margin: 16px 0;
		border-bottom: 1px solid #ccc;
		.post-content-title {
			margin: 16px 0;
		}
	}
}
</style>
