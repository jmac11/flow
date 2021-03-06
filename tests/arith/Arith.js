
/* @providesModule Arith */

function num(x:number) { }

function str(x:string) { }

function foo() {
  var x = 0;
  var y = "...";
  var z = {};
  num(x+x);
  num(x+y); // error
  str(x+y);
  str(x+x); // error
  str(z+y);
  str(x+z);
}

// test MaybeT(NumT)
function bar(x: ?number, y: number) {
  num(x + y);
}
function bar(x: number, y: ?number) {
  num(x + y);
}

// test OptionalT(NumT)
function bar(x?: number, y: number) {
  num(x + y);
}
function bar(x: number, y?: number) {
  num(x + y);
}

// test OptionalT(MaybeT(NumT))
function bar(x?: ?number, y: number) {
  num(x + y);
}
function bar(x: number, y?: ?number) {
  num(x + y);
}

num(null + null); // === 0
num(undefined + undefined); // === NaN

num(null + 1); // === 1
num(1 + null); // === 1
num(undefined + 1); // === NaN
num(1 + undefined); // === NaN

num(null + true); // === 1
num(true + null); // === 1
num(undefined + true); // === NaN
num(true + undefined); // === NaN

module.exports = "arith";
