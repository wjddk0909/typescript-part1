function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name

// 제네릭의 타입 제한
function logTextLength<T>(text: T): T {
  console.log(text.length); // error가 발생: T에 length가 없다는 에러가 발생한다. 왜냐면 아직 typescript는 text에 타입이 어떤건지 모르기 때문

  return text;
}
logTextLength('hi');

// 제네릭의 타입 제한
function logTextLength1<T>(text: T[]): T[] {
  console.log(text.length); // 배열이 들어온다는 것을 알았기 때문에 에러 해결(배열에는 length 프로퍼티 존재)

  return text;
}
logTextLength1('hi'); // 여기서는 아직 에러 발생, 인자에 데이터형태는 배열이 들어와야하는데 string이 들어왔기 때문

// 제네릭의 타입 제한
function logTextLength2<T>(text: T[]): T[] {
  console.log(text.length); // 배열이 들어온다는 것을 알았기 때문에 에러 해결(배열에는 length 프로퍼티 존재)
  return text;
}
logTextLength2(['hi']); // 배열로 전달하면 에러 해결, 제네릭의 타입 제한