interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const ellin: User = {
    age: 20,
    name: 'ellin'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const ellin1 = {
    name: 'ellin',
    age: 20
}
getUser(ellin1);

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
// arr[0] = 10

interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/, // css확장자로 끝나는 파일들
    jsFile: /\.js$/, // js확장자로 끝나는 파일들
}

obj['cssFile'] = 'a' // 이럴때 에러를 바로 잡아주는 것도 타입스크립트의 장점

Object.keys(obj).forEach(function (v) {
    console.log(v)
})


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

const ellin2: Developer = {
    name: 'elln',
    age: 20,
    language: 'ts'
}
