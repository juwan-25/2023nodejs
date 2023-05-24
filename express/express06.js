const express = require('express');
const http = require('http');
const app = express();

const bodyParser = require('body-parser');
const static = require('serve-static');
const path = require('path');
const expressErrorHandler = require('express-error-handler');
const router = express.Router();

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());

app.use(static(path.join(__dirname, 'public')));

app.use(cookieParser()); 
app.use(expressSession({
    secret:'my key',
    resave:true,
    saveUninitialized:true
}));

router.route('/').get(function(req, res) {
    res.redirect('/index.html');
});

router.route('/process/login').post(function(req, res) {
    console.log('/process/login 호출됨.');
    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    if (req.session.user) {
        console.log('이미 로그인되어 상품 페이지로 이동합니다.');
        res.redirect('/product.html');
    } else {
        req.session.user = {
        id: paramId,
        name: '주완',
        authorized: true}
    }

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>로그인 성공</h1>');
    res.write('<div><p>Param id : ' + paramId + '</p></div>');
    res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
    res.write("<br><br><a href='/process/product'><button type='button'>상품페이지로 이동하기</button></a>");
    res.end();
});

router.route('/process/logout').get(function(req, res) {
    console.log('/process/logout 호출됨.');
    if (req.session.user) {
        console.log('로그아웃합니다.');
        req.session.destroy(function(err) {
            if (err) {throw err;}
            console.log('세션을 삭제하고 로그아웃되었습니다.');
            res.redirect('/login2.html');
        });
    } else {
        console.log('아직 로그인되어있지 않습니다.');
        res.redirect('/login2.html');
    }
}); 

router.route('/process/product').get(function(req, res) {
    console.log('/process/product 호출됨.');
    if (req.session.user) {
        res.redirect('/product.html');
    } else {
       res.redirect('/login2.html');
    }
}); 

router.route('/process/setUserCookie').get(function(req, res) {
    console.log('/process/setUserCookie 호출됨.');

    res.cookie('user', {
        id: 'juwan',
        name: '주완', 
        authorized: true
    });

    res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
    console.log('/process/showCookie 호출됨.');
    res.send(req.cookies);
});

app.use('/', router);

// 등록되지 않은 요청 패스일 경우 오류 페이지
const errorHandler = expressErrorHandler({
    static: {
    '404': './public/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler ); 

http.createServer(app).listen(3000, function(){
    console.log('http://localhost:3000');
});