//모듈 : 문자열 짝홀 판단, 배열로 내보내기

//짝홀 출력, 짝홀 판단 불러와서 사용하기 - 이름 변경가능
const {text_odd, text_even} = require("./moduleText");
const checkNumberFunc = require("./modulefunc");

function checkStringOddOrEven(str) {
    if(str.length%2){
        return text_odd;
    } 
    return text_even;
}

console.log("userModule : ",checkNumberFunc(10));
console.log("userModule : ",checkStringOddOrEven('Hello'));

module.exports = [checkStringOddOrEven,checkNumberFunc,text_odd,text_even];