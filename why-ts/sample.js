// function sum(a, b) {
//     return a + b;
// }
//
// sum(10, '20'); // 1020

// 자바스크립트는 숫자와 문자를 더하면 전부다 문자로 취급
// 타입스크립트를 사용하면 a와 b에 모두 숫자만 들어오게 정의할 수 있다.

// @ts-check

/**
 *
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */
function sum(a, b){
    return a + b;
}

sum(10, 20);
sum(10, '20');