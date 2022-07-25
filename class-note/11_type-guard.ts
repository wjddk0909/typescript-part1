interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

let tony = introduce();
console.log(tony.skill); // 유니온 타입은 공통된 속성에만 접근 가능해서 에러가 난다.

// 타입단언
if ((tony as Developer).skill) {
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    let age = (tony as Person).age;
    console.log(age);
}

// 티입 가드
function isDeveloper(target: Developer | Person): target is Developer {// Developer인지 아닌지
    return (target as Developer).skill !== undefined; // skill이 있을때(undefined가 아닐때)
}

if(isDeveloper(tony)) {
    console.log(tony.skill);
} else {
    console.log(tony.age);
}

interface Avengers {
    name: string;
}

let hero: Avengers;

let capt = { name: 'Captain', location: 'Pangyo' }
hero = capt

function assemble(a: Avengers) {
    console.log("어벤저스 모여라", a.name);
}

assemble(capt) //"어벤저스 모여라",  "Captain"

// Enum 타입 호환 주의 사항
enum Status { Ready, Waiting };

enum Color { Red, Blue, Green };

let status1 = Status.Ready;
status1 = Color.Green;  // error

// Class 타입 호환 주의 사항
class Hulk {
    handSize: number;
    constructor(name: string, numHand: number) {
    }
}
class Captain {
    handSize: number;

    constructor(numHand: number) {
    }
}

let a: Hulk;
let s: Captain;

a = s; // OK
s = a; // OK