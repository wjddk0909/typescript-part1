// 함수의 파라미터에 타입을 정의 하는 방식
function sum(a: number, b: number) {
    return a + b
}
sum(10, 20);

// 함수의 반환값에 타입을 정의하는 방식
function add(): number { // 함수안의 로직에 리턴값이 없으면 에러를 띄워줌
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b
}