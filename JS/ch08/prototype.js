function Person() {}
Person.prototype.eyes = 2;
Person.prototype.nose = 1;
var kim  = new Person();
var park = new Person();
  
console.log(kim.eyes); // => 2

kim.eyes = 'kim`s eyes';
park.eyes = 'park`s eyes';

console.log(kim.eyes);
console.log(park.eyes);

