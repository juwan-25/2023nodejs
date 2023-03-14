//문자열 > JSON 객체 : parse
const jsonData = '{"result": true, "number": 42}';
const obj = JSON.parse(jsonData);

console.log(obj.number);
console.log(obj.result);

//JSON 객체 > 문자열 : stringify
console.log(JSON.stringify({x:4, y:2, result:true}));