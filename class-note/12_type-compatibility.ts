// 인터페이스
interface Developer {
    name: string;
    skill: string;
}
// class Person {
//     name: string;
// }
interface Person {
    name: string;
}
let developer: Developer;
let person: Person;

// developer = person; // error: Person 인터페이스는 name 속성만 있고 Developer 인터페이스는 skill 속성까지 있기 때문에  추론과정에서 에러 발생
// developer = new Person()
person = developer // 반면, Developer 라는 인터페이스를 Person에 할당하면 추론과정에서 에러가 나지 않는다.

// 함수
let add = function(a: number) {
    // ...
}
let sum = function (a: number, b: number) {
    // ...
}
// 여기까지의 차이는 일단 파라미터의 갯수 차이가 있다. sum의 구조가 add의 구조보다 크다고 볼 수 있다.

add = sum // 그렇기 때문에 add에 sum을 할당하면 에러가 발생한다.

sum = add // 이거는 가능하다고 판단함

// 제네릭
interface Empty<T> {
    // ...
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2; // error
notempty2 = notempty1; // error