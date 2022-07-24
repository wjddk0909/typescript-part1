let a;
let b = 'abc';

function getC(c = 10) {
    let d = 'hi';
    return c + d;
}

// 타입추론 기본2
interface Dropdown<T> {
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'
}