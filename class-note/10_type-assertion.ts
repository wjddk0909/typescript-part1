// 타입 단언
let a; // 변수 a는 type any로 추론된다.
let b = 10; // 변수 b는 number로 추론된다.

a = 20;
a = 'a';

let c = a; // 변수 c, a 모두 타입이 any로 추론된다.
// 최종적으로 a에 string이 담겼지만 타입은 any로 추론된다.

// 타입 단언
let aa; // 변수 aa는 type any로 추론된다.
let bb = 10; // 변수 bb는 number로 추론된다.

aa = 20;
aa = 'a';

let cc = aa as string; // as로 타입 단언을 하면 변수 cc는  타입이 string으로 추론된다.
