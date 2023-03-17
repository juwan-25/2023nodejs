//모듈 : 짝홀 판단

//짝홀 출력 불어와서 사용하기
const {text_odd, text_even} = require("./moduleText");
function checkOddOrEven(num) {
    if(num%2){
        return text_odd;
    } 
    return text_even;

}
module.exports = checkOddOrEven;