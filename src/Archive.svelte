<script>
  import { blurBg, fullImage } from "./stores.js"
  import Button from "./Button.svelte"
	import { link } from 'svelte-routing'
  import { onDestroy, onMount } from 'svelte';

  let mouseStartPos = [0,0]

  onMount(async () => { $blurBg = true })
  onDestroy(async () => { $blurBg = false })

  let data = archiveData
  
  let selCat = Object.keys(data)[0]
  let selYear = Object.keys(data[selCat]).reverse()[0]

  function selectYear(year) {
    document.querySelectorAll(".project-content").forEach(e => {
      e.classList.add("expanded")
    })
    document.querySelectorAll(".project-indicator").forEach(e => {
      e.classList.add("plus")
    })
    selYear = year

    document.querySelectorAll(".images").forEach(e => {
      e.scrollLeft = 0
    })
  }

  function selectCategory(category) {
    document.querySelectorAll(".project-content").forEach(e => {
      e.classList.add("expanded")
    })
    document.querySelectorAll(".project-indicator").forEach(e => {
      e.classList.add("plus")
    })
    if (selCat == category) return
    selCat = category
    selYear = Object.keys(data[selCat]).reverse()[0]

    document.querySelectorAll(".images").forEach(e => {
      e.scrollLeft = 0
    })
  }

  function toggleExpand(e) {
    let project = e.nextElementSibling
    e.querySelector(".project-indicator").classList.toggle("plus")
    project.classList.toggle("expanded")
  }

  // drag-scroll on archive-images
  let ele
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  const mouseDownHandler = function (e) {
    if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) return
    ele = e.currentTarget
    pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = e => {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;
    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }

</script>

<!-- <svelte:window on:mousedown={mouseDownHandler} /> -->

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
    z-index: 2;
    position: absolute;
    display: grid;
    justify-content: center;
    width: 100%;
  }

  #back {
    position: absolute;
    top: 0;
    left: 0;
  }

  .button-head {
    font-family: eurostile-extended;
    width: 140px;
    height: 22px;
    margin-top: 10px;
    border: 1px solid rgb(194,195,214);
    padding: 2px;
    transition: 0.1s;
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
    width: 145px;
    height: 26px;
    margin-top: 10px;
    border: 1px solid rgba(194,195,214,0.15);
    padding: 2px;
    transition: 0.1s;
  }

  .button-head.category.selected, .button-head.category:hover {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
  }

  .button-head.category:hover div, .button-head.category.selected div {
    background: rgba(194,195,214,0.4);
  }

  .button-sub:hover, .button-sub.selected {
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
    text-shadow: 0px 0px 5px white;
    border-color: rgba(194,195,214,0.7);
  }

  .button-sub:hover div, .button-sub.selected div {
    background: rgba(194,195,214,0.4);
  }


  #archive-view {
    padding-top: 60px;
    width: 100%;
    height: calc(100% - 60px);
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  #sidebar {
    margin: -10px 0px 0px 0px;
    width: 100%;
    overflow-y: auto;
    padding-right: 20px;

  }

  #sidebar .button-head, #sidebar .button-sub {
    width: 144px;
    cursor: pointer;
  }
  
  #sidebar #years {
    margin-top: 20px;
  }

  #content {
    width: 100%;
    height: 100%;
		border-top: 7px solid rgb(126,129,168);
		border-bottom: 7px solid rgb(126,129,168);
		border-left: 2px solid rgb(126,129,168);
		border-right: 2px solid rgb(126,129,168);
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .project {
    display: grid;
    grid-template-rows: auto auto;
    margin-bottom: 10px;
  }

  #content .project-row {
    font-family: eurostile-extended;
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-gap: 15px;
    cursor: pointer;
  }

  .project-row .project-indicator, .project-row .project-head {
    border: 1px solid rgb(194,195,214);
    padding: 2px;
    height: 30px;
  }

  .project-row .project-indicator {
    width: 100%;
    position: relative;
    transition: 0.1s;
  }

  .project-indicator::before {
    content: "+";
    font-size: 1.5em;
    position: absolute;
    top: -1px;
    left: 7px;
  }

  .project-indicator.plus::before {
    content: "-";
    font-size: 1.6em;
    position: absolute;
    top: -4px;
    left: 13px;
  }

  .project-indicator div, .project-head div, .side-guide div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 5px;
    background: rgba(194,195,214,0.15);
    transition: 0.1s;
  }
  
  .project-row:hover .project-indicator div {
    background: rgba(194,195,214,0.4);
  }

  .project-row:hover .project-indicator {
    text-shadow: 0px 0px 5px white;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  }

  /* content under the heading */
  .project-content {
    height: 0px;
    display: grid;
    grid-template-columns: 30px 1fr;
    overflow: auto;
    transition: height 0.2s;
    overflow-y: hidden;
  }

  .project-content.expanded {
    height: 410px;
  }

  .project-content .side-guide {
    margin-top: 10px;
    border: 1px solid rgb(194,195,214);
    padding: 2px;
    width: 30px;
  }

  .project-content .images-and-description {
    margin-top: 10px;
    margin-left: 15px;
    height: 400px;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-gap: 5px;
  }

  .images {
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
  }

  .project-content .description {
    font-family: eurostile-extended;
    font-size: 0.7em;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }

  .project-content img {
    user-select: none;
    cursor: pointer;
    height: 100%;
    width: auto;
  }

  @media screen and (max-width: 840px) {
    #archive-view {
      display: grid;
      grid-template-rows: 80px auto;
      grid-template-columns: auto;
    }
    #categories {
      display: grid;
      grid-template-columns: auto auto auto;
      justify-content: space-between;
      height: 20px;
    }
    #years {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-bottom: 5px;
      overflow: auto;
      scrollbar-width: thin;
    }
    #content {
      width: 100%;
      height: 100%;
      margin-left: 0px;

    }
  }

  

</style>

<div id="mission-wrap">
  <div id="top-bar">
    <a id="back" href="/" use:link><Button>BACK</Button></a>
    <div class="button-head"><div>ARCHIVE</div></div>
  </div>
  <div id="archive-view">
    <div id="sidebar">
      <div id="categories">
        {#each Object.keys(data) as category}
          <div class="button-head category" class:selected={ category == selCat } on:click={() => selectCategory(category)}>
            <div>{category}</div>
          </div>
        {/each}
      </div>

      <div id="years">
        {#if selCat != ""}
        {#each Object.keys(data[selCat]).reverse() as year}
          <div class="button-sub" class:selected={selYear == year} on:click={() => selectYear(year)}><div>{year}</div></div>
        {/each}
        {/if}
      </div>
    </div>
    <div id="content">
      {#if selYear != null}
      {#each Object.keys(data[selCat][selYear]) as project}
      <div class="project">

        <div class="project-row" on:click={e => {toggleExpand(e.currentTarget)}}>
          <div class="project-indicator plus">
            <div></div>
          </div>
          <div class="project-head">
            <div>{project}</div>
          </div>
        </div>

        <div class="project-content expanded">
          <div class="side-guide"><div></div></div>
          <div class="images-and-description">
            <div class="images" on:mousedown={mouseDownHandler}>
              {#each data[selCat][selYear][project]["thumbnails"] as src, i}
              <img ondragstart="return false" draggable="false" {src}
                on:mousedown={e => {
                  if (e.button != 0) return
                  mouseStartPos = [e.pageX, e.pageY]
                }}
                on:mouseup={e => {
                  const mouseMoveDiff = [
                    Math.abs(e.pageX - mouseStartPos[0]),
                    Math.abs(e.pageY - mouseStartPos[1])
                  ]
                  if (mouseMoveDiff[0] < 10 && mouseMoveDiff[1] < 10) {
                    $fullImage = [data[selCat][selYear][project]["full"], i, data[selCat][selYear][project]["full"].length]
                  }
                }} alt="project">
              {/each}
            </div>
            <div class="description">
              {data[selCat][selYear][project]["description"]}
            </div>
          </div>
        </div>

      </div>
      {/each}
      {/if}
    </div>
  </div>
</div>