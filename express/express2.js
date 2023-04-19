

const express = require('express');
const app = express();

app.use((req, res)=>{
    //json 데이터로 내보내기
    let outputData = [];
    for(let i=0; i<3; i++){
        outputData.push({
            conut:i,
            name:`name-${i}`
        });
    }
    res.status(200).send(outputData);
    //send() 매개변수에 따라 적절한게 응답
});

app.listen(3000, ()=>{
    console.log("서버 실행중... http://localhost:3000");
});