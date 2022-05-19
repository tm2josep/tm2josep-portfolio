class BooleanTileGrid {
    constructor(width, height, tileSize) {
        this.width = Math.floor(width / tileSize);
        this.height = Math.floor(height / tileSize);
        this.tileSize = tileSize;

        this._grid = [];
        for (let i = 0; i < this.width; i++) {
            const row = [];
            for (let j = 0; j < this.height; j++) {
                row.push(false);
            }
            this._grid.push(row);
        }
    }

    set grid(newGrid) {
        this._grid = newGrid;
    }

    get grid() {
        return [...this._grid];
    }

    wrapAround(x, y) {
        // wraparound
        x = (x + this.width) % this.width;
        y = (y + this.height) % this.height;
        return [x, y];
    }

    setValue(x, y, cellValue) {
        [x, y] = this.wrapAround(x, y);
        this._grid[x][y] = cellValue;
    }

    getValue(x, y) {
        [x, y] = this.wrapAround(x, y);
        return this._grid[x][y]
    }

    show(context, trueColor='white', falseColor='black') {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                const cell = this.getValue(i, j);
                if (falseColor === false && cell === false) {
                    continue;
                }
                
                context.fillStyle = cell ? trueColor : falseColor;
                context.fillRect(i*this.tileSize, j*this.tileSize, this.tileSize, this.tileSize);
            }
        }
    }
}

export default BooleanTileGrid