interface Person1 {
    name: string;
    age: number;
}

type Person2 = {
    name: string;
    age: number;
}

const ellin1: Person1 = {
    name: 'ellin',
    age: 20
}

const ellin2: Person2 = {
    name: 'ellin',
    age: 20
}

type MyString = string;

const str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
    // ...
}