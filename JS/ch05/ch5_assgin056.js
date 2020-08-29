let powerCalc = new Calculator;

function Calculator() { 
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  }

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];
    
    return this.methods[op](a, b);
  }
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}


powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8