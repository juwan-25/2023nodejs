function scopeTest(someVal) {
    console.log("1 : ", typeof test_none);

    console.log("2-1 : ", typeof test_in_var);
    console.log("2-2 : ", typeof test_in_let);

    if(someVal) {
        // 블럭단위 함수
        console.log("3-1 : ", typeof test_in_var); // var는 호이스팅될 때 undefined로 초기화
        // console.log("3-2 : ", typeof test_in_let); > ReferenceError : let, const 일시적 사각지대에 놓임

        var test_in_var;
        let test_in_let;
        console.log("3-3 : ", typeof test_in_let); // undefined
    }
}
scopeTest(true);