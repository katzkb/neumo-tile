<script lang="ts">
  export let x: number
  export let y: number
</script>
<div class="tile" style="left:{x}px; top:{y}px;">
  <div class="number">2</div>
</div>
<style lang="scss">
  .tile {
    position: absolute;
    display: flex;
    box-sizing: border-box;
    margin: 2px;
    border: solid 1px black;
    height: 46px;
    width:  46px;
    align-items: center;
    justify-content: center;
  }
</style>
