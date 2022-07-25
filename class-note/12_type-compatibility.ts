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

