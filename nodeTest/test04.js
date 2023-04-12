const myText = "내말이 그말이오";
const yourText = "그말이 내말이오";

function myFunc(){
    console.log("myFunc를 호출했습니다.");
    return "myFuncData : "+myText;
}

module.exports = [myText,yourText,myFunc];