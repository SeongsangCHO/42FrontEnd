let map = new Map();

map.set("1", "문자형 키");
map.set(1, "숫자형 키");
map.set(true, "불린형 키");

console.log(map);

let chaning = new Map();

chaning.set(1, '1').set(2, '2').set(3, '3');

console.log(chaning);


console.log(chaning.keys());
console.log(chaning.values());
console.log(chaning.entries());


for (let key of chaning.keys())
  console.log(key);
  
for (let value of chaning.values())
console.log(value);

for (let entry of chaning)
  console.log(entry);
  

let obj = {
  name: "secho",
  status: "hungry",
};

let map2 = new Map(Object.entries(obj));
console.log(map2);

let obj2 = Object.fromEntries(map2);
console.log(obj2);
