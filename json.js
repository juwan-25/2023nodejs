const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);

console.log(JSON.stringify({x:5, y:6}));