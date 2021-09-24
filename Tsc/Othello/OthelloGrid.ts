/**
 * 棋盘
 */
class OthelloGird {
    private _row: number = 8;
    private _col: number = 8;

    private _cells: OthelloCell[][] = [];

    constructor() {
        for (let i = 0; i < this._row; i++) {
            this._cells[i] = [];
            for (let j = 0; j < this._col; j++) {
                let cell = new OthelloCell(i, j);
                this._cells[i][j] = cell;
            }
        }
        //[3,3]白 [3,4] 黑
        //[4,3]黑 [4,4] 白

        this._cells[3][3].type = 1;
        this._cells[3][4].type = 2;
        this._cells[4][3].type = 2;
        this._cells[4][4].type = 1;
    }

    /**
     * 是否可以下子
     * @param {number} x
     * @param {number} y
     * @returns {boolean}
     */
    checkIsCanPlay(x: number, y: number, type: number): boolean {
        let cell = this._cells[x][y];
        if (cell.type == 0) {
            let check1 = this.checkRow(x, y, type);
            let check2 = this.checkCol(x, y, type);
            let check3 = this.checkDiagonallyUp(x, y, type);
            let check4 = this.checkDiagonallyDown(x, y, type);
            return check1.length > 0 || check2.length > 0 || check3.length > 0 || check4.length > 0
        }

        return false;
    }

    /**
     * 检查行
     * @param {number} x
     * @param {number} y
     * @param {number} type
     * @returns {boolean}
     */
    private checkRow(x: number, y: number, type: number): number[] {
        for (let i = x + 1; i < this._row; i++) {
            let checkCell = this._cells[i][y];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && i - x >= 2) {
                return [i, y];
            }
        }
        for (let i = x - 1; i >= 0; i--) {
            let checkCell = this._cells[i][y];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && x - i >= 2) {
                return [i, y];
            }
        }
        return [];
    }

    /**
     * 检查列
     * @param {number} x
     * @param {number} y
     * @param {number} type
     * @returns {boolean}
     */
    private checkCol(x: number, y: number, type: number): number[] {
        for (let i = y + 1; i < this._col; i++) {
            let checkCell = this._cells[x][i];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && i - y >= 2) {
                return [x, i];
            }
        }
        for (let i = y - 1; i >= 0; i++) {
            let checkCell = this._cells[x][i];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && y - i >= 2) {
                return [x, i];
            }
        }
        return [];
    }

    /**
     * 检查斜向上
     * @param {number} x
     * @param {number} y
     * @param {number} type
     * @returns {boolean}
     */
    private checkDiagonallyUp(x: number, y: number, type: number): number[] {
        for (let i = x + 1, j = y - 1; i < this._row, j >= 0; i++, j--) {
            let checkCell = this._cells[i][j];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && x - i >= 2) {
                return [i, j];
            }
        }

        for (let i = x - 1, j = y + 1; i >= 0, j < this._col; i--, j++) {
            let checkCell = this._cells[i][j];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && i - x >= 2) {
                return [i, j];
            }
        }
        return [];
    }

    /**
     * 检查斜向下
     * @param {number} x
     * @param {number} y
     * @param {number} type
     * @returns {boolean}
     */
    private checkDiagonallyDown(x: number, y: number, type: number): number[] {
        for (let i = x + 1, j = y + 1; i < this._row, j < this._col; i++, j++) {
            let checkCell = this._cells[i][j];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && x - i >= 2) {
                return [i, j];
            }
        }

        for (let i = x - 1, j = y - 1; i >= 0, j >= 0; i--, j--) {
            let checkCell = this._cells[i][j];
            if (checkCell.type == 0) {
                break;
            }
            if (checkCell.type == type && i - x >= 2) {
                return [i, j];
            }
        }
        return [];
    }

}