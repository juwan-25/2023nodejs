//구조분해 할당
const example = {a:123, b:{c:11, d:16}};
const {a,b:{d}} = example;
console.log(a,d);

arr = [1,2,3,4,5];
// const x = arr[0];
// const y = arr[2];
// const z = arr[4];
const [x,,y,,z] = arr;

console.log(x,y,z);
