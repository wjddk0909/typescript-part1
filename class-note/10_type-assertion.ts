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

// DOM API 조작
// <div id="app">hi</div>
let div = document.querySelector('div') // div는 HTMLDivElement 타입이라고 추론된다.
div.innerText; // div는 HTMLDivElement 타입이라고 추론, 때문에 innerText 속성이 타입 추론을 통해서 바로 뜸.
// 하지만 실무에선 위와 같이 안함.
// 실제로 타입스크립트를 실무에서 사용하게되면 그때는 위와 같이 이상적으로 사용할 수 없다.
// document.querySelector('div') <- 이 코드를 접근하는 시점에, querySelector 이 메소드가 실행되는 시점에서 div라는 엘리먼트가 있다라는 보장을 할 수가 없기 때문에.
// 그렇기 때문에 div가 있는지 확인을하고 그 다음에 조작을 하는 것이 일반적인 패턴이다.
if (div) {
    div.innerText;
}
