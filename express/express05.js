const express = require('express');
const http = require('http');
const app = express();

const bodyParser = require('body-parser');
const static = require('serve-static');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use('/public', static(path.join(__dirname, 'public')));

const router = express.Router();

router.route('/process/login/:name').post(function(req, res) {
    console.log('/process/login/:name 처리함.');

    var paramName = req.params.name;
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name : ' + paramName + '</p></div>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/public/login3.html'>로그인 페이지로 돌아가기</a>");
    res.end();
});

app.use('/', router);

// 등록되지 않은 요청 패스일 경우 오류 페이지
app.all('*', function(req, res) {
    res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
});

http.createServer(app).listen(3000, function(){
    console.log('http://localhost:3000');
});