//동기 방식 - readFileSync, writeFileSync
const fs = require('fs');

let readData = "읽어오지 못했습니다:(";
//파일 읽어오기
let data = fs.readFileSync("./readText.txt");
console.log(data?.toString());
readData = data?.toString();

//파일 쓰기
let data2 = fs.writeFileSync("./writeText2.txt",("읽어온 데이터 : "+readData));
console.log("data2 : "+data2); //return값 없음 : undefined

let data3 = fs.readFileSync("./writeText2.txt");
console.log(data3?.toString());
readData = data3?.toString();