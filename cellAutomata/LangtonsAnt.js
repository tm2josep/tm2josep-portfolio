class LangtonsAnt {
    constructor(position, color) {
        this.position = position
        this.direction = 0
        this.color = color
    }

    doTurn(tileGrid) {
        let grid = tileGrid.grid
        this.position.x = (this.position.x + grid.length) % grid.length
        this.position.y =
            (this.position.y + grid[this.position.x].length) %
            grid[this.position.x].length

        const cellValue = tileGrid.getValue(this.position.x, this.position.y)

        if (cellValue) {
            this.direction += 1
        } else {
            this.direction -= 1
        }

        tileGrid.setValue(this.position.x, this.position.y, !cellValue)
        this.moveForward()
    }

    moveForward() {
        this.direction = (this.direction + 4) % 4
        switch (this.direction) {
            case 0:
                this.position.x -= 1
                break
            case 1:
                this.position.y -= 1
                break
            case 2:
                this.position.x += 1
                break
            case 3:
                this.position.y += 1
                break
        }
    }

    show(context, tileSize) {
        context.fillStyle = this.color
        context.fillRect(
            this.position.x * tileSize,
            this.position.y * tileSize,
            tileSize,
            tileSize
        )
    }
}

export default LangtonsAnt