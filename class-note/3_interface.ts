interface User {
    age: number;
    name: string;
}

// 변소에 인터페이스 활용
const ellin: User = {
    age: 33,
    name: 'Ellin'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const ja = {
    name: 'jungah',
    age: 35
}
getUser(ja);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    // 인자 a, b를 받고 각 인자의 데이터타입은 number, 그리고 반환값도 number이다.
    (a: number, b: number): number
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];
arr[0] = 10