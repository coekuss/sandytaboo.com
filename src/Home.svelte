<script>
	import { link } from 'svelte-routing'
  import Button from './Button.svelte'
</script>

<style>
  #menu {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
  }

  #menu-inner {
    width: 100%;
    display: grid;
    grid-template-columns: 150px 150px 150px 150px 150px;
    justify-content: space-between;

  }

  .button {
    height: 55px;
  }

  @media screen and (max-width: 840px) {
    #menu-inner {
      width: 500px;
      justify-content: center;
      grid-gap: 10%;
    }

    .mission {
      transform: translate(210px, 718px)
    }

    .archive {
      transform: translate(-210px, 718px)
    }
    
  }

</style>

<div id="menu">
  <div id="menu-inner">
    <a class="button mission" href="/mission" use:link><Button>MISSION</Button></a>
    <a class="button bio" href="/bio" use:link><Button>BIO</Button></a>
    <a class="button shop" href="https://shop.sandytaboo.com/"><Button>SHOP</Button></a>
    <a class="button socials" href="/socials" use:link><Button>SOCIALS</Button></a>
    <a class="button archive" href="/archive" use:link><Button>ARCHIVE</Button></a>
  </div>

</div>