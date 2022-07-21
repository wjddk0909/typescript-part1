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

function logText(text: string | number) {
    console.log(text);
    return text;
}

logText('a');
const a = logText('a');
a.split('') // error
logText(10);
// logText(true) // error