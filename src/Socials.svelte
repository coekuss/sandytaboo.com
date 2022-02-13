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
    transition: 0.1s;
  }

  .button-sub {
    font-family: eurostile-extended;
    width: 250px;
    height: 26px;
    margin-top: 10px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(194,195,214,0.15);
    padding: 2px;
    transition: 0.1s;
  }

  .button-sub:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
    border-color: rgba(194,195,214,0.7);
  }

  .button-sub:hover div {
    background: rgba(194,195,214,0.4);
  }

  a {
    text-decoration: none;
    color: inherit;
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
    <div class="button-sub"><a href="http://instagram.com/tabootakeover"><div>COMMUNITY</div></a></div>
    <div class="button-sub"><a href="http://twitter.com/tabootakeover"><div>ANNOUNCEMENTS</div></a></div>
    <div class="button-sub"><a href="http://instagram.com/sandytaboo"><div>INSTAGRAM</div></a></div>
    <div class="button-sub"><a href="http://twitter.com/sandytaboo"><div>TWITTER</div></a></div>
    <div class="button-sub"><a href="http://youtube.com/sandytaboo"><div>YOUTUBE</div></a></div>
    <div class="button-sub"><a href="http://soundcloud.com/sandytaboo"><div>SOUNDCLOUD</div></a></div>
  </div>
</div>