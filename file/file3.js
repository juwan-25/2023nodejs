const fs = require('fs').promises;

let readData = "읽어오지 못했습니다:(";

fs.readFile("./readText.txt")
    .then((data)=>{ //성공시에만 return 값이 있음
        console.log(data.toString());
        readData = data.toString();
        return fs.writeFile("./writeText3.txt", ("텍스트 3 : "+readData));
    }).then(()=>{
        return fs.readFile("./writeText3.txt");
    }).then((data3)=>{
        console.log("data3 : ",data3.toString());
    }).catch((err)=>{ //error를 잡기 위해서 catch 사용
        console.error(err);
    });