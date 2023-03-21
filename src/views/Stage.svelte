<script lang="ts">
  import Tile from "./Tile.svelte"
  import { Stage } from "../service/model/stage"
  const stage = new Stage(4)
</script>
<div id="stage">
  {#each stage.tiles as tileLine , y}
    {#each tileLine as tile, x}
      <Tile x={x*50} y={y*50} n={tile}/>
    {/each}
  {/each}
</div>
<style lang="scss">
  #stage {
    position: relative;
    border: solid 1px black;
    height: 200px;
    width: 200px;
  }
</style>