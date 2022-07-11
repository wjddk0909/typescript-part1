// js 문자열 선언
// const str = 'hello';

// ts 문자열 선언
const str: string = 'hello';

// ts 숫자 선언
const num: number = 10;

// ts 배열 선언
const arr: Array<number> = [1,2,3]; // number로된 배열이다.
const heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]; // 10이 들어가면 에러가 남
const items: number[] = [1,2,3] // Array<number> == number[]

// ts 튜플 // 배열의 특정 인덱스의 타입을 정의 하는것
const address: [string, number] = ['gangnam', 100];

// ts 객체 - 대다수의 데이터형이 객체이기 때문에 object로 했을때 호환되는 변수가 많을것이다.
const obj: object = {};
const person: object = { // 이렇게 object라고만 타입을 선언해도 에러가 나지 않는다.
    name: 'capt',
    age: 100
};
const person2: { name: string, age: number } = { // 좀더 구체적으로 명시하고 싶다면 이렇게 선언해주면 된다.
    name: 'thor',
    age: 1000
}

// ts 진위값
const show: boolean = true;