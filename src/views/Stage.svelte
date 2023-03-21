<script lang="ts">
  import Tile        from "./Tile.svelte"
  import { Stage }   from "../service/model/stage"
  import { browser } from "$app/environment"
  let stage: Stage|undefined
  if (browser) {
    stage = new Stage(4)
  }
</script>
{#if stage !== undefined}
  <div id="stage">
    {#each stage.tiles as tileCol, x}
      {#each tileCol as n, y}
        <Tile x={x*50} y={y*50} n={n}/>
      {/each}
    {/each}
  </div>
{/if}
<style lang="scss">
  #stage {
    position: relative;
    border: solid 1px black;
    height: 200px;
    width: 200px;
  }
</style>