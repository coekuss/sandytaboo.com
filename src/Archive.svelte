<script>
  import { blurBg, fullImage } from "./stores.js"
  import Button from "./Button.svelte"
	import { link } from 'svelte-routing'
  import { onDestroy, onMount } from 'svelte';

  let mouseStartPos = [0,0]

  onMount(async () => { $blurBg = true;

		document.querySelectorAll(".images").forEach(elem => {
      console.log(elem)
      new ScrollBooster({
        viewport: elem,
        content: elem.querySelector('.images-inner'),
        scrollMode: 'native',
        direction: 'horizontal'
      }); 
    })
  })
  onDestroy(async () => { $blurBg = false })
  
  let data = {
    "PROJECTS": {
      2020: {
        "Virtual Ascension": {
          "thumbnails": [
            "archive/projects/2020 - Virtual Ascension/1.vaproduct.jpeg",
            "archive/projects/2020 - Virtual Ascension/2.vaproduct1.JPG",
            "archive/projects/2020 - Virtual Ascension/3.vaskndlss1.jpg",
            "archive/projects/2020 - Virtual Ascension/4.vataboo1.jpg",
          ],
          "full": [
            "archive/projects/2020 - Virtual Ascension/full/1.vaproduct.jpeg",
            "archive/projects/2020 - Virtual Ascension/full/2.vaproduct1.JPG",
            "archive/projects/2020 - Virtual Ascension/full/3.vaskndlss1.JPG",
            "archive/projects/2020 - Virtual Ascension/full/4.vataboo1.JPG",
          ],
          "description": "In collaboration with SKNDLSS"
        }
      },
      
      2019: {
        "Bae Blade": {
          "thumbnails": [
            "archive/projects/2019 - Bae Blade/1.baefront.jpg",
            "archive/projects/2019 - Bae Blade/2.baeback.jpg",
            "archive/projects/2019 - Bae Blade/3.trade.jpg",
          ],
          "full": [
            "archive/projects/2019 - Bae Blade/full/1.baefront.jpg",
            "archive/projects/2019 - Bae Blade/full/2.baeback.jpg",
            "archive/projects/2019 - Bae Blade/full/3.trade.jpg",
          ],
          "description": "In collaboration with SKNDLSS"
        },
        "Mirrored Collection": {
          "thumbnails": [
            "archive/projects/2019 - Mirrored Collection/1.MirrorCollection.jpg",
            "archive/projects/2019 - Mirrored Collection/2.TribalHairClip.jpg",
            "archive/projects/2019 - Mirrored Collection/3.TabooHairClip.jpg",
            "archive/projects/2019 - Mirrored Collection/4.NinjaStar.jpg",
            "archive/projects/2019 - Mirrored Collection/5.NinjaStarEarrings.jpg",
          ],
          "full": [
            "archive/projects/2019 - Mirrored Collection/full/1.MirrorCollection.jpg",
            "archive/projects/2019 - Mirrored Collection/full/2.TribalHairClip.jpg",
            "archive/projects/2019 - Mirrored Collection/full/3.TabooHairClip.jpg",
            "archive/projects/2019 - Mirrored Collection/full/4.NinjaStar.jpg",
            "archive/projects/2019 - Mirrored Collection/full/5.NinjaStarEarrings.jpg",
          ],
          "description": "In collaboration with Michele Yue"
        }
      },
      2018: {
        "Taboo Juggalo Shirt": {
          "thumbnails": [
            "archive/projects/2018 - Taboo Juggalo Shirt/1.shirt.jpg",
            "archive/projects/2018 - Taboo Juggalo Shirt/2.lookbook4.JPG",
            "archive/projects/2018 - Taboo Juggalo Shirt/3.lookbook1.JPG",
            "archive/projects/2018 - Taboo Juggalo Shirt/4.lookbook3.JPG",
          ],
          "full": [
            "archive/projects/2018 - Taboo Juggalo Shirt/full/1.shirt.jpg",
            "archive/projects/2018 - Taboo Juggalo Shirt/full/2.lookbook4.JPG",
            "archive/projects/2018 - Taboo Juggalo Shirt/full/3.lookbook1.JPG",
            "archive/projects/2018 - Taboo Juggalo Shirt/full/4.lookbook3.JPG",
          ],
          "description": "Shot by Yuliss Benitez. Art by Isaidah E. Cruz."
        },
        "Taboo World Stickers": {
          "thumbnails": [
            "archive/projects/2018 - Taboo World Stickers/1.Sticker.jpg",
          ],
          "full": [
            "archive/projects/2018 - Taboo World Stickers/full/1.Sticker.jpg",
          ],
          "description": ""
        },
        "Taboo World Patches": {
          "thumbnails": [
            "archive/projects/2018 - Taboo World Patches/3.Patch.jpg",
          ],
          "full": [
            "archive/projects/2018 - Taboo World Patches/full/3.Patch.jpg",
          ],
          "description": ""
        }
      }
    },
    "CAMPAIGNS": {
      2022: {
        "Taboo Liner Reloaded Onyx Black": {
          "thumbnails": [
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/1.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/2.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/3.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/4.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/5.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/6.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/7.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/8.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/9.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/10.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/11.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/12.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/13.jpg"
          ],
          "full": [
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/1.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/2.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/3.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/4.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/5.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/6.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/7.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/8.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/9.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/10.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/11.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/12.jpg",
            "archive/campaigns/2022 - Taboo Liner Reloaded Onyx Black/full/13.jpg"
          ],
          "description": "Shot by Brian Vu"
        }
      },
      2021: {
        "Taboo Glue Pen": {
          "thumbnails": [
            "archive/campaigns/2021 - Taboo Glue Pen/tabooglue.jpg",
            "archive/campaigns/2021 - Taboo Glue Pen/tabooglue3.jpg",
            "archive/campaigns/2021 - Taboo Glue Pen/tabooglue4.jpg",
          ],
          "full": [
            "archive/campaigns/2021 - Taboo Glue Pen/full/tabooglue.jpg",
            "archive/campaigns/2021 - Taboo Glue Pen/full/tabooglue3.jpg",
            "archive/campaigns/2021 - Taboo Glue Pen/full/tabooglue4.jpg",
          ],
          "description": "Shot by Chris Vu"
        }
      }
    },
    "PRESS": {
      2021: {
        "Vogue": {
          "thumbnails": [
            "archive/press/2021 - Vogue/3.vogue2021.jpg",
            "archive/press/2021 - Vogue/4.vogue2021.jpg",
            "archive/press/2021 - Vogue/5.vogue2021.jpg"
          ],
          "full": [
            "archive/press/2021 - Vogue/full/3.vogue2021.jpg",
            "archive/press/2021 - Vogue/full/4.vogue2021.jpg",
            "archive/press/2021 - Vogue/full/5.vogue2021.jpg"
          ],
          "description": "Taboo Liner by Ryan Burke"
        }
      },
      2019: {
        "King Kong Magazine": {
          "thumbnails": [
            "archive/press/2019 - King Kong Magazine/kingkong.jpg",
          ],
          "full": [
            "archive/press/2019 - King Kong Magazine/full/kingkong.jpg",
          ],
          "description": "Shot by Brian Vu"
        },
        "Depop": {
          "thumbnails": [
            "archive/press/2019 - Depop/2.depop2019.jpg",
          ],
          "full": [
            "archive/press/2019 - Depop/full/2.depop2019.jpg",
          ],
          "description": ""
        }
      }
    }
  }

  $: if (selYear || selCat) {
    setTimeout(() => {
      document.querySelectorAll(".images").forEach(elem => {
        new ScrollBooster({
          viewport: elem,
          content: elem.querySelector('.images-inner'),
          scrollMode: 'native',
          direction: 'horizontal'
        }); 
    }, 100);
    })
  }

  let selCat = Object.keys(data)[0]
  let selYear = 2019

  function selectYear(year) {
    document.querySelectorAll(".project-content").forEach(e => {
      e.classList.add("expanded")
    })
    document.querySelectorAll(".project-indicator").forEach(e => {
      e.classList.add("plus")
    })
    selYear = year
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
  }

  function toggleExpand(e) {
    let project = e.nextElementSibling
    e.querySelector(".project-indicator").classList.toggle("plus")
    project.classList.toggle("expanded")
  }
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
    grid-template-columns: auto auto;
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
    grid-template-rows: 30px fit-content;
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
    grid-template-rows: 1fr fit-content;
    grid-gap: 5px;
  }

  .images {
    overflow: hidden;
    width: 100%;
  }

  .images-inner {
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
    height: 100%;
  }
  
  .project-content .description {
    font-family: eurostile-extended;
    font-size: 0.7em;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }

  .project-content img {
    cursor: pointer;
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
            <div class="images">
              <div class="images-inner">
                {#each data[selCat][selYear][project]["thumbnails"] as src, i}
                <img draggable="false" {src}
                  on:mousedown={e => {
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