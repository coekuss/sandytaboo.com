<script>
	import { Router, Route } from 'svelte-routing'
	import { blurBg } from './stores.js'
  import Home from './Home.svelte'
  import Mission from './Mission.svelte'
  import Bio from './Bio.svelte'
  import Socials from './Socials.svelte'
  import Archive from './Archive.svelte'

	export let url=""
</script>

<style>
	#wrapper {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow:hidden;
	}

	#the-window {
		max-width: 100%;
		width: 1100px;
		height: 650px;
		background: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(126,129,168,0.6)' stroke-width='4' stroke-dasharray='2%2c4' stroke-dashoffset='29' stroke-linecap='butt'/%3e%3c/svg%3e"), 
			linear-gradient(rgba(126,129,168,0.4) 0%, rgba(0,0,0,0) 33%,rgba(0,0,0,0) 66%, rgba(126,129,168,0.4) 100%);
		z-index: 1;
		position: relative;
		padding: 3px;
	}

	#window-inner {
		width: 100%;
		height: 100%;
		padding: 7px;
		backdrop-filter: blur(0px);
		box-sizing: border-box;
		border-top: 7px solid rgb(126,129,168);
		border-bottom: 7px solid rgb(126,129,168);
		border-left: 2px solid rgb(126,129,168);
		border-right: 2px solid rgb(126,129,168);
		transition: backdrop-filter 0.5s;
	}

	#window-inner.blur {
		backdrop-filter: blur(7px);
	}

	#tagline {
		position: absolute;
		width: 100%;
		top: -50px;
		color: white;
		z-index: 2;
		font-family: neue-haas-grotesk-display, sans-serif;
		text-shadow: 0px 0px 10px white;
		letter-spacing: 10px;
		text-align: center;
	}

	#video-container {
		width: 100%;
		height: 100%;
		display: flex;
		place-content: center;
		position: absolute;
		z-index: -2;
	}

	#video-container video {
		min-height: 100%;
		min-width: 100%;
		object-fit: cover;
		transition: 0.5s;
	}

	#three {
		position: absolute;
		width: 100%;
		z-index: 1;
	}

	#circles {
		position: absolute;
		width: 1100px;
		height: 650px;
		overflow: hidden;
		display: grid;
		place-items: center;
		opacity: 1;
	}

	.circle {
		position: absolute;
		z-index: -1;
		mix-blend-mode: overlay;
	}

	@keyframes rotate { from {transform: rotateZ(0deg)} to {transform: rotateZ(360deg)} }

	.circle.a {
		width: 430px;
		filter: blur(1.5px);
		transform: rotateZ(10deg);
		animation: 4s linear 0s infinite normal rotate;
	}

	.circle.b {
		width: 1000px;
		filter: blur(1px);
		transform: rotateZ(34deg);
		animation: 6s linear 0s infinite reverse rotate;
	}

	.circle.c {
		width: 730px;
		filter: blur(1.1px);
		transform: rotateZ(95deg);
		animation: 5s linear 0s infinite normal rotate;
	}

	.circle.d {
		width: 300px;
		filter: blur(0.4px);
		transform: rotateZ(184deg);
		animation: 4s linear 0s infinite reverse rotate;
	}

	.circle.e {
		width: 590px;
		filter: blur(0.9px);
		transform: rotateZ(72deg);
		animation: 5s linear 0s infinite reverse rotate;
	}

	.circle.f {
		width: 483px;
		filter: blur(0.9px);
		transform: rotateZ(72deg);
		animation: 7s linear 0s infinite normal rotate;
	}
	.circle.g {
		width: 1500px;
		filter: blur(0.9px);
		transform: rotateZ(72deg);
		animation: 8s linear 0s infinite reverse rotate;
	}
	.circle.h {
		width: 1200px;
		filter: blur(0.9px);
		transform: rotateZ(72deg);
		animation: 9s linear 0s infinite normal rotate;
	}
	.circle.i {
		width: 532px;
		filter: blur(0.9px);
		transform: rotateZ(72deg);
		animation: 5s linear 0s infinite reverse rotate;
	}
	.circle.j {
		width: 920px;
		filter: blur(1px);
		transform: rotateZ(72deg);
		animation: 9s linear 0s infinite normal rotate;
	}

	@media screen and (max-width: 840px) {
		#the-window {
			height: 800px;
		}
		#circles {
			height: 800px;
		}
	}
</style>

<div id="wrapper">
	
	<div id="circles">
		<img class="circle a" src="assets/circle.svg" alt="test">
		<img class="circle b" src="assets/circle.svg" alt="test">
		<!-- <img class="circle c" src="assets/circle.svg" alt="test">
		<img class="circle d" src="assets/circle.svg" alt="test">
		<img class="circle e" src="assets/circle.svg" alt="test">
		<img class="circle f" src="assets/circle.svg" alt="test">
		<img class="circle g" src="assets/circle.svg" alt="test">
		<img class="circle h" src="assets/circle.svg" alt="test">
		<img class="circle i" src="assets/circle.svg" alt="test">
		<img class="circle j" src="assets/circle.svg" alt="test"> -->
	</div>
	<div id="three"></div>
	<div id="video-container">
		<video autoplay muted loop>
			<source src="assets/bgloop.mp4" type="video/mp4">
		</video>

	</div>


	<div id="the-window">

		<div id="window-inner" class:blur={$blurBg}>
			<div id="tagline">
				<div>[ taboo_world ]</div>
				<div id="underworld">the underworld wide web</div>
			</div>
			<Router {url}>
				<Route path="/" component={Home} />
				<Route path="/mission" component={Mission} />
				<Route path="/bio" component={Bio} />
				<Route path="/socials" component={Socials} />
				<Route path="/archive" component={Archive} />
			</Router>
		</div>
	</div>

</div>