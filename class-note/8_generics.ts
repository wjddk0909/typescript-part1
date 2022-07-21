// function logText(text) {
//     console.log(text);
//     return text;
// }
//
// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
//
// logText<string>('hi');
// logText<number>(10);

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }
//
// logText('a');
// const a = logText('a');
// a.split('') // error
// logText(10);
// logText(true) // error

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// logText('a')
// logText(10)

const str = logText<string>('a');
str.split('') // 에러 없음, str에 마우스 올리면 프리뷰에 strign으로 추론되는것 확인 가능
const login = logText<boolean>(true);

