<script>
  import { blurBg } from "./stores.js"
  import Button from "./Button.svelte"
	import { link } from 'svelte-routing'
  import { onMount, onDestroy } from 'svelte';

  onMount(async () => { $blurBg = true })
  onDestroy(async () => { $blurBg = false })
</script>

<style>
  #mission-wrap {
    height: 100%;
    width: 100%;
    color: white;
    position: relative;
  }

  #top-bar {
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  #back {
    position: absolute;
    top: 0;
    left: 0;
  }

  #text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 0px 0px 10px white;
  }

  #button2 {
    font-family: eurostile-extended;
    width: 140px;
    height: 26px;
    margin-top: 11px;
    border: 1px solid transparent;
    outline: 1px solid rgb(194,195,214);
    background: rgba(194,195,214,0.15);
    box-sizing: border-box;
    display: flex;
    place-content: center;
  }

  p {
    font-family: neue-haas-grotesk-display;
    margin: 0;
  }

  a {
    color: white;
  }

</style>

<div id="mission-wrap">
  <div id="top-bar">
    <a id="back" href="/" use:link><Button>HOME</Button></a>
    <div id="button2">404</div>
  </div>
  <div id="text">
    <p>This page does not exist. Please head to our <a href="/" use:link>homepage</a>.</p>
  </div>
</div>