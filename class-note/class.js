// ES2015 (ES6)
class Person {
    // 클래스 로직 -> 인스턴스 만들기
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

const ja = new Person('ellin', 20); // 생성 되었습니다.
console.log(ja)

// ES6이전 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}