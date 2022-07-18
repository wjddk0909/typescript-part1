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
getUser(ja)