export class Stage {
  size:           number     = 4
  tiles:          number[][] = [][0]
  initialTileNum: number     = 3

  constructor (size: number) {
    // 指定サイズで初期化
    this.tiles = Array.from(new Array(size), () => new Array(size).fill(0))
    // ランダム生成処理
    this.size = size
    this.setRandom(this.initialTileNum)
  }

  /**
   * ランダムな座標に指定個数だけ初期タイルを設置する
   * @param cnt 設置個数
   */
  private setRandom(cnt: number) {
    for (let i = 0; i < cnt; i++) {
      const x: number = Math.floor(Math.random() * this.size)
      const y: number = Math.floor(Math.random() * this.size)
      if (this.tiles[x][y] !== 0) {
        i -= 1
        continue
      }
      this.tiles[x][y] = 2
    }
  }

  move() {
    this.tiles.map(tile => {
      //
    })
  }
}