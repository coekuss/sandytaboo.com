<script>
	import { Router, Route } from 'svelte-routing'
	import { blurBg, fullImage } from './stores.js'
	import { fade } from 'svelte/transition'
  import Home from './Home.svelte'
  import Mission from './Mission.svelte'
  import Bio from './Bio.svelte'
  import Socials from './Socials.svelte'
  import Archive from './Archive.svelte'

	export let url=""
	
	function handleKeydown(e) {
		if (e.key == "Escape") $fullImage = [] 
		if ((e.key == "ArrowRight") && ($fullImage[1] < $fullImage[2]-1)) $fullImage[1] += 1
		if ((e.key == "ArrowLeft") && ($fullImage[1] > 0)) $fullImage[1] -= 1
	}

	function handleMousedown(e) {
		if (e.target.id == "gallery") $fullImage = []
	}
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
		overflow: hidden;
	}

	#window-container {
		max-height: 100%;
		height: 700px;
		max-width: 100%;
		width: 1100px;
		display: grid;
		grid-template-rows: 45px auto;
	}

	#tagline {
		width: 100%;
		color: white;
		font-family: neue-haas-grotesk-display, sans-serif;
		text-shadow: 0px 0px 10px white;
		letter-spacing: 10px;
		z-index: 4;
		text-align: center;
	}

	#the-window {
		width: 100%;
		background: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='rgba(126,129,168,0.6)' stroke-width='4' stroke-dasharray='2%2c4' stroke-dashoffset='29' stroke-linecap='butt'/%3e%3c/svg%3e"), 
			linear-gradient(rgba(126,129,168,0.4) 0%, rgba(0,0,0,0) 33%,rgba(0,0,0,0) 66%, rgba(126,129,168,0.4) 100%);
		z-index: 1;
		padding: 3px;
		position: relative;
		display: flex;
		place-items: center;
		place-content: center;
		overflow: hidden;
	}

	#window-inner {
		width: 100%;
		height: 100%;
		padding: 7px;
		backdrop-filter: blur(0px);
		-webkit-backdrop-filter: blur(0px);
		box-sizing: border-box;
		border-top: 7px solid rgb(126,129,168);
		border-bottom: 7px solid rgb(126,129,168);
		border-left: 2px solid rgb(126,129,168);
		border-right: 2px solid rgb(126,129,168);
		position: relative;
		transition: 0.5s;
	}

	#window-inner.blur {
		background: rgba(56,59,98, 0.5);
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
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
		z-index: 0;
		width: 100vw;
		height: 100vh;
	}
	
	#circles {
		position: absolute;
		width: 100%;
		height: calc(100% - 10px);
		top: 5px;
		left: 0;
		overflow: hidden;
		display: grid;
		place-items: center;
		opacity: 0.4;
	}

	.circle {
		position: absolute;
		z-index: -1;
	}

	@keyframes rotate { from {transform: rotateZ(0deg)} to {transform: rotateZ(360deg)} }

	.circle.a {
		width: 430px;
		filter: blur(1.5px) drop-shadow(0px 0px 9px rgb(0, 0, 255));
		transform: rotateZ(10deg);
		animation: 4s linear 0s infinite normal rotate;
	}

	.circle.b {
		width: 1000px;
		filter: blur(1px) drop-shadow(0px 0px 9px rgb(0, 0, 255));
		transform: rotateZ(34deg);
		animation: 6s linear 0s infinite reverse rotate;
	}
	
	@media screen and (max-width: 840px) {
		#window-container {
			height: 845px;
		}
	}

	#gallery {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 5;
		display: grid;
		place-items: center;
		transition: 0.2s;
	}

	#gallery-inner {
		position: relative;
	}
	
	#gallery img {
		width: 100%;
		max-width: 1200px;
		max-height: calc(100vh - 100px);
		margin-bottom: -3px;
    border: 2px solid rgb(174,175,194);
	}

	#gallery #x {
		position: absolute;
		font-family: eurostile-extended;
		font-weight: 500;
		height: 26px;
		width: 26px;
		right: 10px;
		top: 10px;
    border: 2px solid rgb(174,175,194);
		color: white;
    padding: 1px;
		cursor: pointer;
		-webkit-user-select: none;
		user-select: none;
	}

	#gallery #x:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
	}

	#gallery #x div {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background: rgba(110,113,158, 0.7);
    transition: 0.1s;
	}

	#gallery #scrollbuttons {
		font-family: eurostile-extended;
		font-weight: 500;
		width: 100%;
		position: absolute;
		z-index: 100;
		bottom: 10px;
		height: 40px;
		display: grid;
		place-content: center;
		place-items: center;
		grid-template-columns: 30px min-content 30px;
		color: white;
	}

	#gallery .scrollbutton {
    border: 2px solid rgb(174,175,194);
    padding: 1px;
		font-size: 1.4em;
		display: grid;
		place-items: center;
		height: 32px;
		width: 32px;
		-webkit-user-select: none;
		user-select: none;
		cursor: pointer;
	}

	#gallery .scrollbutton div {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background: rgba(110,113,158, 0.5);
    transition: 0.1s;
	}
	
  #gallery .scrollbutton:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
    border-color: rgba(194,195,214,0.7);
  }

  #gallery .scrollbutton:hover div {
    background: rgba(194,195,214,0.4);
  }

	#imagenum {
    background: rgba(110,113,158, 0.5);
		padding: 0px 10px 0px 10px;
		box-sizing: border-box;
		height: 100%;
		width: calc(100% - 8px);
		display: grid;
		place-content: center;
	}
</style>

<svelte:window on:mousedown={handleMousedown} on:keydown={handleKeydown}/>

<div id="wrapper">
	<div id="video-container">
		<video autoplay muted loop>
			<source src="assets/bgloop.mp4" type="video/mp4">
		</video>

	</div>

	{#if $fullImage != ""}
		<div id="gallery" transition:fade={{duration: 100}}>
			<div id="gallery-inner">

				<div id="x" on:click={() => $fullImage = ""}>
					<div>X</div>
				</div>
	
				<div id="scrollbuttons">
					<div class="scrollbutton">
						<div on:click={() => {if ($fullImage[1] > 0) $fullImage[1] -= 1} }>{'<'}</div>
					</div>
					<div id="imagenum">{$fullImage[1]+1}/{$fullImage[2]}</div>
					<div class="scrollbutton">
						<div on:click={() => {if ($fullImage[1] < $fullImage[2]-1) $fullImage[1] += 1}}>{'>'}</div>
					</div>
				</div>
	
				<img transition:fade src={ $fullImage[0][$fullImage[1]] } alt="gallery">
	
			</div>

		</div>
	{/if}


	<div id="window-container">
		<div id="tagline">
			<div>[ taboo_world ]</div>
			<div id="underworld">the underworld wide web</div>
		</div>
		<div id="the-window">
			<div id="circles">
				<svg class="circle a" viewBox="0 0 662 662" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
					<path d="M385.5 564.8A240.2 240.2 0 1 0 127 204.1l1.6 1A238.2 238.2 0 1 1 385 563l.5 2Z" fill="#fff"/>
					<path d="M391.4 590.1a266.1 266.1 0 1 0-286.5-399.7l16.5 10.3A246.7 246.7 0 1 1 387 571.2l4.4 19Z" fill="#fff" fill-opacity=".1"/>
					<path d="M402.6 638.3A315.6 315.6 0 1 0 63 164.3l67 41.7a236.7 236.7 0 1 1 254.8 355.4l18 76.9Z" fill="#fff" fill-opacity=".1"/>
					<path d="M75.7 120.1a331.1 331.1 0 0 1 466-44.4 331.1 331.1 0 0 1 44.4 466 331.1 331.1 0 0 1-466 44.4 331.1 331.1 0 0 1-44.4-466Zm5.4 4.4a324.2 324.2 0 0 1 456.2-43.4 324.2 324.2 0 0 1 43.5 456.2 324.2 324.2 0 0 1-456.3 43.5 324.2 324.2 0 0 1-43.4-456.3Z" fill="#fff" fill-opacity=".2"/>
					<path d="M296 146a188.2 188.2 0 0 0-121.6 289.5l3.3-2.2a184.3 184.3 0 0 1 119-283.5l-.7-3.8Z" fill="#fff" fill-opacity=".2"/>
					<path d="M531.5 215.3a231.5 231.5 0 0 0-397.2-6.6l4.7 2.9a226 226 0 0 1 387.8 6.4l4.7-2.7Z" fill="#fff" fill-opacity=".3"/>
					<path d="M549.2 311.2a219.1 219.1 0 0 0-404.4-96l19 11.9a196.8 196.8 0 0 1 363 86.2l22.4-2ZM174.4 271.7a167.4 167.4 0 1 0 323 42l-5 .5a162.3 162.3 0 1 1-313.3-40.7l-4.7-1.8Z" fill="#fff" fill-opacity=".3"/>
				</svg>
				<svg class="circle b" viewBox="0 0 662 662" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
					<path d="M385.5 564.8A240.2 240.2 0 1 0 127 204.1l1.6 1A238.2 238.2 0 1 1 385 563l.5 2Z" fill="#fff"/>
					<path d="M391.4 590.1a266.1 266.1 0 1 0-286.5-399.7l16.5 10.3A246.7 246.7 0 1 1 387 571.2l4.4 19Z" fill="#fff" fill-opacity=".1"/>
					<path d="M402.6 638.3A315.6 315.6 0 1 0 63 164.3l67 41.7a236.7 236.7 0 1 1 254.8 355.4l18 76.9Z" fill="#fff" fill-opacity=".1"/>
					<path d="M75.7 120.1a331.1 331.1 0 0 1 466-44.4 331.1 331.1 0 0 1 44.4 466 331.1 331.1 0 0 1-466 44.4 331.1 331.1 0 0 1-44.4-466Zm5.4 4.4a324.2 324.2 0 0 1 456.2-43.4 324.2 324.2 0 0 1 43.5 456.2 324.2 324.2 0 0 1-456.3 43.5 324.2 324.2 0 0 1-43.4-456.3Z" fill="#fff" fill-opacity=".2"/>
					<path d="M296 146a188.2 188.2 0 0 0-121.6 289.5l3.3-2.2a184.3 184.3 0 0 1 119-283.5l-.7-3.8Z" fill="#fff" fill-opacity=".2"/>
					<path d="M531.5 215.3a231.5 231.5 0 0 0-397.2-6.6l4.7 2.9a226 226 0 0 1 387.8 6.4l4.7-2.7Z" fill="#fff" fill-opacity=".3"/>
					<path d="M549.2 311.2a219.1 219.1 0 0 0-404.4-96l19 11.9a196.8 196.8 0 0 1 363 86.2l22.4-2ZM174.4 271.7a167.4 167.4 0 1 0 323 42l-5 .5a162.3 162.3 0 1 1-313.3-40.7l-4.7-1.8Z" fill="#fff" fill-opacity=".3"/>
				</svg>
			</div>
			<div id="three"></div>
			<div id="window-inner" class:blur={$blurBg}>
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
</div>