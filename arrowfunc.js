//일반 화살표 함수
func_arrow1 = (str) => {
    return "출력 1 : "+str;
};

//화살표 함수 : 매개변수 1개
func_arrow2 = str => {
    return "출력 2 : "+str;
};

//화살표 함수 : 리턴문 1개
func_arrow3 = str =>  "출력 3 : "+str;

console.log(func_arrow1('fa1'));
console.log(func_arrow2('fa2'));
console.log(func_arrow3('fa3'));