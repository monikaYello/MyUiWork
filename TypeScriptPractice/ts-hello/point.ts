// Modules (export)

// Classes
export class Point{
    // private x: number; //poperties with access modifieres
    // private y: number;

    constructor(private _x?: number, private _y?: number){ // ? make it optional
    }

    get x(){ // getter and setter, field
        return this._x;
    }
    set x(value){
        if (value < 0){
            throw new Error('value cannot be less than 0.');
        this._x = value;
        }
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y)
        // ...
    }

    getDistance(pointA: Point, pointB: Point){ // method
        // ...
    }
}