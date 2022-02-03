<script>
  import { blurBg } from "./stores.js"
  import Button from "./Button.svelte"
	import { link } from 'svelte-routing'
  import { onMount, onDestroy } from 'svelte';;

  onMount(async () => { $blurBg = true })
  onDestroy(async () => { $blurBg = false })
</script>

<style>
  #mission-wrap {
    height: 100%;
    width: 100%;
    backdrop-filter: blur(0px);
    color: white;
    transition: 0.2s;
  }

  #top-bar {
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

</style>

<div id="mission-wrap">
  <div id="top-bar">
    <a id="back" href="/" use:link><Button>BACK</Button></a>
    <div id="button2">BIO</div>
  </div>
  <div id="text">
    <p>My name is Sandy Taboo. I am a Vietnamese, non-binary (they/them), and queer artist.</p>
    <p>I have created Taboo World as a sanctuary for art, alchemy, and self-expression.</p>
    <p>My goal is to keep the focus on nourishing your soul while also spreading light on upcoming artists.</p>
    <p>I especially prioritize marginalized groups because there is inequality for representation and opportunities against us.</p>
    <p>In a world of corruption and distractions, my mission is to improve the world and myself along the way.</p>
    <p>Thank you for visiting Taboo World.</p>
    <p>Enter the parallel universe.</p>
  </div>
</div>