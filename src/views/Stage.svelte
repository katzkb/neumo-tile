<script lang="ts">
  import Tile from "./Tile.svelte"
</script>
<div id="stage">
  <Tile x=0   y=0/>
  <Tile x=50  y=0/>
  <Tile x=150 y=0/>
</div>
<style lang="scss">
  #stage {
    position: relative;
    border: solid 1px black;
    height: 200px;
    width: 200px;
  }
</style>