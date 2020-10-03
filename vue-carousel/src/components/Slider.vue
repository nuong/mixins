<template>
	<div class="banner-slider">
		<ul
			:style="sliderWrapperStyle"
			v-touch:swipe.left="goNextSlide"
			v-touch:swipe.right="goPrevSlide"
		>
			<li
				v-for="(img, index) in sliderItems"
				:key="index"
				:style="{ width: itemWidthPer + '%' }"
			>
				<div
					class="slider-content-item"
					:class="{ active: activeSlideIndex === index }"
					:style="{ backgroundImage: `url(${img})` }"
				></div>
			</li>
		</ul>
		<div>
			<button class="slide-ctrl ctrl-left" role="button" @click="goPrevSlide()">
				<svg
					width="33"
					height="32"
					viewBox="0 0 33 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="21.8748"
						y1="30.819"
						x2="1.51271"
						y2="18.1153"
						stroke="black"
						stroke-width="2"
					/>
					<line
						x1="22.6629"
						y1="7.66804"
						x2="1.31106"
						y2="18.6271"
						stroke="black"
						stroke-width="2"
					/>
				</svg>
			</button>
			<button class="slide-ctrl ctrl-right" @click="goNextSlide()">
				<svg
					width="33"
					height="32"
					viewBox="0 0 33 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						x1="11.1677"
						y1="1.86236"
						x2="32.1192"
						y2="13.5686"
						stroke="black"
						stroke-width="2"
					/>
					<line
						x1="11.4979"
						y1="25.0244"
						x2="32.2959"
						y2="13.0476"
						stroke="black"
						stroke-width="2"
					/>
				</svg>
			</button>
		</div>
		<div class="indicator">
			<a
				:class="{ active: activeSlideIndex === item }"
				role="button"
				v-for="(item, index) in indicators"
				:key="index"
				@click="goToSlide(item)"
			>
				<span class="dot"></span>
			</a>
		</div>
	</div>
</template>

<script>
const SLIDE_DURATION = 500;

export default {
	name: "BannerSlider",
	props: {
		msg: String,
		loop: {
			type: Boolean,
			default: true,
		},
		auto: {
			type: Boolean,
			default: true,
		},
		imageArr: {
			default: () => [],
		},
	},
	data() {
		return {
			sliderItems: [],
			itemWidthPer: 100,
			sliderWrapperStyle: {
				width: "100%",
				transition: "",
				transform: "translateX(0%)",
			},
			activeSlideIndex: 0,
		};
	},
	computed: {
		indicators() {
			const rl = this.sliderItems.map((item, index) => index);
			if (this.loop) {
				rl.splice(0, 1);
				rl.splice(this.sliderItems.length - 2, 1);
			}
			return rl;
		},
	},
	methods: {
		buildImgList() {
			if (this.loop) {
				const length = this.imageArr.length;
				this.sliderItems = [
					this.imageArr[length - 1],
					...this.imageArr,
					this.imageArr[0],
				];
			} else {
				this.sliderItems = [...this.imageArr];
			}
			this.sliderWrapperStyle.width = `${this.sliderItems.length * 100}%`;
			this.itemWidthPer = 100 / this.sliderItems.length;
		},
		initSlider() {
			this.buildImgList();
			if (this.loop) {
				this.activeSlideIndex = 1;
			}
			this.goToSlide(this.activeSlideIndex, 0);
		},
		goToSlide(index, duration = SLIDE_DURATION) {
			this.activeSlideIndex = index;
			this.sliderWrapperStyle.transition = `all ${duration}ms ease 0s`;
			this.sliderWrapperStyle.transform = `translateX(-${this.itemWidthPer *
				index}%)`;
		},
		goNextSlide() {
			if (this.activeSlideIndex < this.sliderItems.length - 1) {
				this.goToSlide(this.activeSlideIndex + 1);
				if (
					this.loop &&
					this.activeSlideIndex === this.sliderItems.length - 1
				) {
					this.activeSlideIndex = 1; // set here for make sure indicator active at the sam time with slice
					setTimeout(() => {
						this.goToSlide(1, 0);
					}, SLIDE_DURATION);
				}
			}
		},
		goPrevSlide() {
			if (this.activeSlideIndex > 0) {
				this.goToSlide(this.activeSlideIndex - 1);
				if (this.loop && this.activeSlideIndex === 0) {
					this.activeSlideIndex = this.sliderItems.length - 2;
					setTimeout(() => {
						this.goToSlide(this.sliderItems.length - 2, 0);
					}, SLIDE_DURATION);
				}
			}
		},
		$ex_refresh() {
			this.buildImgList();
			this.goToSlide(this.activeSlideIndex, 0);
		},
	},
	mounted() {
		this.initSlider();
		this.$nextTick(() => {
			if (this.auto && this.loop) {
				setInterval(() => {
					this.goNextSlide();
				}, 4000);
			}
		});
	},
};
</script>

<style scoped lang="scss">
.banner-slider {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	ul {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
	li {
		display: inline-block;
		height: 100%;
		.slider-content-item {
			width: 100%;
			height: 100%;
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
		}
	}
	.slide-ctrl {
		position: absolute;
		top: 50%;
		transform: translateX(-50%);
		border-radius: 100%;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		border: none;
		background: rgba(245, 245, 245, 54%);
		transition: all 0.3s ease-in;
		outline: none !important;
		&:hover {
			background: rgba(245, 245, 245, 85%);
		}
		svg {
			width: 16px;
			height: 16px;
		}
		&.ctrl-left {
			left: 30px;
		}
		&.ctrl-right {
			right: 0px;
		}
	}
	.indicator {
		position: absolute;
		bottom: 10px;
		text-align: center;
		width: 100%;
		a {
			display: inline-block;
			padding: 10px;
			cursor: pointer;
			&.active {
				.dot {
					background: #4a93e4;
				}
			}
			.dot {
				display: block;
				height: 10px;
				width: 10px;
				border-radius: 10px;
				background: #222;
			}
		}
	}
}
</style>
