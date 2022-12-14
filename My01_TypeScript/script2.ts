var a: number = 2;
var b: number = 2;
var c = 3;

// c = "qwerty";

function plus(x: number, y:number): number {
	return x + y;
}

var result: number = plus(a, c);
console.log(result);

//result = plus("qwerty", "qwerty");
//console.log(result);

class Arith {
	x: number;
	y: number;
	
	// Конструктор и методы не перегужается
	//constructor() {
	//	this.x = 0;
	//	this.y = 0;
	//}
	
	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
	
	plus(): number {
		return this.x + this.y;
	}
	
	//plus(x: number, y:number): number {
	//	return x + y;
	//}
	
	minus(): number {
		return this.x - this.y;
	}
}

var arith = new Arith(111, 112);
//arith.x = 123;
//arith.y = 678;
console.log(arith.plus())
console.log(arith.minus())

class ArithExtended extends Arith {
	
	mult() {
		return this.x * this.y;
	}
}

var ae = new ArithExtended(333, 777);
console.log(ae.mult());
