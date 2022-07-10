function sum(a: number, b: number): number { // a와 b는 number, 그리고 함수가 반환하는 값의 타입까지 number라고 정의
    return a + b;
}

sum(10, 20);
// sum(10, '20'); // 지정한 타입과 다른 타입의 값을 넣으면 에러가 남

const result = sum(10, 20);
result.toString();