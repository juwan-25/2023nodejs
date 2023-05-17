const express = require('express');
const http = require('http');
const app = express();

const bodyParser = require('body-parser');
const static = require('serve-static');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어에서 요청을 처리함');
    
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에 응답 결과</h1>');
    res.write('<div><p>paramId : ' + paramId + '</p></div>');
    res.write('<div><p>param name : ' + paramPassword + '</p></div>');
    res.end();
});

http.createServer(app).listen(3000, function(){
    console.log('http://localhost:3000');
});