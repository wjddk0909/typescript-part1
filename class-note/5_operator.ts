function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100);

// const name1: string | number | boolean;
function logMessage1(value: string | number) {
    // console.log(value);
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toUpperCase();
    }
    throw new TypeError('value must be string or number');
}
logMessage1('hello');
logMessage1(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    // someone.name = 'abc';
    // someone.skill = 'javascript'
}
askSomeone({ name: 'Developer', skill: '웹 개발' });
askSomeone({ name: 'Developer', age: 100 });

function askSomeone2(someone: Developer & Person) {
    // someone.name = 'abc';
    // someone.skill = 'javascript'
}

askSomeone2({ name: 'Developer', skill: '웹 개발' }) // 에러
askSomeone2({ name: 'Developer', skill: '웹 개발', age: 100 })

// const test1: string | number | boolean;
// const test2: string & number & boolean;