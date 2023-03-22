//비동기 방식
const fs = require('fs');

let readData = "읽어오지 못했습니다:(";
//파일 읽어오기
fs.readFile("./readText.txt", (err,data)=>{
    if(err){
        throw err;
    }
    console.log(data); //버퍼 값을 가져옴
    console.log(data.toString()); //버퍼 값을 문자열로 변환
    readData = data.toString();
});

//파일 쓰기
fs.writeFile("./writeText.txt", ("읽어온 데이터 : "+readData),(err)=>{
    if(err){
        throw err;
    }
    console.log("파일쓰기 완료!!");
});
