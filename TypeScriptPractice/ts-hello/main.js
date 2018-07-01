// Variable declaration
var a;
var e;
var f = [1, 'a', false];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var bgColor = Color.Red;
var message;
message = 'Hello World B';
;
var noInsensiType = message.endsWith('World');
var endsWithC = message.endsWith('d');
var alternativeWay = message.endsWith('d');
console.log(message);
// Function declaration
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally:" + i);
}
doSomething();
function log(message) {
    console.log(message);
}
var logAlt = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    // ...
};
drawPoint({ x: 1, y: 2 });
// Classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
        // ...
    };
    Point.prototype.getDistance = function (pointA, pointB) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
