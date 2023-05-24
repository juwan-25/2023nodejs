const express = require('express');
const http = require('http');
const app = express();
const multer = require('multer');
const fs = require('fs');

const bodyParser = require('body-parser');
const static = require('serve-static');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, 'uploads')));

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
        //callback(null, file.originalname)
        var extension = path.extname(file.originalname);
        var basename = path.basename(file.originalname);
        callback(null, basename + Date.now() + extension);
    }
});

var upload = multer({ 
    storage: storage,
    limits: {
        files: 10,
        fileSize: 1024 * 1024 * 1024
    }
});
    

const router = express.Router();

router.route('/process/photomulti').post(upload.array('photo', 10), function(req, res) {
    console.log('/process/photomulti 호출됨.');            
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    try {
        var files = req.files;
        
        // 현재의 파일 정보를 저장할 변수 선언
        var originalname = '',
        filename = '',
        mimetype = '',
        size = 0;

        if (Array.isArray(files)) { 
            // 배열에 들어가 있는 경우 (설정에서 1개의 파일도 배열에 넣게 했음)
            console.log("배열에 들어있는 파일 갯수 : %d", files.length);

            for (var index = 0; index < files.length; index++) {
                console.dir(`#===== 업로드된 ${index+1}번째 파일 정보 =====#`);
                
                originalname = files[index].originalname;
                filename = files[index].filename;
                mimetype = files[index].mimetype;
                size = files[index].size;

                console.log('현재 파일 정보 : ' + originalname + ', ' + filename + ', ' + mimetype + ', ' + size);
    
                res.write(`<h1>${index+1}번째 파일 업로드 성공</h1>`);
                res.write('<hr/>');
                res.write('<p>원본 파일명 : ' + originalname + '-> 저장 파일명 : '+ filename +'</p>');
                res.write('<p>MIME TYPE : ' + mimetype +'</p>');
                res.write('<p>파일 크기 : ' + size +'</p>');
            }
            res.end();
        } 


    } catch(err) {
        console.dir(err.stack);
    }
});

app.use('/', router);

http.createServer(app).listen(3000, function(){
    console.log('http://localhost:3000');
});