var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 2;
var b = 2;
var c = 3;
// c = "qwerty";
function plus(x, y) {
    return x + y;
}
var result = plus(a, c);
console.log(result);
//result = plus("qwerty", "qwerty");
//console.log(result);
var Arith = /** @class */ (function () {
    // Конструктор и методы не перегужается
    //constructor() {
    //	this.x = 0;
    //	this.y = 0;
    //}
    function Arith(x, y) {
        this.x = x;
        this.y = y;
    }
    Arith.prototype.plus = function () {
        return this.x + this.y;
    };
    //plus(x: number, y:number): number {
    //	return x + y;
    //}
    Arith.prototype.minus = function () {
        return this.x - this.y;
    };
    return Arith;
}());
var arith = new Arith(111, 112);
//arith.x = 123;
//arith.y = 678;
console.log(arith.plus());
console.log(arith.minus());
var ArithExtended = /** @class */ (function (_super) {
    __extends(ArithExtended, _super);
    function ArithExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArithExtended.prototype.mult = function () {
        return this.x * this.y;
    };
    return ArithExtended;
}(Arith));
var ae = new ArithExtended(333, 777);
console.log(ae.mult());
