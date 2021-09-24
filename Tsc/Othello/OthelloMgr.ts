class OthelloMgr {
    private static _ins: OthelloMgr;

    private _othello: OthelloGird;

    constructor() {
        this._othello = new OthelloGird();
    }

    public static ins(): OthelloMgr {
        if (!this._ins) {
            this._ins = new OthelloMgr()
        }
        return this._ins
    }

    //下子
    play(x: number, y: number, type: number) {
        if (type == 0) {
            console.log('不能下空子');
            return
        }

        if (this._othello.checkIsCanPlay(x, y, type)) {
            let cell = new OthelloCell(x, y);
            cell.type = type;
            this._othello[x][y] = cell;
            // this.change(x, y)
        }
    }

    change(x: number, y: number) {

    }

}