<script>
  import { blurBg } from "./stores.js"
  import Button from "./Button.svelte"
	import { link } from 'svelte-routing'
  import { onDestroy, onMount } from 'svelte';

  onMount(async () => { $blurBg = true })
  onDestroy(async () => { $blurBg = false })
</script>

<style>
  #mission-wrap {
    height: 100%;
    width: 100%;
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

  #links {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    letter-spacing: 2px;
  }

  .button-head {
    font-family: eurostile-extended;
    width: 140px;
    height: 22px;
    margin-top: 10px;
    border: 1px solid rgb(194,195,214);
    padding: 2px;
  }

  .button-head div, .button-sub div {
    width: 100%;
    height: 100%;
    display: flex;
    place-items: center;
    place-content: center;
    background: rgba(194,195,214,0.15);
  }

  .button-sub {
    font-family: eurostile-extended;
    width: 190px;
    height: 26px;
    margin-top: 10px;
    border: 1px solid rgba(194,195,214,0.15);
    padding: 2px;
  }

</style>

<div id="mission-wrap">
  <div id="top-bar">
    <a id="back" href="/" use:link><Button>BACK</Button></a>
    <div class="button-head">
      <div>SOCIALS</div>
    </div>
  </div>
  <div id="links">
    <div class="button-sub"><div>INSTAGRAM</div></div>
    <div class="button-sub"><div>TWITTER</div></div>
    <div class="button-sub"><div>YOUTUBE</div></div>
    <div class="button-sub"><div>SOUNDCLOUD</div></div>
    <div class="button-sub"><div>EMAILS</div></div>
  </div>
</div>