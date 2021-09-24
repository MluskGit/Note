/**
 * 棋格
 */
class OthelloCell {
    //type 0空 1白 2黑
    private _type: number = 0;
    private readonly _x: number;
    private readonly _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    set type(value: number) {
        this._type = value;
    }

    get type(): number {
        return this._type;
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }
}