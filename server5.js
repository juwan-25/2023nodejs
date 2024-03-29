//url searchParams 사용하기
const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const url = require('url');

const server = http.createServer(async (req, res)=>{
    try{
        console.log("URL : ",req.url);

        if(req.url == '/favicon.ico'){
            res.writeHead(404);
            res.end();
        } 
        
        //지정된 폴더의 파일 리스트를 읽어와서 본문 안에 넣기
        const songFolder = path.join(__dirname,"./textFile");
        console.log("내가 읽고 싶은 폴더 : ", songFolder);
        //해당 폴더 내 파일 정보 읽어오기
        const fileList = fs.readdir(songFolder);
        let fileListText = '<ul>';
        //성공시 콜백함수 작동 > file_list는 매개변수
        await fileList.then((file_list)=>{
            let li = 0;
            console.log("file_list", file_list);
            while(li < file_list.length){
                let numData = file_list[li].replace("song_","").replace(".txt","");
                fileListText += `<li><a href="/?data=${numData}">${numData}</a></li>`;
                li++;
            }
        })
        fileListText += '</ul>';
        
        const searchParams = new URL(req.url, "http://localhost:8088").searchParams;
        console.log("searchParams", searchParams);
        
        const param_data = searchParams.get("data") || "null";
        const fileName = path.join(__dirname, `./textFile/song_${param_data}.txt`);
        console.log("fileName", param_data,fileName);
        let fileData = await fs.readFile(fileName);
        let fileDataString = fileData.toString().replace(/\r/g, '<br>');
        console.log("텍스트 : ",fileDataString);

        const template =`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>노래</title>
            </head>
            <body>
                <h1><a href="/">노래</a></h1>
                ${fileListText}
                <br>
                ${fileDataString}
            </body>
        </html>
        `

        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        res.end(template);

    }catch(err){
        console.error(err);
        res.writeHead(500, {"Content-Type":"text/plain; charset=utf-8"});
        res.end(err.message);
    }

});

server.listen(8088);

server.on('listening', ()=>{
    console.log("8088 포트에서 서버 대기중...");
});

server.on('error', (error)=>{
    console.error(error);
});
