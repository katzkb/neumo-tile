export class Stage {
  tiles: number[][] = [][0]

  constructor (size: number) {
    // 指定サイズで初期化
    this.tiles = Array.from(new Array(size), () => new Array(size).fill(0))
    // ランダム生成処理
  }

  move() {
    this.tiles.map(tile => {
      //
    })
  }
}