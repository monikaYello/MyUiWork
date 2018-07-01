
// Variable declaration
let a: number
let e: number[]
let f: any[] = [1,'a', false]
enum Color {Red = 0, Green = 1, Purple = 2, Blue =3}
let bgColor = Color.Red;

var message
message = 'Hello World B'

interface String {    
    endsWith(searchString: string, endPosition?: number): boolean;
};
let noInsensiType = message.endsWith('World')
let endsWithC = (<string>message).endsWith('d')
let alternativeWay = (message as string).endsWith('d')

console.log(message)

// Function declaration
function doSomething(){
    for (var i =0; i<5; i++){
        console.log(i)
    }
    console.log("Finally:" + i)
}

doSomething()

function log(message){
    console.log(message)
}
let logAlt = function(message){
    console.log(message)
}

let doLog = (message) => console.log(message)

// Custom type - Interface
interface PointI{
    x: number;
    y: number;
    // drawI: () => void can't have implementations in interface
}
let drawPoint = (point:PointI) => {
    // ...
}
drawPoint({x:1, y:2})


import { Point } from './point';
let point = new Point(1,2); // object
point.x = 10; // property is getter and setter function in class
point.draw();



