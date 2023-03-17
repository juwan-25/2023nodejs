//모듈 : 짝홀 출력

const text_odd = "홀수입니다";
const text_even = "짝수입니다";

console.log("1 : ");

// module.exports = {
//     text_odd,
//     text_even
// }

//이렇게 써도 됨
exports.text_odd = text_odd;
exports.text_even = text_even;

//이렇게는 안됨
// exports = {
//     text_odd,
//     text_even
// }